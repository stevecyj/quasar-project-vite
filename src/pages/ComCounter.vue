<template>
  <div>{{ count }}</div>
  <div>{{ doubleCount }}</div>
  <button @click="add">add</button>
</template>

<script>
import { computed, defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    let count = ref(0);

    function add() {
      count.value++;
    }

    watch(count, () => {
      console.log('sss');
    });

    let doubleCount = computed(() => {
      return count.value * 2;
    });

    return {
      count,
      doubleCount,
      add,
    };
  },
});
</script>

<style></style>
