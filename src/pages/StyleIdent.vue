<template>
  <div class="box text-primary q-ma-sm-sm q-ma-md-xl">lorem</div>
  <div>JOJO</div>
  <div class="cblue">JOJO</div>
  <button @click="toggleDark">toggle dark mode</button>
  <button @click="$s.toggleLeftDraw">toggle dark mode</button>
  <button @click="toggleDark">toggle dark mode</button>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { useLayoutStore } from 'stores/layout';

const $q = useQuasar();
const $s = useLayoutStore();

const toggleDark = () => {
  $q.dark.toggle();
};
</script>

<style lang="scss" scoped>
body.body--dark {
  background: darkgray;
}
</style>
