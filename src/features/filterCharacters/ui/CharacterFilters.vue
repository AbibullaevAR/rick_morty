<script setup lang="ts">
import { useCharacterParamsModel } from '@/entities/characterParam';
import { useCharacterModel } from '@/entities/character';
import { storeToRefs } from 'pinia';

const characterParamModel = useCharacterParamsModel();
const characterModel = useCharacterModel();

const { params, name, status, page } = storeToRefs(characterParamModel);

const applyFilters = () => {
  page.value = 1;
  characterModel.updateCharacters(params.value)
};
</script>

<template>
  <div class="filter-character">
    <input id="name" v-model="name" type="text" placeholder="Name">
    <select id="status" v-model="status">
      <option value="">All</option>
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
      <option value="unknown">unknown</option>
    </select>
    <button @click="applyFilters">Применить</button>
  </div>
</template>

<style lang="scss">
.filter-character {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
</style>