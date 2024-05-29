<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    pageCount: number,
    modelValue: number
  }
  const props = defineProps<Props>();
  const emits = defineEmits<{
    (e: 'update:modelValue', value: number): void
  }>()

  const cells = computed(() => {
      const maxVisibleCells = 3;
      const result: Array<number> = [];
      const currentPage = props.modelValue;
      const nextBorderCell = props.modelValue >= maxVisibleCells;
      const isOutBorderCell = props.pageCount <= maxVisibleCells;
      
      if (isOutBorderCell) {
        for(let i = 1; i <= props.pageCount; i++){
          result.push(i);
        }
        return result; 
      }

      if (nextBorderCell) {
        const startCell = props.pageCount === currentPage ? currentPage - 2 : currentPage - 1;
        const endCell = props.pageCount - 1 <= currentPage ? props.pageCount : currentPage + 1;
        for (let i = startCell; i <= endCell; i++) {
          result.push(i);
        }
        return result;
      }

      for(let i = 1; i <= maxVisibleCells; i++){
        result.push(i);
      }

      return result;
  })

</script>

<template>
  <div class="pagination">
    <div 
    class="pagination__cell"
    v-for="cell in cells"
    :key="cell"
    :class="{'pagination__cell_active': cell === modelValue}"
    @click="emits('update:modelValue', cell)">
      {{ cell }}
    </div>
  </div>
</template>

<style lang="scss">
.pagination {
  display: flex;
  gap: 8px;

  &__cell {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid black;
    width: 25px;
    height: 25px;
    color: black;
  }

  &__cell_active {
    cursor: default;
    background-color: rgba(black, 0.5);;
  }
}
</style>
