<script setup lang="ts">
import { Character } from '../lib/Character';

interface Props {
  character: Character,
  episodeName: string
}

const props = defineProps<Props>();

</script>

<template>
  <div class="character-card">
    <img class="character-card__img" :src="props.character.image"/>
    <div class="character-card__container">
      <div class="character-card__container-item">
        <span class="character-card__name">{{ props.character.name }}</span>
        <span class="character-card__staus">{{ props.character.status }} - {{ props.character.species }}</span>
      </div>
      <div class="character-card__container-item">
        <span>Last known location:</span>
        <span>{{ props.character.locationName }}</span>
      </div>
      <div class="character-card__container-item">
        <span>First seen in:</span>
        <span>{{ props.episodeName }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.character-card {
  display: flex;
  background-color: rgba(black, 0.5);
  border-radius: 20px;
  color: white;

  &__container {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__container-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__img {
    display: block;
    width: 220px;
    height: 220px;
    border-radius: 20px 0 0 20px;
  }
}
</style>