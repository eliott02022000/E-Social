<template>
  <div class="home">
      <div>
        <div class="urfriends"><h2>En savoir plus</h2></div><br>
        <div class="getusers">
            Id : <strong>{{ this.otheruser.id }}</strong>,
            Username : <strong>{{ this.otheruser.username }}</strong>,
            Nom : <strong>{{ this.otheruser.name }}</strong>
            <button v-on:click="friendRequest" class="button">Demandez en ami</button>
            <button v-on:click="cancelRequest" class="button">Annule ma demande d'ami</button>
            <button v-on:click="blockUser" class="button">Block User</button>
            <button v-on:click="unBlockUser" class="button">unBlockUser</button>
        </div>
      </div>
      <router-link to="/users">Retour</router-link>
  </div>
</template>

<script>
// import { getMyInfo } from '@/utils/user';
import api from '../utils/api';

export default {
  name: 'Home',
  data() {
    return {
      otheruser: [],
    };
  },
  created() {
    api.get(`/user/${this.$route.params.userid}`).then((response) => {
      this.otheruser = response.data;
    });
  },
  methods: {
    blockUser() {
      api.get(`/user/block/${this.$route.params.userid}`).then(() => alert('User est bloqué'));
    },
    unBlockUser() {
      api.delete(`/user/block/${this.$route.params.userid}`).then(() => alert('User est debloqué'));
    },
    friendRequest() {
      api.post('friendship/request',
        { requestedId: this.otheruser.id }).then(() => alert('Demande d ami envoyé'));
    },
    cancelRequest() {
      api.delete(`/request/${this.otheruser.id}`).then(() => alert('Demande d ami annule'));
    },
  },
};
</script>
