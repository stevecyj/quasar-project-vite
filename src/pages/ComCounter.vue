<template>
  <div>{{ count }}</div>
  <div class="color">{{ doubleCount }}</div>
  <button @click="add">add</button>
</template>

<script>
import { computed, defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    let count = ref(0);
    let color = ref('red');

    function add() {
      count.value++;
    }

    watch(count, () => {
      console.log('sss');
      if (count.value % 2 === 0) {
        color.value = 'red';
      } else {
        color.value = 'green';
      }
    });

    let doubleCount = computed(() => {
      return count.value * 2;
    });

    return {
      count,
      doubleCount,
      color,
      add,
    };
  },
});
</script>

<style>
.color {
  color: v-bind(color);
}
</style>
