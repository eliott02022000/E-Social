<template>
  <div id="app">
    <Headervue
      :token="token"
      @logout="logout"/>
    <router-view
      @login="login"
      class="view"/>
  </div>
</template>

<script>
import Headervue from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    Headervue,
  },
  data() {
    return {
      token: null,
    };
  },
  methods: {
    logout() {
      this.token = null;
    },
    login(token) {
      this.token = token;
    },
  },
};
</script>
<style>
  @import './assets/css/main.css';
</style>
