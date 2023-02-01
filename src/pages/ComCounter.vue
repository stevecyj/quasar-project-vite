<template>
  <div>{{ count }}</div>
  <button @click="add">add</button>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    let count = ref(0);

    function add() {
      count.value++;
    }

    return {
      count,
      add,
    };
  },
});
</script>

<style></style>
