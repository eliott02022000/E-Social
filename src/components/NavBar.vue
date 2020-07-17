<template>
    <header>
        <div class="header_left"><h2>E-Social</h2></div>
        <nav v-if="this.token !== null" class="header_right">
            <div><router-link to="/" class="removeliststyle">Friends</router-link></div>
            <div><router-link to="/myinfo" class="removeliststyle">My Info</router-link></div>
            <div><router-link to="/users" class="removeliststyle">Users</router-link></div>
            <div v-on:click="logout">
              <router-link to="/" class="removeliststyle">Logout</router-link>
            </div>
        </nav>

        <nav v-else class="header_right">
            <div><router-link to="/">Login</router-link></div>
            <div><router-link to="/register">Sign-in</router-link></div>
        </nav>
    </header>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'header',
  data() {
    return {
      token: null,
    };
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.token = localStorage.getItem('access_token');
    }
  },
  methods: {
    logout() {
      // axios.get('http://212.47.241.143:5000/logout')
      //   .then(() => {
      localStorage.removeItem('access_token');
      this.token = null;
      // }).catch((error) => {
      //   console.log(error.response);
      // });
    },
  },

};
</script>
