import Link from "next/link";
import { Artigo } from "../../types/Artigo";

type Props = {
  artigo: Artigo;
};

export default function ArtigoCard({ artigo }: Props) {
  return (
    <article
      style={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "24px",
        marginBottom: "24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h2>
        <Link
          href={`/artigos/${artigo.slug}`}
          style={{
            textDecoration: "none",
            color: "#1e3a8a",
          }}
        >
          {artigo.title}
        </Link>
      </h2>
      <p
        style={{
          color: "#666",
          fontSize: "14px",
        }}
      >
        Por {artigo.author} • {artigo.date}
      </p>
      <p>{artigo.description}</p>
      <Link href={`/artigos/${artigo.slug}`}>Ler artigo →</Link>
    </article>
  );
}
