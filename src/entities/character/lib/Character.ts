import type { RawCharacter } from "../types/rawCharacter";
export class Character {
  public rawCharacter: RawCharacter;

  constructor(rawCharacter: RawCharacter) {
    this.rawCharacter = rawCharacter;
  }

  get firstEpisodeId(): number{
    const spplitingURL = this.rawCharacter.episode[0].split('/');
    return Number(spplitingURL[spplitingURL.length - 1]);
  }

  get id() {
    return this.rawCharacter.id;
  }

  get name() {
    return this.rawCharacter.name;
  }

  get episode() {
    return this.rawCharacter.episode;
  }

  get image() {
    return this.rawCharacter.image;
  }

  get species() {
    return this.rawCharacter.species;
  }

  get status() {
    return this.rawCharacter.status;
  }

  get locationName() {
    return this.rawCharacter.location.name;
  }
}