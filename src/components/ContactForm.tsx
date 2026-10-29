"use client";

import React, { useState } from "react";

const WHATSAPP_NUMBER = "525641541108";

function CheckCircleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.2 14.4-4.2-4.2 1.4-1.4 2.8 2.8 5.6-5.6 1.4 1.4-7 7Z" />
    </svg>
  );
}

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (nombre.trim().length < 2) {
      setError("Ingresa tu nombre.");
      return;
    }
    if (telefono.replace(/\D/g, "").length < 10) {
      setError("Ingresa tu teléfono a 10 dígitos.");
      return;
    }
    if (!acepta) {
      setError("Debes aceptar el aviso de privacidad para continuar.");
      return;
    }

    setSending(true);
    try {
      const params = new URLSearchParams(window.location.search);
      const payload = {
        nombre: nombre.trim(),
        telefono: telefono.trim(),
        email: email.trim() || undefined,
        mensaje: mensaje.trim() || undefined,
        origen: "formulario-contacto",
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
      try {
        (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
          event: "lead_submit",
          lead_origen: "formulario-contacto",
        });
      } catch {
        /* noop */
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar.");
    } finally {
      setSending(false);
    }
  }

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, soy ${nombre || "un trabajador"} y quiero una consulta gratuita sobre mi caso laboral.`
  )}`;

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-navy-custom/5 rounded-xl blur-2xl" />
      <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="bg-navy-custom p-6 text-white">
          <h3 className="text-xl font-bold">Solicita tu consulta GRATIS</h3>
          <p className="text-white/70 text-sm mt-1">Déjanos tus datos y te contactamos hoy mismo.</p>
        </div>

        <div className="p-8">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full rounded border-slate-300 text-sm focus:ring-primary focus:border-primary"
                type="text"
                placeholder="Nombre completo"
                autoComplete="name"
              />
              <input
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full rounded border-slate-300 text-sm focus:ring-primary focus:border-primary"
                type="tel"
                inputMode="tel"
                placeholder="Teléfono (WhatsApp), 10 dígitos"
                autoComplete="tel"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border-slate-300 text-sm focus:ring-primary focus:border-primary"
                type="email"
                placeholder="Correo electrónico (opcional)"
                autoComplete="email"
              />
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full rounded border-slate-300 text-sm focus:ring-primary focus:border-primary"
                rows={3}
                placeholder="¿En qué podemos ayudarte? (opcional)"
              />

              <label className="flex items-start gap-2 text-[11px] text-slate-500 leading-snug">
                <input
                  checked={acepta}
                  onChange={(e) => setAcepta(e.target.checked)}
                  type="checkbox"
                  className="mt-0.5 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span>
                  Acepto el{" "}
                  <a href="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                    aviso de privacidad
                  </a>{" "}
                  y ser contactado por Cuatecontzi Asesoría Legal.
                </span>
              </label>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-primary hover:bg-red-700 disabled:opacity-60 text-white px-6 py-3 rounded-lg font-black transition-all shadow-lg"
              >
                {sending ? "ENVIANDO..." : "QUIERO MI CONSULTA GRATIS"}
              </button>

              <p className="text-[10px] text-slate-400 text-center">
                Respuesta el mismo día. Sin compromiso.
              </p>
            </form>
          ) : (
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 font-bold">
                <CheckCircleIcon className="h-6 w-6" />
                ¡Gracias{nombre ? `, ${nombre.split(" ")[0]}` : ""}!
              </div>
              <p className="text-sm text-slate-600">
                Recibimos tus datos. Un abogado de Cuatecontzi te contactará a la brevedad.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1ebe5b] text-white px-6 py-3 rounded-lg font-black transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Escríbenos ahora por WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
