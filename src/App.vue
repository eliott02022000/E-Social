<template>
  <div id="app">
    <Headervue/>
    <router-view class="view"/>
  </div>
</template>

<script>
import Headervue from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    Headervue,
  },
};
</script>
<style>
  @import './assets/css/main.css';
</style>
