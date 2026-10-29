import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getAllPosts, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artículo no encontrado | Cuatecontzi" };
  return {
    title: `${post.title} | Cuatecontzi`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "es_MX",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Cuatecontzi Asesoría Legal" },
    publisher: { "@type": "Organization", name: "Cuatecontzi Asesoría Legal" },
    articleSection: post.category,
  };

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/blog" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
        ← Volver al blog
      </Link>

      <header className="mt-6 mb-8">
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
          {post.category}
        </span>
        <h1 className="font-serif text-3xl lg:text-5xl font-black text-navy-custom leading-[1.05] mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readMin} min de lectura</span>
        </div>
      </header>

      <div className="space-y-5">
        {post.content.map((block, i) => {
          if (block.type === "h2") {
            return (
              <h2 key={i} className="font-serif text-2xl font-bold text-navy-custom pt-4">
                {block.text}
              </h2>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate-700 leading-relaxed">
                    <span className="text-primary font-black mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={i} className="text-slate-700 leading-relaxed text-[17px]">
              {block.text}
            </p>
          );
        })}
      </div>

      {/* Aviso */}
      <p className="mt-8 text-xs text-slate-400 italic border-t border-slate-200 pt-6">
        Este artículo es informativo y no sustituye la asesoría de un abogado. Cada caso es
        distinto; para una valoración de tu situación, contáctanos.
      </p>

      {/* CTA */}
      <div className="mt-10 rounded-xl bg-navy-custom text-white p-8 text-center">
        <h3 className="font-serif text-2xl font-bold mb-2">¿Tienes un caso parecido?</h3>
        <p className="text-white/70 mb-6">
          Agenda una revisión gratuita con un abogado o calcula un estimado de tu finiquito.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/#calculadora"
            className="bg-white text-navy-custom px-6 py-3 rounded-lg font-black hover:bg-slate-100 transition-colors"
          >
            Calcular mi finiquito
          </Link>
          <Link
            href="/#contacto"
            className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-lg font-black transition-colors"
          >
            Consulta gratuita
          </Link>
        </div>
      </div>
    </article>
  );
}
