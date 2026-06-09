import { readFileSync } from 'fs'
import { join } from 'path'
import { Artigo } from '../types/Artigo'

const arquivo = join(process.cwd(), 'src', 'data', 'artigos.json')

export function getArtigos(): Artigo[] {
  const raw = readFileSync(arquivo, 'utf-8')
  const dados = JSON.parse(raw) as Artigo[]
  return dados
}

export function getArtigoBySlug(slug: string): Artigo | undefined {
  const artigos = getArtigos()
  return artigos.find(a => a.slug === slug)
}
