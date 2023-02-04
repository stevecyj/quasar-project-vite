<template>
  <div>{{ count }}</div>
  <div class="color">{{ doubleCount }}</div>
  <button @click="add">add</button>
  <q-btn
    @click="toStyle"
    label="toStyle"
  ></q-btn>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

let count = ref(0);
let color = ref('red');

const $router = useRouter();

function add() {
  count.value++;
}

function toStyle() {
  $router.push('/style');
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
</script>

<style>
.color {
  color: v-bind(color);
}
</style>
