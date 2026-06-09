import { getArtigos } from '../lib/artigos'
import ArtigoCard from '../components/ArtigoCard'

export const dynamic = 'force-static'

export default function HomePage() {
  const artigos = getArtigos()

  return (
    
    <section>
      <h2>Artigos</h2>
      <div>
        {artigos.map(a => (
          <ArtigoCard key={a.slug} artigo={a} />
        ))}
      </div>
    </section>
  )
}
