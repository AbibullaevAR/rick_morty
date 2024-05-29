<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { Pagination } from '@/shared/ui';
import { useCharacterParamsModel } from '@/entities/characterParam';
import { useCharacterModel } from '@/entities/character';

const characterParamModel = useCharacterParamsModel();
const characterModel = useCharacterModel();

const { params, page } = storeToRefs(characterParamModel);
const { characterPagesRef } = storeToRefs(characterModel);

const paginationPage = computed({
  get: () => page.value,
  set: (value) => {
    page.value = value;
    characterModel.updateCharacters(params.value);
  } 
})

</script>

<template>
  <div class="characters-pagination">
    <Pagination v-model="paginationPage" :page-count="characterPagesRef"></Pagination>
  </div>
</template>