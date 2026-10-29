import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Cuatecontzi Asesoría Legal",
  description:
    "Aviso de Privacidad de Cuatecontzi Asesoría Legal conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
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

export default function AvisoDePrivacidad() {
  return (
    <LegalShell title="Aviso de Privacidad">
      <p>
        En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los
        Particulares (LFPDPPP), su Reglamento y demás normatividad aplicable, se pone a su
        disposición el presente Aviso de Privacidad.
      </p>

      <H2>1. Identidad y domicilio del responsable</H2>
      <p>
        <strong>[Razón social o nombre completo del responsable]</strong> (en adelante,
        &ldquo;Cuatecontzi Asesoría Legal&rdquo; o &ldquo;el Responsable&rdquo;), con domicilio en{" "}
        <strong>[domicilio completo]</strong>, Ciudad de México, es responsable del uso y protección
        de sus datos personales. Para cualquier asunto relacionado con este aviso puede contactarnos
        en el correo <a className="text-primary underline" href="mailto:contacto@cuatecontzi.com">contacto@cuatecontzi.com</a>{" "}
        o al teléfono <a className="text-primary underline" href="tel:+525641541108">56 4154 1108</a>.
      </p>

      <H2>2. Datos personales que recabamos</H2>
      <p>
        Para las finalidades señaladas en este aviso podemos recabar los siguientes datos personales:
        nombre completo, número telefónico, correo electrónico, así como información relacionada con su
        situación laboral que usted proporcione de forma voluntaria (por ejemplo, fechas de ingreso y
        salida, salario, motivo de separación y monto estimado de finiquito). No recabamos datos
        personales sensibles a través de este sitio.
      </p>

      <H2>3. Finalidades del tratamiento</H2>
      <p><strong>Finalidades primarias</strong> (necesarias para la relación con usted):</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Contactarle para brindarle asesoría legal y dar seguimiento a su consulta.</li>
        <li>Elaborar una estimación y, en su caso, una valoración de su caso laboral.</li>
        <li>Integrar y dar seguimiento a su expediente durante el proceso legal.</li>
      </ul>
      <p className="mt-3"><strong>Finalidades secundarias</strong> (que puede rechazar):</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Enviarle información sobre servicios, promociones y contenido de interés.</li>
        <li>Fines estadísticos y de mejora de nuestros servicios.</li>
      </ul>
      <p className="mt-3">
        Si no desea que sus datos se traten para las finalidades secundarias, puede manifestarlo
        enviando un correo a <a className="text-primary underline" href="mailto:contacto@cuatecontzi.com">contacto@cuatecontzi.com</a>.
      </p>

      <H2>4. Transferencia de datos</H2>
      <p>
        Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo en los
        casos previstos por el artículo 37 de la LFPDPPP (por ejemplo, cuando sea requerido por
        autoridad competente). Podemos apoyarnos en proveedores de servicios tecnológicos (como
        alojamiento del sitio y base de datos) que actúan por nuestra cuenta y bajo nuestras
        instrucciones, sin que ello constituya una transferencia en términos de la ley.
      </p>

      <H2>5. Medios para ejercer sus derechos ARCO</H2>
      <p>
        Usted tiene derecho a Acceder, Rectificar y Cancelar sus datos personales, así como a
        Oponerse a su tratamiento o revocar el consentimiento otorgado (derechos ARCO). Para
        ejercerlos, envíe su solicitud al correo{" "}
        <a className="text-primary underline" href="mailto:contacto@cuatecontzi.com">contacto@cuatecontzi.com</a>,
        indicando su nombre, los datos sobre los que desea ejercer el derecho y la descripción clara
        de su solicitud. Daremos respuesta en los plazos que marca la ley.
      </p>

      <H2>6. Uso de cookies y tecnologías de rastreo</H2>
      <p>
        Este sitio utiliza cookies y herramientas de análisis (como Google Tag Manager) para medir el
        uso del sitio y mejorar la experiencia. Puede deshabilitar las cookies desde la configuración
        de su navegador; algunas funciones podrían verse afectadas.
      </p>

      <H2>7. Cambios al aviso de privacidad</H2>
      <p>
        Este aviso puede sufrir modificaciones. Cualquier cambio será publicado en esta misma página,
        por lo que le recomendamos revisarla periódicamente.
      </p>

      <H2>8. Consentimiento</H2>
      <p>
        Al proporcionar sus datos personales a través de este sitio, usted manifiesta su conformidad
        con el presente Aviso de Privacidad.
      </p>
    </LegalShell>
  );
}
