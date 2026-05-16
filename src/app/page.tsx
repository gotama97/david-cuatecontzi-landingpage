'use client';

import Image from "next/image";
import FiniquitoCalculator from "../components/FiniquitoCalculator";

function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4 39.5 10.5V22C39.5 32.4 33 40.3 24 44 15 40.3 8.5 32.4 8.5 22V10.5L24 4Z"
        fill="currentColor"
        opacity=".18"
      />
      <path
        d="M24 5.7 38 11.6V22c0 9.1-5.5 16.3-14 20.1C15.5 38.3 10 31.1 10 22V11.6L24 5.7Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M17.5 29.5H30.5M24 14v15M18 18h12M20 18l-4 8h8l-4-8ZM28 18l-4 8h8l-4-8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path d="M18 34h12" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.5c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3V14h2.8v8h3.4Z" />
    </svg>
  );
}

function GlobeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8M12 3c2.1 2.3 3.2 5.3 3.2 9S14.1 18.7 12 21c-2.1-2.3-3.2-5.3-3.2-9S9.9 5.3 12 3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.04 2C6.58 2 2.14 6.43 2.14 11.9c0 1.74.46 3.45 1.34 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.44 9.9-9.9A9.9 9.9 0 0 0 12.04 2Zm0 18.16h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 0 1-1.26-4.39 8.27 8.27 0 1 1 8.25 8.26Zm4.53-6.19c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.65.8-.79.96-.15.17-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M6.6 4.8 8.5 3c.5-.5 1.4-.5 1.8.1l1.6 2.1c.4.5.4 1.2 0 1.7l-1.1 1.3a12 12 0 0 0 5 5l1.3-1.1c.5-.4 1.2-.4 1.7 0l2.1 1.6c.6.4.6 1.3.1 1.8l-1.8 1.9c-.9.9-2.2 1.2-3.4.8A18.5 18.5 0 0 1 5.8 8.2c-.4-1.2-.1-2.5.8-3.4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function UsersIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M8.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2.8 20c.6-3.2 2.7-5.1 5.7-5.1s5.1 1.9 5.7 5.1M16.2 11.2a3 3 0 1 0 0-6M15.5 15.1c2.4.3 4.1 1.9 4.7 4.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function MoneyIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M3.5 7.5h17v9h-17v-9ZM6.5 10.5h.01M17.5 13.5h.01M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 7.5c0 1.4-1.1 2.5-2.5 2.5M19.5 10c-1.4 0-2.5-1.1-2.5-2.5M4.5 14c1.4 0 2.5 1.1 2.5 2.5M17 16.5c0-1.4 1.1-2.5 2.5-2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function LocationIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M19 10c0 5.2-7 11-7 11s-7-5.8-7-11a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-navy-custom p-2 rounded text-white">
                <BrandMark className="h-8 w-8" />
              </div>
              <div>
                <span className="text-xl branding-title block leading-none text-navy-custom">CUATECONTZI</span>
                <span className="text-xs tracking-widest text-primary font-bold uppercase">Asesoría Laboral</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a className="text-navy-custom hover:text-primary transition-colors font-semibold" href="#">Servicios</a>
              <a className="text-navy-custom hover:text-primary transition-colors font-semibold" href="#">Casos de Éxito</a>
              <a className="text-navy-custom hover:text-primary transition-colors font-semibold" href="#">Blog</a>
              <a href="tel:+525641541108" className="bg-navy-custom hover:bg-navy-custom/90 text-white px-6 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-navy-custom/20">
                <PhoneIcon />
                CONSULTA GRATUITA
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-custom opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm">
                <span className="material-icons text-sm">verified_user</span>
                ESPECIALISTAS EN CONCILIACIONES LABORALES
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-navy-custom dark:text-white leading-tight">
                ¿Fuiste despedido? <span className="text-primary italic">Calcula tu liquidación justa.</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                No aceptes menos de lo que marca la ley. En <strong>Cuatecontzi Asesoría Legal</strong> garantizamos que recibas el pago total de tus prestaciones.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md border border-slate-100">
                    <UsersIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-xl leading-none text-navy-custom dark:text-white">1,500+</p>
                    <p className="text-sm text-slate-500">Casos Ganados</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md border border-slate-100">
                    <MoneyIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-xl leading-none text-navy-custom dark:text-white">$25M+</p>
                    <p className="text-sm text-slate-500">Recuperados</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Finiquito calculator component */}
              <FiniquitoCalculator />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold dark:text-white mb-4">¿Por qué contratar a un experto?</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-custom text-white">
                  <th className="p-6 font-bold uppercase tracking-wider text-sm">Concepto</th>
                  <th className="p-6 font-bold uppercase tracking-wider text-sm bg-black/10">Sin Abogado</th>
                  <th className="p-6 font-bold uppercase tracking-wider text-sm bg-primary">Con Cuatecontzi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr className="dark:bg-slate-900/50">
                  <td className="p-6 font-medium">Monto de Liquidación</td>
                  <td className="p-6">Oferta mínima de la empresa</td>
                  <td className="p-6 font-bold text-primary">100% de lo legal + Bonos</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium">Tiempo de Proceso</td>
                  <td className="p-6">Meses de incertidumbre</td>
                  <td className="p-6 font-bold text-primary">Conciliación Express</td>
                </tr>
                <tr className="dark:bg-slate-900/50">
                  <td className="p-6 font-medium">Presión Psicológica</td>
                  <td className="p-6">Tú negocias directamente</td>
                  <td className="p-6 font-bold text-primary">Nosotros damos la cara</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium">Gastos Legales</td>
                  <td className="p-6">Variable / Anticipos</td>
                  <td className="p-6 font-bold text-primary">Cobra solo si tú cobras</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-extrabold text-navy-custom dark:text-white mb-6">Nuestro Proceso de Éxito</h2>
              <p className="text-slate-600 dark:text-slate-400">Acompañamiento total desde el primer mensaje hasta la firma de tu cheque de liquidación.</p>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 z-0"></div>
              <div className="relative z-10 space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-primary border-4 border-white shadow-lg flex items-center justify-center text-2xl font-black text-white group-hover:bg-navy-custom transition-all">01</div>
                <h4 className="font-bold text-xl">Diagnóstico</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Analizamos tu contrato y situación para determinar el monto real adeudado.</p>
              </div>
              <div className="relative z-10 space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-navy-custom border-4 border-white shadow-lg flex items-center justify-center text-2xl font-black text-white group-hover:bg-primary transition-all">02</div>
                <h4 className="font-bold text-xl">Conciliación</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Citamos a la empresa ante el Centro de Conciliación y negociamos con firmeza.</p>
              </div>
              <div className="relative z-10 space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-primary border-4 border-white shadow-lg flex items-center justify-center text-2xl font-black text-white group-hover:bg-navy-custom transition-all">03</div>
                <h4 className="font-bold text-xl">Liquidación</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Supervisamos la firma del convenio y la entrega inmediata de tu pago.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 overflow-hidden bg-navy-custom text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Casos Ganados por Cuatecontzi</h2>
              <p className="text-white/60">Historias reales de justicia laboral lograda.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="flex gap-1 text-primary mb-6"><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span></div>
              <p className="text-lg italic mb-8">&ldquo;Me querían dar solo una fracción de lo que me correspondía tras 10 años. Gracias al equipo de Cuatecontzi recuperé cada peso.&rdquo;</p>
              <div className="flex items-center gap-4">
                <Image alt="Client Photo" className="w-12 h-12 rounded-full object-cover" width={48} height={48} src="https://lh3.googleusercontent.com/aida-public/AB6AXuD61YTosTfU5IomnQXpeXN7KAxphYtjz9fLsi4Ix5_r6UD2oEtZLlNWoA0W-Lxt-3r45MVfs04kijEy9NiUfRmriQafklOeFn4ctwVM3WOLhppFMnG306qiUK0h0XsSG_Am8Kc_i5wplp4iFgNn_Uog8X9_iCS5d6SpH3TvEfEq3R0KINOZQdnA6j4d2Kk73mpcRYeVLlfB1Pd_HdrIqhWGUAhbRniWDrQ8VG_F7IYUlnAb69KvFYk0-e-dyppKJfwVFl3qtSfjzg" />
                <div>
                  <p className="font-bold">Ricardo Méndez</p>
                  <p className="text-xs text-white/40 italic">Gerente de Ventas</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="flex gap-1 text-primary mb-6"><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span></div>
              <p className="text-lg italic mb-8">&ldquo;Rápidos, eficientes y muy profesionales. La atención por WhatsApp de Cuatecontzi fue inmediata y resolutiva.&rdquo;</p>
              <div className="flex items-center gap-4">
                <Image alt="Client Photo" className="w-12 h-12 rounded-full object-cover" width={48} height={48} src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8izTCjA2jZIDUR5xhJx8mjADmZtVwsoEBaGgCbXU8B2jcUgMppLX9jd2WyRh9ivBymSe0c-n-EgRtlboxF8yWaX-DEhdnonQz8vHq52Rr1a-9R5d0a629E1kLBZRSxi7VtLVDJk_qo9m1ZzUWsSF9w_0sbzvCEwd0Ox6kmd5ljtiy8DLhdN9iiaAfUb1E6gS0dR_Q9AEg-h9OdTllC4gm1Fg4EnXTgFOdI7D0AtXPwehgbySYpK3p8tg7YvVF_zEa1SMLLqArQQ" />
                <div>
                  <p className="font-bold">Sofía Valdés</p>
                  <p className="text-xs text-white/40 italic">Administradora</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="flex gap-1 text-primary mb-6"><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span></div>
              <p className="text-lg italic mb-8">&ldquo;Pensé que por ser una empresa grande no podría hacer nada. Cuatecontzi me demostró que la ley es para todos.&rdquo;</p>
              <div className="flex items-center gap-4">
                <Image alt="Client Photo" className="w-12 h-12 rounded-full object-cover" width={48} height={48} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbogrMcX0lPJdjbivIUmXNFbhBz8bU12yA9UWAF1ie2uMndIKR32PSwfUK05QAKLnXBeHqt5SxSPfTUOUjxWH2CfmxO2NVUgSp4hpNt4Wue_-e9U_Nwfn5O7FhWTKpoVYtpoQUNym5-yzBGsFJvd5yT2ZosEUtQbbpLj3axNL-rcc5blwpWAxx8KWY7P_fY4V_ZacbvZ0aOfsyL4N7Z0I38V-f0AihVunCtTTW6aGYiAunZBcL3zT59ECju9V8zIR4lMM-I1mE_Q" />
                <div>
                  <p className="font-bold">Héctor Rojas</p>
                  <p className="text-xs text-white/40 italic">Operativo Senior</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-slate-900 py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-navy-custom p-1.5 rounded text-white">
                  <BrandMark className="h-5 w-5" />
                </div>
                <span className="text-lg font-extrabold tracking-tight text-navy-custom dark:text-white">CUATECONTZI</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">Defendiendo los derechos del trabajador con firmeza y profesionalismo. Expertos en derecho laboral y litigio estratégico.</p>
            </div>
            <div>
              <h5 className="font-bold text-navy-custom dark:text-white mb-6 uppercase text-xs tracking-widest">Servicios</h5>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">Despidos Injustificados</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Acoso Laboral</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Cálculo de Finiquito</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Asesoría a Sindicatos</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-navy-custom dark:text-white mb-6 uppercase text-xs tracking-widest">Contacto</h5>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-center gap-2"><span className="material-icons text-sm text-primary">email</span> contacto@cuatecontzi.com</li>
                <li className="flex items-center gap-2"><PhoneIcon className="h-4 w-4 text-primary" /> <a className="hover:text-primary transition-colors" href="tel:+525641541108">56 4154 1108</a></li>
                <li className="flex items-center gap-2"><LocationIcon className="h-4 w-4 text-primary" /> CDMX</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-navy-custom dark:text-white mb-6 uppercase text-xs tracking-widest">Horarios</h5>
              <p className="text-sm text-slate-500 mb-2">Lun - Vie: 9:00 AM - 7:00 PM</p>
              <p className="text-sm text-slate-500 mb-6">Sáb: 10:00 AM - 2:00 PM</p>
              <div className="flex gap-4">
                <a aria-label="Facebook" className="w-8 h-8 rounded bg-navy-custom flex items-center justify-center text-white hover:bg-primary transition-colors" href="#"><FacebookIcon /></a>
                <a aria-label="Sitio web" className="w-8 h-8 rounded bg-navy-custom flex items-center justify-center text-white hover:bg-primary transition-colors" href="#"><GlobeIcon /></a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-slate-400">© 2024 Cuatecontzi Asesoría Legal. Todos los derechos reservados. Aviso de Privacidad.</p>
            <div className="flex gap-6 text-[11px] text-slate-400">
              <a className="hover:underline" href="#">Términos y Condiciones</a>
              <a className="hover:underline" href="#">Mapa del Sitio</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a aria-label="WhatsApp" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform" href="https://wa.me/525641541108">
          <WhatsAppIcon />
        </a>
      </div>
    </main>
  );
}
