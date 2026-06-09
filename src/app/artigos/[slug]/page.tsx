import { getArtigoBySlug, getArtigos } from "../../../lib/artigos";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Artigo } from "../../../types/Artigo";
import Link from "next/link";

export const dynamic = "force-static";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const artigo = getArtigoBySlug(params.slug as string);
  if (!artigo) {
    return { title: "Artigo não encontrado", description: "Artigo não existe" };
  }
  return {
    title: artigo.title,
    description: artigo.description,
  };
}

export function generateStaticParams() {
  const artigos = getArtigos();
  return artigos.map((a) => ({ slug: a.slug }));
}

export default function ArtigoPage({ params }: any) {
  const artigo = getArtigoBySlug(params.slug as string);
  if (!artigo) return notFound();

  return (
    <article
      style={{
        backgroundColor: "#fff",
        padding: "32px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        lineHeight: "1.8",
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginBottom: "24px",
          textDecoration: "none",
          fontWeight: "bold",
          color: "#1e3a8a",
        }}
      >
        ← Voltar para os artigos
      </Link>
      <h1
        style={{
          marginBottom: "8px",
        }}
      >
        {artigo.title}
      </h1>
      <p
        style={{
          color: "#666",
          marginBottom: "24px",
        }}
      >
        Por {artigo.author} • {artigo.date}
      </p>
      <div style={{ marginTop: 16 }}>
        <pre style={{ whiteSpace: "pre-wrap" }}>{artigo.content}</pre>
      </div>
    </article>
  );
}
