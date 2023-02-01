<template>
  <h1>{{ count }}</h1>
  <button @click="add">add</button>
</template>

<script>
export default {
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
};
</script>

<style>
h1 {
  color: #9c27b0;
}
</style>
