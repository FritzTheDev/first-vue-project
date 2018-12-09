<template>
  <div id="app">
    <Navbar />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  metaInfo: {
    title: 'Syndicated Opportunities',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ]
  },
  components: {
    Navbar
  },
}
</script>

<style>
  #app {
    background-color: slategray;
  }
</style>
