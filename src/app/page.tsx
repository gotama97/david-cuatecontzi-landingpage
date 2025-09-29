'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const phone = "+525641541108"; // <-- Variable para el número

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <h1 className="text-lg font-bold text-blue-700">David Cuatecontzi</h1>
          <div className="flex gap-3">
            <a
              href={`tel:${phone}`} // <-- Usando la variable
              className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
            >
              📞 Llamar
            </a>
            <a
              href="mailto:contacto@ejemplo.com?subject=Consulta%20legal"
              className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100"
            >
              ✉️ Correo
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Abogado en CDMX — <span className="text-blue-700">Confianza y Experiencia</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Defensa en despidos injustificados, asesoría a empresas y representación laboral.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href={`tel:${phone}`} // <-- Usando la variable
              className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
            >
              📞 Llamar ahora
            </a>
            <a
              href="mailto:contacto@ejemplo.com"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100"
            >
              ✉️ Enviar correo
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-2xl font-semibold text-center">Servicios</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Despido injustificado", d: "Cálculo de liquidación y defensa legal." },
            { t: "Asesoría a empresas", d: "Contratos, cumplimiento y prevención de demandas." },
            { t: "Finiquito y liquidación", d: "Revisión y negociación justa de montos." },
          ].map((s) => (
            <div key={s.t} className="rounded-xl border p-6 shadow-sm">
              <h4 className="font-semibold">{s.t}</h4>
              <p className="mt-2 text-sm text-gray-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h3 className="text-2xl font-semibold text-center">Preguntas Frecuentes</h3>
          <div className="mt-6 space-y-4">
            {[
              {
                q: "¿La primera consulta tiene costo?",
                a: "No, la primera consulta es gratuita para evaluar tu caso.",
              },
              {
                q: "¿En cuánto tiempo se resuelve un caso laboral?",
                a: "Depende de la complejidad, pero normalmente entre 3 y 12 meses.",
              },
              {
                q: "¿Atienden empresas además de trabajadores?",
                a: "Sí, brindamos asesoría a empresas para prevenir demandas y cumplir obligaciones.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border p-4">
                <button
                  className="flex w-full justify-between text-left font-medium"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {item.q}
                  <span>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <p className="mt-2 text-gray-600">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h3 className="text-2xl font-semibold">¿Necesitas ayuda legal hoy?</h3>
        <p className="mt-2 text-gray-600">Contáctame y revisamos tu caso sin costo inicial.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href={`tel:${phone}`} // <-- Usando la variable
            className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
          >
            📞 Llamar ahora
          </a>
          <a
            href="mailto:contacto@ejemplo.com"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100"
          >
            ✉️ Escribir correo
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} David Cuatecontzi · Abogado en CDMX
        </div>
      </footer>
    </main>
  );
}
