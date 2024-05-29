import { ref, computed } from 'vue';
import { defineStore } from 'pinia'

export const useCharacterParamsModel = defineStore('characterParam', () => {
  const page = ref(1);
  const status = ref<string>('');
  const name = ref<string>('');

  const params = computed(() => `?page=${page.value}&status=${status.value}&name=${name.value}`);

  return {
      params,
      page,
      status,
      name
  };
});
