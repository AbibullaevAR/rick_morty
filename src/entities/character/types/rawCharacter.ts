export interface RawCharacter {
  id: number,
  name: string,
  episode: string[],
  image: string,
  species: string,
  status: string,
  location: {
    name: string
  }
}