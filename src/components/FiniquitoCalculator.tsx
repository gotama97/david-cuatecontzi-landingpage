"use client";

import React, { useState, useEffect, useCallback } from "react";

type Result = {
  aguinaldo: number;
  vacaciones: number;
  primaVacacional: number;
  indemnizacion: number;
  total: number;
  antiguedad: number;
};

const WHATSAPP_NUMBER = "525641541108";

const currency = (v: number) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(v);

function yearsBetween(start: Date, end: Date) {
  const msPerYear = 365.25 * 24 * 60 * 60 * 1000; // account for leap years
  return Math.max(0, (end.getTime() - start.getTime()) / msPerYear);
}

export default function FiniquitoCalculator() {
  // --- Datos del cálculo ---
  const [fechaIngreso, setFechaIngreso] = useState<string>("");
  const [fechaSalida, setFechaSalida] = useState<string>("");
  const [salarioMensual, setSalarioMensual] = useState<string>("");
  const [motivo, setMotivo] = useState<string>("Despido Injustificado");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  // --- Captura de lead ---
  const [nombre, setNombre] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [acepta, setAcepta] = useState<boolean>(false);
  const [leadError, setLeadError] = useState<string | null>(null);
  const [sending, setSending] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const validateAndCompute = useCallback((showError = true) => {
    setError(null);
    setResult(null);

    if (!fechaIngreso || !fechaSalida || !salarioMensual || !motivo) {
      if (showError) setError("Por favor completa todos los campos.");
      return;
    }

    const start = new Date(fechaIngreso);
    const end = new Date(fechaSalida);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      if (showError) setError("Fechas inválidas.");
      return;
    }

    if (end < start) {
      if (showError) setError("La fecha de salida no puede ser anterior a la de ingreso.");
      return;
    }

    const salarioNum = Number(salarioMensual);
    if (isNaN(salarioNum) || salarioNum <= 0) {
      if (showError) setError("Introduce un salario mensual válido mayor a 0.");
      return;
    }

    const antiguedad = yearsBetween(start, end);
    const salarioDiario = salarioNum / 30;

    const aguinaldo = salarioDiario * 15 * antiguedad;
    const vacaciones = salarioDiario * 12 * antiguedad;
    const primaVacacional = vacaciones * 0.25;

    let indemnizacion = 0;
    if (motivo === "Despido Injustificado") {
      // 90 días + 20 días por año trabajado
      indemnizacion = salarioDiario * (90 + 20 * antiguedad);
    }

    const total = aguinaldo + vacaciones + primaVacacional + indemnizacion;

    setResult({ aguinaldo, vacaciones, primaVacacional, indemnizacion, total, antiguedad });
  }, [fechaIngreso, fechaSalida, salarioMensual, motivo]);

  // Auto-calcula al cambiar cualquier campo (sin mostrar errores)
  useEffect(() => {
    validateAndCompute(false);
  }, [fechaIngreso, fechaSalida, salarioMensual, motivo, validateAndCompute]);

  // Si cambian los datos del cálculo después de enviar, permitimos re-enviar
  useEffect(() => {
    setSent(false);
  }, [fechaIngreso, fechaSalida, salarioMensual, motivo]);

  async function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLeadError(null);

    if (!result) {
      setLeadError("Primero calcula tu finiquito arriba.");
      return;
    }
    if (nombre.trim().length < 2) {
      setLeadError("Ingresa tu nombre.");
      return;
    }
    if (telefono.replace(/\D/g, "").length < 10) {
      setLeadError("Ingresa tu teléfono a 10 dígitos.");
      return;
    }
    if (!acepta) {
      setLeadError("Debes aceptar el aviso de privacidad para continuar.");
      return;
    }

    setSending(true);
    try {
      // Captura de atribución (útil para campañas de Facebook)
      const params = new URLSearchParams(window.location.search);
      const payload = {
        nombre: nombre.trim(),
        telefono: telefono.trim(),
        email: email.trim() || undefined,
        motivo,
        salarioMensual: Number(salarioMensual),
        fechaIngreso,
        fechaSalida,
        antiguedadAnios: Number(result.antiguedad.toFixed(2)),
        montoEstimado: Number(result.total.toFixed(2)),
        desglose: {
          aguinaldo: Number(result.aguinaldo.toFixed(2)),
          vacaciones: Number(result.vacaciones.toFixed(2)),
          primaVacacional: Number(result.primaVacacional.toFixed(2)),
          indemnizacion: Number(result.indemnizacion.toFixed(2)),
        },
        origen: "calculadora",
        utm: {
          source: params.get("utm_source") || undefined,
          medium: params.get("utm_medium") || undefined,
          campaign: params.get("utm_campaign") || undefined,
        },
        referrer: document.referrer || undefined,
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "No pudimos enviar tus datos.");
      }

      setSent(true);

      // Evento para Google Tag Manager / Analytics
      try {
        (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
          event: "lead_submit",
          lead_value: Number(result.total.toFixed(2)),
          lead_motivo: motivo,
        });
      } catch {
        /* noop */
      }
    } catch (err) {
      setLeadError(err instanceof Error ? err.message : "Error al enviar.");
    } finally {
      setSending(false);
    }
  }

  const whatsappHref = result
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hola, soy ${nombre || "un trabajador"}. Usé la calculadora y mi finiquito estimado es ${currency(
          result.total
        )} por ${motivo.toLowerCase()}. Quiero una revisión gratuita con un abogado.`
      )}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-navy-custom/5 rounded-xl blur-2xl" />
      <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="bg-navy-custom p-6 text-white">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="material-icons">calculate</span>
            Calculadora de Finiquito 2026
          </h3>
          <p className="text-white/60 text-xs mt-1 bg-white/10 inline-block px-2 py-0.5 rounded">Estimación Legal Provisoria</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Fecha de Ingreso</label>
              <input value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" type="date" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Fecha de Salida</label>
              <input value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)} className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" type="date" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Salario Mensual Bruto (MXN)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input value={salarioMensual} onChange={(e) => {
                const val = e.target.value;
                if (val === "" || (Number(val) <= 999999 && val.length <= 6)) {
                  setSalarioMensual(val);
                }
              }} className="w-full pl-8 rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="0.00" type="number" step="0.01" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Motivo de Separación</label>
            <select value={motivo} onChange={(e) => setMotivo(e.target.value)} className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
              <option>Despido Injustificado</option>
              <option>Renuncia Voluntaria</option>
              <option>Término de Contrato</option>
              <option>Rescisión con Causa</option>
            </select>
          </div>

          <div className="p-4 bg-background-light dark:bg-slate-800 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Total Estimado</p>
                <p className="text-3xl font-black text-navy-custom dark:text-white">{result ? currency(result.total) : "$ --,---.--"}</p>
              </div>
              <button onClick={() => validateAndCompute(true)} className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-lg font-black transition-all shadow-lg">
                CALCULAR
              </button>
            </div>

            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          </div>

          {/* ---------- Captura de lead (aparece tras un cálculo válido) ---------- */}
          {result && !sent && (
            <form onSubmit={handleLeadSubmit} className="rounded-lg border border-primary/30 bg-primary/5 p-5 space-y-4">
              <div>
                <p className="font-extrabold text-navy-custom dark:text-white leading-tight">
                  Recibe tu desglose completo + revisión <span className="text-primary">GRATIS</span> con un abogado
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Déjanos tus datos y un especialista te confirma cuánto te corresponde realmente.
                </p>
              </div>

              <div className="space-y-3">
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary"
                  type="text"
                  placeholder="Nombre completo"
                  autoComplete="name"
                />
                <input
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary"
                  type="tel"
                  inputMode="tel"
                  placeholder="Teléfono (WhatsApp) — 10 dígitos"
                  autoComplete="tel"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary"
                  type="email"
                  placeholder="Correo electrónico (opcional)"
                  autoComplete="email"
                />
              </div>

              <label className="flex items-start gap-2 text-[11px] text-slate-500 leading-snug">
                <input
                  checked={acepta}
                  onChange={(e) => setAcepta(e.target.checked)}
                  type="checkbox"
                  className="mt-0.5 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span>
                  Acepto el <a href="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">aviso de privacidad</a> y ser contactado por Cuatecontzi Asesoría Legal.
                </span>
              </label>

              {leadError && <p className="text-sm text-red-600">{leadError}</p>}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-primary hover:bg-red-700 disabled:opacity-60 text-white px-6 py-3 rounded-lg font-black transition-all shadow-lg"
              >
                {sending ? "ENVIANDO..." : "RECIBIR MI ANÁLISIS GRATIS"}
              </button>
            </form>
          )}

          {/* ---------- Desglose + WhatsApp (se revela tras enviar) ---------- */}
          {result && sent && (
            <div className="rounded-lg border border-green-500/40 bg-green-500/5 p-5 space-y-4">
              <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-bold">
                <span className="material-icons">check_circle</span>
                ¡Listo{nombre ? `, ${nombre.split(" ")[0]}` : ""}! Recibimos tus datos.
              </div>

              <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <p className="flex justify-between"><span>Aguinaldo</span><strong>{currency(result.aguinaldo)}</strong></p>
                <p className="flex justify-between"><span>Vacaciones</span><strong>{currency(result.vacaciones)}</strong></p>
                <p className="flex justify-between"><span>Prima vacacional</span><strong>{currency(result.primaVacacional)}</strong></p>
                <p className="flex justify-between"><span>Indemnización</span><strong>{currency(result.indemnizacion)}</strong></p>
                <p className="flex justify-between border-t border-slate-200 dark:border-slate-700 pt-1 mt-1 text-navy-custom dark:text-white"><span className="font-bold">Total estimado</span><strong>{currency(result.total)}</strong></p>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1ebe5b] text-white px-6 py-3 rounded-lg font-black transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Hablar con un abogado por WhatsApp
              </a>
              <p className="text-[10px] text-slate-400 text-center">Un especialista te contactará a la brevedad.</p>
            </div>
          )}

          <p className="text-[10px] text-slate-400 italic text-center">*Este cálculo es una aproximación y no constituye una opinión legal formal hasta ser revisado por un abogado de Cuatecontzi.</p>
        </div>
      </div>
    </div>
  );
}
