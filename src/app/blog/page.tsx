import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Cuatecontzi Asesoría Legal",
  description:
    "Guías y recursos sobre derecho laboral en México: despidos injustificados, cálculo de finiquito y liquidación, conciliación laboral y tus derechos como trabajador.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog de derecho laboral | Cuatecontzi",
    description:
      "Despidos, finiquitos, conciliación y tus derechos como trabajador, explicados claro.",
    type: "website",
    locale: "es_MX",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <header className="max-w-3xl mb-14">
        <div className="flex items-center gap-3 mb-5">
          <span className="accent-rule"></span>
          <span className="text-sm font-semibold text-slate-500">Recursos para el trabajador</span>
        </div>
        <h1 className="font-serif text-4xl lg:text-5xl font-black text-navy-custom leading-[1.05] mb-4">
          Blog de derecho laboral
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Guías claras sobre despidos, finiquitos, liquidación y conciliación para que conozcas
          tus derechos y tomes mejores decisiones.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <div className="h-28 bg-navy-custom relative overflow-hidden">
              <div className="absolute inset-0 hero-grid opacity-60"></div>
              <span className="absolute bottom-3 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="font-serif text-xl font-bold text-navy-custom leading-snug mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readMin} min de lectura</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
