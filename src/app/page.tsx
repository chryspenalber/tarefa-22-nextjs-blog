import { getArtigos } from '../lib/artigos'
import ArtigoCard from '../components/ArtigoCard'

export const dynamic = 'force-static'

export default async function HomePage() {
  const artigos = await getArtigos()

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
