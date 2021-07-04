<template>
  <div id="app">
    <div class="container">
      <app-search/>
    </div>
  </div>
</template>

<script>
import AppSearch from './components/AppSearch.vue'

export default {
  name: 'App',
  components: {
    AppSearch
  }
}
</script>

<style>
body {
  font-family: 'Lobster', cursive;
  line-height: 1.6;
  background: rgb(19, 18, 18);
  color: wheat;
}
.container {
  height: 100vh;
  margin: auto;
  padding: 0 2rem;
}
</style>
