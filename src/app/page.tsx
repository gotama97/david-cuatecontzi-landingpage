'use client';

import FiniquitoCalculator from "../components/FiniquitoCalculator";

export default function Home() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-navy-custom p-2 rounded">
                <span className="material-icons text-white text-3xl">gavel</span>
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
              <button className="bg-navy-custom hover:bg-navy-custom/90 text-white px-6 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-navy-custom/20">
                <span className="material-icons text-sm">phone</span>
                CONSULTA GRATUITA
              </button>
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
                    <span className="material-icons text-primary">groups</span>
                  </div>
                  <div>
                    <p className="font-bold text-xl leading-none text-navy-custom dark:text-white">1,500+</p>
                    <p className="text-sm text-slate-500">Casos Ganados</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md border border-slate-100">
                    <span className="material-icons text-primary">account_balance</span>
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
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-4 border-navy-custom flex items-center justify-center text-2xl font-black text-navy-custom group-hover:bg-navy-custom group-hover:text-white transition-all">01</div>
                <h4 className="font-bold text-xl">Diagnóstico</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Analizamos tu contrato y situación para determinar el monto real adeudado.</p>
              </div>
              <div className="relative z-10 space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-4 border-primary flex items-center justify-center text-2xl font-black text-primary group-hover:bg-primary group-hover:text-white transition-all">02</div>
                <h4 className="font-bold text-xl">Conciliación</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Citamos a la empresa ante el Centro de Conciliación y negociamos con firmeza.</p>
              </div>
              <div className="relative z-10 space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-4 border-navy-custom flex items-center justify-center text-2xl font-black text-navy-custom group-hover:bg-navy-custom group-hover:text-white transition-all">03</div>
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
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"><span className="material-icons">chevron_left</span></button>
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"><span className="material-icons">chevron_right</span></button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="flex gap-1 text-primary mb-6"><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span></div>
              <p className="text-lg italic mb-8">"Me querían dar solo una fracción de lo que me correspondía tras 10 años. Gracias al equipo de Cuatecontzi recuperé cada peso."</p>
              <div className="flex items-center gap-4">
                <img alt="Client Photo" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD61YTosTfU5IomnQXpeXN7KAxphYtjz9fLsi4Ix5_r6UD2oEtZLlNWoA0W-Lxt-3r45MVfs04kijEy9NiUfRmriQafklOeFn4ctwVM3WOLhppFMnG306qiUK0h0XsSG_Am8Kc_i5wplp4iFgNn_Uog8X9_iCS5d6SpH3TvEfEq3R0KINOZQdnA6j4d2Kk73mpcRYeVLlfB1Pd_HdrIqhWGUAhbRniWDrQ8VG_F7IYUlnAb69KvFYk0-e-dyppKJfwVFl3qtSfjzg" />
                <div>
                  <p className="font-bold">Ricardo Méndez</p>
                  <p className="text-xs text-white/40 italic">Gerente de Ventas</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="flex gap-1 text-primary mb-6"><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span></div>
              <p className="text-lg italic mb-8">"Rápidos, eficientes y muy profesionales. La atención por WhatsApp de Cuatecontzi fue inmediata y resolutiva."</p>
              <div className="flex items-center gap-4">
                <img alt="Client Photo" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8izTCjA2jZIDUR5xhJx8mjADmZtVwsoEBaGgCbXU8B2jcUgMppLX9jd2WyRh9ivBymSe0c-n-EgRtlboxF8yWaX-DEhdnonQz8vHq52Rr1a-9R5d0a629E1kLBZRSxi7VtLVDJk_qo9m1ZzUWsSF9w_0sbzvCEwd0Ox6kmd5ljtiy8DLhdN9iiaAfUb1E6gS0dR_Q9AEg-h9OdTllC4gm1Fg4EnXTgFOdI7D0AtXPwehgbySYpK3p8tg7YvVF_zEa1SMLLqArQQ" />
                <div>
                  <p className="font-bold">Sofía Valdés</p>
                  <p className="text-xs text-white/40 italic">Administradora</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="flex gap-1 text-primary mb-6"><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span><span className="material-icons text-sm">star</span></div>
              <p className="text-lg italic mb-8">"Pensé que por ser una empresa grande no podría hacer nada. Cuatecontzi me demostró que la ley es para todos."</p>
              <div className="flex items-center gap-4">
                <img alt="Client Photo" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbogrMcX0lPJdjbivIUmXNFbhBz8bU12yA9UWAF1ie2uMndIKR32PSwfUK05QAKLnXBeHqt5SxSPfTUOUjxWH2CfmxO2NVUgSp4hpNt4Wue_-e9U_Nwfn5O7FhWTKpoVYtpoQUNym5-yzBGsFJvd5yT2ZosEUtQbbpLj3axNL-rcc5blwpWAxx8KWY7P_fY4V_ZacbvZ0aOfsyL4N7Z0I38V-f0AihVunCtTTW6aGYiAunZBcL3zT59ECju9V8zIR4lMM-I1mE_Q" />
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
                <div className="bg-navy-custom p-1.5 rounded">
                  <span className="material-icons text-white text-xl">gavel</span>
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
                <li className="flex items-center gap-2"><span className="material-icons text-sm text-primary">phone</span> +1 (216) 555-0199</li>
                <li className="flex items-center gap-2"><span className="material-icons text-sm text-primary">location_on</span> Cleveland, OH / CDMX</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-navy-custom dark:text-white mb-6 uppercase text-xs tracking-widest">Horarios</h5>
              <p className="text-sm text-slate-500 mb-2">Lun - Vie: 9:00 AM - 7:00 PM</p>
              <p className="text-sm text-slate-500 mb-6">Sáb: 10:00 AM - 2:00 PM</p>
              <div className="flex gap-4">
                <a className="w-8 h-8 rounded bg-navy-custom flex items-center justify-center text-white hover:bg-primary transition-colors" href="#"><span className="material-icons text-sm">facebook</span></a>
                <a className="w-8 h-8 rounded bg-navy-custom flex items-center justify-center text-white hover:bg-primary transition-colors" href="#"><span className="material-icons text-sm">language</span></a>
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
        <a className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform" href="#">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.411-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.658zm6.222-3.61c1.566.93 3.127 1.391 4.707 1.392 5.404 0 9.802-4.397 9.805-9.802.001-2.618-1.02-5.08-2.876-6.937-1.856-1.857-4.319-2.876-6.933-2.876-5.41 0-9.803 4.397-9.806 9.802 0 1.748.459 3.456 1.328 4.961l-.985 3.596 3.76-.986zm11.41-6.848c-.313-.156-1.854-.915-2.14-.1.02-.285-.156-.39-.156-.39-.313-.418-.546-.627-.813-.627s-.52.209-1.718 1.41c-1.198 1.201-1.46 1.41-1.746 1.41s-.546-.209-.813-.418c-.267-.209-.599-.444-.974-.778-.376-.334-.716-.689-1.02-1.065-.304-.376-.564-.783-.781-1.222-.217-.439-.344-.814-.381-1.127-.037-.313.156-.574.313-.731.156-.157.313-.365.469-.548.156-.183.209-.313.313-.521.104-.209.052-.391-.026-.547-.078-.157-.704-1.696-.964-2.321-.26-.626-.547-.547-.756-.547-.209 0-.443-.026-.678-.026-.235 0-.626.078-.938.418-.313.339-1.198 1.173-1.198 2.863s1.225 3.313 1.382 3.522c.157.209 2.411 3.682 5.842 5.163 3.431 1.481 3.431.986 4.056.924.626-.062 2.031-.831 2.318-1.638.287-.807.287-1.498.204-1.638-.083-.14-.313-.223-.626-.379z"></path></svg>
        </a>
        <button className="w-14 h-14 bg-navy-custom text-white rounded-full flex items-center justify-center shadow-2xl hover:rotate-12 transition-transform">
          <span className="material-icons text-3xl">chat</span>
        </button>
      </div>
    </main>
  );
}
