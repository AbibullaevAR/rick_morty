import { RawCharacter } from "../types/rawCharacter";


export async function getCharacters(params = ''): Promise<{ rawCharacters: RawCharacter[], info: { pages: number }  } | null> {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${params}`);

  if (response.status >= 400) return null;

  const responseResults = await response.json();

  return { rawCharacters: responseResults.results, info: responseResults.info };
}