import { ref } from "vue";
import { defineStore } from "pinia";
import { Character } from "../lib/Character";
import { getCharacters } from "../api/getCharacter";

export const useCharacterModel = defineStore('CharacterModel', () => {
  const charactersRef = ref<Character[]>([]);
  const characterPagesRef = ref(0);

  const updateCharacters = async (params = '') => {
    const result = await getCharacters(params);
    if (result) {
      const characters = result.rawCharacters.map(rawCharacter => new Character(rawCharacter));
      charactersRef.value = characters;
      characterPagesRef.value = result.info.pages;
    } else {
      charactersRef.value = [];
      characterPagesRef.value = 0;
    }
  };

  return {
    updateCharacters,
    characterPagesRef,
    charactersRef
  }
});
