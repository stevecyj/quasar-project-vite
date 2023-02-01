<template>
  <h1>{{ count }}</h1>
  <h2 :class="[color ? 'red' : 'green']">{{ doubleCount }}</h2>
  <button @click="add">add</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      count: 0,
      color: true,
    };
  },

  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },

  watch: {
    count() {
      this.color = !this.color;
    },
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

.red {
  color: crimson;
}

.green {
  color: #21ba45;
}
</style>
