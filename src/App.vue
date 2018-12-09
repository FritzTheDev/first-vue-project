<template>
  <div id="app">
    <Navbar />
    <Home />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
export default {
  name: 'app',
  metaInfo: {
    title: 'Syndicated Opportunities',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ]
  },
  components: {
    Navbar,
    Home
  },
}
</script>

<style>
  #app {
    background-color: slategray;
  }
</style>
