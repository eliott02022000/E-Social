<template>
  <div class="home">
      <div class="myinfo">
        <div class="info">
            <p>Vous etes connecté en tant que :</p>
            <p class="handlep">{{ this.info.username }}</p>
        </div>
        <div class="info">
            <p>Votre Id est :</p>
            <p class="handlep">{{ this.info.id }}</p>
        </div>
      </div>
  </div>
</template>

<script>
// import { getMyInfo } from '@/utils/user';
import api from '../utils/api';

export default {
  name: 'Home',
  data() {
    return {
      info: [],
    };
  },
  //   computed: {
  //     formattedUser() {
  //       return JSON.stringify(this.user);
  //     },
  //   },
  created() {
    api.get('/user/me').then((response) => { this.info = response.data; });
  },
};
</script>
