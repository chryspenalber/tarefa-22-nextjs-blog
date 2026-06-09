import Link from 'next/link'
import { Artigo } from '../../types/Artigo'

type Props = {
  artigo: Artigo
}

export default function ArtigoCard({ artigo }: Props) {
  return (
    <article style={{border:'1px solid #ddd', padding:16, borderRadius:8, marginBottom:12}}>
      <h2>
        <Link href={`/artigos/${artigo.slug}`}>{artigo.title}</Link>
      </h2>
      <p style={{margin:0, color:'#555'}}>
        {artigo.author} — {artigo.date}
      </p>
      <p>{artigo.description}</p>
      <Link href={`/artigos/${artigo.slug}`}>Ler artigo →</Link>
    </article>
  )
}
