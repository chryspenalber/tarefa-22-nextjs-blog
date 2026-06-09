import { getArtigoBySlug, getArtigos } from '../../../lib/artigos'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Artigo } from '../../../types/Artigo'

export const dynamic = 'force-static'

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const artigo = getArtigoBySlug(params.slug as string)
  if (!artigo) {
    return { title: 'Artigo não encontrado', description: 'Artigo não existe' }
  }
  return {
    title: artigo.title,
    description: artigo.description
  }
}

export function generateStaticParams() {
  const artigos = getArtigos()
  return artigos.map(a => ({ slug: a.slug }))
}

export default function ArtigoPage({ params }: any) {
  const artigo = getArtigoBySlug(params.slug as string)
  if (!artigo) return notFound()

  return (
    <article>
      <h2>{artigo.title}</h2>
      <p style={{color:'#666'}}>
        {artigo.author} — {artigo.date}
      </p>
      <div style={{marginTop:16}}>
        <pre style={{whiteSpace:'pre-wrap'}}>{artigo.content}</pre>
      </div>
    </article>
  )
}
