import { promises as fs } from "fs";
import path from "path";
import { Artigo } from "../types/Artigo";

export async function getArtigos(): Promise<Artigo[]> {
  const filePath = path.join(process.cwd(), "src", "data", "artigos.json");

  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data) as Artigo[];
}

export async function getArtigoBySlug(
  slug: string,
): Promise<Artigo | undefined> {
  const artigos = await getArtigos();

  return artigos.find((artigo) => artigo.slug === slug);
}
