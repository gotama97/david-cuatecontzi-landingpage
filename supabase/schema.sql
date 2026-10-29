-- =====================================================================
-- Cuatecontzi Abogados — Esquema de captura de leads
-- Ejecuta este SQL en: Supabase → tu proyecto → SQL Editor → New query
-- =====================================================================

-- Estados del flujo de seguimiento (de captura hasta cobro)
do $$
begin
  if not exists (select 1 from pg_type where typname = 'lead_status') then
    create type lead_status as enum (
      'nuevo',          -- recién capturado por el sitio
      'contactado',     -- ya se le llamó / escribió
      'calificado',     -- es un caso viable
      'conciliacion',   -- en fase de conciliación
      'juicio',         -- en juicio
      'cierre',         -- juicio cerrado / por cobrar
      'ganado',         -- cobrado / resuelto a favor
      'descartado'      -- no procede / no interesado
    );
  end if;
end$$;

-- Tabla principal de leads
create table if not exists public.leads (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),

  -- Datos de contacto (lo que deja la persona en el formulario)
  nombre           text not null,
  telefono         text not null,
  email            text,

  -- Datos del cálculo de finiquito (contexto del caso)
  motivo           text,
  salario_mensual  numeric(12,2),
  fecha_ingreso    date,
  fecha_salida     date,
  antiguedad_anios numeric(6,2),
  monto_estimado   numeric(14,2),
  desglose         jsonb,          -- { aguinaldo, vacaciones, primaVacacional, indemnizacion }

  -- Seguimiento del caso (flujo offline)
  status           lead_status not null default 'nuevo',
  notas            text,

  -- Atribución / marketing (útil cuando se active Facebook Ads)
  origen           text default 'calculadora',
  utm_source       text,
  utm_medium       text,
  utm_campaign     text,
  referrer         text,
  user_agent       text
);

-- Índices para ordenar y filtrar en el panel
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx     on public.leads (status);

-- Mantener updated_at al día
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- =====================================================================
-- Seguridad (RLS): nadie puede leer/escribir con la llave pública.
-- El sitio inserta desde el servidor con la SERVICE ROLE KEY, que
-- ignora RLS. Así los datos personales de los leads quedan privados.
-- =====================================================================
alter table public.leads enable row level security;
-- (No creamos políticas públicas a propósito: sin políticas, la llave
--  anónima no puede leer ni escribir nada.)
