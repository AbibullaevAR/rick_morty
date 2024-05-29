import type { Episode } from "../types/episode";

export async function getEpisodes(ids: number[]): Promise<Episode[]> {

  if (ids.length === 0) return [];

  const response = await fetch(`https://rickandmortyapi.com/api/episode/${ids.join(',')}`);
  if (response.status >= 400) return [];
  const result = await response.json();
  return Array.isArray(result) ? result : [result];
}
