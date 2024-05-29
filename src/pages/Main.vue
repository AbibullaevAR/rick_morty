<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { CharacterCard, Character, useCharacterModel } from '@/entities/character';
import { CharacterFilters } from '@/features/filterCharacters';
import { CharactersPagination } from '@/features/paginationCharacters';
import { getEpisodes, Episode } from '@/entities/episode';
import { storeToRefs } from 'pinia';

const characterStore = useCharacterModel();
const { charactersRef } = storeToRefs(characterStore);
const episodesRef = ref<Episode[]>([]);

onMounted(() => {
  characterStore.updateCharacters();
}),

watch(charactersRef, async () => {
  const episodeIds = charactersRef.value.map(character => character.firstEpisodeId);
  const rawEpisodes = await getEpisodes(episodeIds);
  episodesRef.value = rawEpisodes;
})

const getEpisodeName = (character: Character, episodes: Episode[]): string => {
  return episodes.find(episode => episode.id === character.firstEpisodeId)?.name || '';
}

</script>

<template>
  <div class="main">
    <div class="main__header">
      <CharacterFilters></CharacterFilters>
    </div>
    <div class="main__container">
      <CharacterCard 
        class="main__character-card" 
        v-for="character in charactersRef" 
        :key="character.id"
        :character="character"
        :episode-name="getEpisodeName(character, episodesRef)"
      >
      </CharacterCard>
    </div>
    <CharactersPagination class="main__pagination"></CharactersPagination>
  </div>
</template>

<style lang="scss">
.main {
  $cardGap: 10px;

  padding-bottom: 40px;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 150px;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 160px 0 160px;
    gap: $cardGap;
  }

  &__character-card {
    width: calc(50% - $cardGap);
  }

  &__pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
}
</style>
