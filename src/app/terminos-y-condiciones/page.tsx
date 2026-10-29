import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Cuatecontzi Asesoría Legal",
  description:
    "Términos y condiciones de uso del sitio de Cuatecontzi Asesoría Legal.",
  robots: { index: true, follow: true },
};

function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="bg-background-light min-h-screen font-display text-slate-800">
      <header className="bg-navy-custom text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-tight">CUATECONTZI</span>
            <span className="text-[10px] tracking-widest text-primary font-bold uppercase">Asesoría Legal</span>
          </Link>
          <Link href="/" className="text-sm text-white/80 hover:text-white transition-colors">← Volver al inicio</Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-extrabold text-navy-custom mb-2">{title}</h1>
        <p className="text-sm text-slate-500 mb-8">Última actualización: octubre de 2026</p>
        <div className="space-y-6 leading-relaxed text-[15px]">{children}</div>
      </article>

      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Cuatecontzi Asesoría Legal. Todos los derechos reservados.
      </footer>
    </main>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-navy-custom mt-8 mb-2">{children}</h2>;
}

export default function TerminosYCondiciones() {
  return (
    <LegalShell title="Términos y Condiciones">
      <p>
        El acceso y uso de este sitio web implica la aceptación de los presentes Términos y
        Condiciones. Si no está de acuerdo con ellos, le solicitamos abstenerse de utilizar el sitio.
      </p>

      <H2>1. Objeto del sitio</H2>
      <p>
        Este sitio tiene como finalidad ofrecer información sobre los servicios de asesoría legal
        laboral de Cuatecontzi Asesoría Legal y permitir que los usuarios soliciten una consulta.
      </p>

      <H2>2. La calculadora es una estimación</H2>
      <p>
        La &ldquo;Calculadora de Finiquito&rdquo; ofrece únicamente una <strong>estimación aproximada</strong>{" "}
        con fines informativos. No constituye una opinión legal, un cálculo definitivo ni una promesa
        de resultado. El monto real depende de las circunstancias particulares de cada caso y debe ser
        revisado por un abogado.
      </p>

      <H2>3. No constituye asesoría legal</H2>
      <p>
        La información contenida en el sitio es de carácter general y no sustituye la asesoría de un
        profesional. La relación profesional abogado-cliente se formaliza únicamente mediante acuerdo
        expreso entre las partes.
      </p>

      <H2>4. Propiedad intelectual</H2>
      <p>
        Los contenidos, marcas, logotipos y elementos gráficos del sitio son propiedad de Cuatecontzi
        Asesoría Legal o se utilizan con la debida autorización, y no pueden reproducirse sin
        consentimiento previo por escrito.
      </p>

      <H2>5. Tratamiento de datos personales</H2>
      <p>
        El tratamiento de los datos que usted proporcione se rige por nuestro{" "}
        <Link href="/aviso-de-privacidad" className="text-primary underline">Aviso de Privacidad</Link>.
      </p>

      <H2>6. Modificaciones</H2>
      <p>
        Nos reservamos el derecho de modificar en cualquier momento estos Términos y Condiciones. Los
        cambios entrarán en vigor desde su publicación en esta página.
      </p>

      <H2>7. Contacto</H2>
      <p>
        Para cualquier duda sobre estos términos, escríbanos a{" "}
        <a className="text-primary underline" href="mailto:contacto@cuatecontzi.com">contacto@cuatecontzi.com</a>.
      </p>
    </LegalShell>
  );
}
