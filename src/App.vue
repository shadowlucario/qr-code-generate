<template>
  <div class="home">
    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <home class="home"/>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import home from './pages/home.vue'

export default {
  name: 'LayoutDefault',

  components: {
    home
  }
}
</script>

<style lang="scss">
@import "@/styles/variables";

.home {
  background-color: $background-dark;
}
</style>
