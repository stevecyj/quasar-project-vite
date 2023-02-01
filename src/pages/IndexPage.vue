<template>
  <h1>{{ count }}</h1>
  <button @click="add">add</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    add() {
      this.count++;
    },
  },
});
</script>

<style>
h1 {
  color: #9c27b0;
}
</style>
