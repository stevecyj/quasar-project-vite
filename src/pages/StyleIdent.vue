<template>
  <div class="box text-primary q-ma-sm-sm q-ma-md-xl">lorem</div>
  <div>JOJO</div>
  <button @click="toggleDark">toggle dark mode</button>
</template>

<script setup>
import { useQuasar } from 'quasar';

const $q = useQuasar();

const toggleDark = () => {
  $q.dark.toggle();
};
</script>

<style scoped>
body.body--dark {
  background: darkgray;
}
</style>
