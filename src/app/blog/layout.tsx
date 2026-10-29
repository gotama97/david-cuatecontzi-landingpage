import Link from "next/link";
import BrandMark from "@/components/BrandMark";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background-light min-h-screen font-display text-slate-800 flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-navy-custom p-2 rounded text-white">
                <BrandMark className="h-8 w-8" />
              </div>
              <div className="leading-none">
                <span className="block branding-title text-navy-custom text-lg">CUATECONTZI</span>
                <span className="text-[10px] tracking-widest text-primary font-bold uppercase">Asesoría Laboral</span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-navy-custom">
              <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
              <Link href="/#servicios" className="hover:text-primary transition-colors">Servicios</Link>
              <Link href="/#calculadora" className="hover:text-primary transition-colors">Calculadora</Link>
              <Link href="/blog" className="text-primary">Blog</Link>
              <a href="tel:+525641541108" className="bg-navy-custom hover:bg-primary text-white px-5 py-2.5 rounded-lg font-bold transition-colors">
                Consulta gratuita
              </a>
            </nav>
            <Link href="/blog" className="md:hidden text-sm font-bold text-primary">Blog</Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-navy-custom text-white/70 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Cuatecontzi Asesoría Legal</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <Link href="/aviso-de-privacidad" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
            <Link href="/#contacto" className="hover:text-white transition-colors">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
