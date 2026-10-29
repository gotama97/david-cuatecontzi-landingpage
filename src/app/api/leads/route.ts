import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendLeadNotification } from "@/lib/notify";

export const runtime = "nodejs";

type LeadPayload = {
  nombre?: string;
  telefono?: string;
  email?: string;
  motivo?: string;
  mensaje?: string;
  salarioMensual?: number;
  fechaIngreso?: string;
  fechaSalida?: string;
  antiguedadAnios?: number;
  montoEstimado?: number;
  desglose?: Record<string, number>;
  origen?: string;
  utm?: { source?: string; medium?: string; campaign?: string };
  referrer?: string;
};

// Normaliza y valida un teléfono mexicano (10 dígitos)
function cleanPhone(raw: string): string {
  return raw.replace(/[^\d+]/g, "");
}

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const nombre = (body.nombre ?? "").trim();
  const telefono = cleanPhone((body.telefono ?? "").trim());
  const email = (body.email ?? "").trim() || null;

  // Validación mínima de contacto
  if (nombre.length < 2) {
    return NextResponse.json({ error: "Ingresa tu nombre." }, { status: 400 });
  }
  const digits = telefono.replace(/\D/g, "");
  if (digits.length < 10) {
    return NextResponse.json(
      { error: "Ingresa un teléfono válido a 10 dígitos." },
      { status: 400 }
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Correo inválido." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();

  // Si la base de datos aún no está configurada, no perdemos el lead:
  // lo registramos en logs del servidor y respondemos OK para no frustrar
  // al usuario. (Ver estos logs en Vercel → Deployment → Functions.)
  if (!supabase) {
    console.warn("[LEAD] Supabase no configurado todavía. Lead recibido:", {
      nombre,
      telefono,
      email,
      motivo: body.motivo,
      montoEstimado: body.montoEstimado,
    });
    return NextResponse.json({ ok: true, stored: false });
  }

  const userAgent = req.headers.get("user-agent") ?? null;

  const { error } = await supabase.from("leads").insert({
    nombre,
    telefono,
    email,
    motivo: body.motivo ?? null,
    notas: body.mensaje?.trim() || null,
    salario_mensual: body.salarioMensual ?? null,
    fecha_ingreso: body.fechaIngreso || null,
    fecha_salida: body.fechaSalida || null,
    antiguedad_anios: body.antiguedadAnios ?? null,
    monto_estimado: body.montoEstimado ?? null,
    desglose: body.desglose ?? null,
    origen: body.origen ?? "calculadora",
    utm_source: body.utm?.source ?? null,
    utm_medium: body.utm?.medium ?? null,
    utm_campaign: body.utm?.campaign ?? null,
    referrer: body.referrer ?? null,
    user_agent: userAgent,
  });

  if (error) {
    console.error("[LEAD] Error al guardar en Supabase:", error.message);
    return NextResponse.json(
      { error: "No pudimos guardar tus datos. Intenta de nuevo." },
      { status: 500 }
    );
  }

  // Notificación por correo (no bloquea la respuesta si falla o no está configurada)
  await sendLeadNotification({
    nombre,
    telefono,
    email,
    motivo: body.motivo ?? null,
    montoEstimado: body.montoEstimado ?? null,
    salarioMensual: body.salarioMensual ?? null,
    antiguedadAnios: body.antiguedadAnios ?? null,
    origen: body.origen ?? "calculadora",
  });

  return NextResponse.json({ ok: true, stored: true });
}
