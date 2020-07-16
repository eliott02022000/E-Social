<template>
  <div class="home">
    <div class="connected"></div>
    <div class="friendhandle">
      <div>
        <div class="urfriends"><h2>Vos amis sont : </h2></div><br>
        <ul>
          <li v-for="friend in friends" :key="friend.message">
            <div class="getusers">
             Nom : {{ friend.name }}, Id : {{ friend.id }} Photo : {{ friend.photo }}
            </div>
          </li>
        </ul>
      </div>

      <div>
        <div class="urfriends"><h2>Demande d'amis :</h2></div><br>
        <ul>
          <li v-for="friendR in friendsRequest" :key="friendR.message">
            <div>
              <div>Nom : {{ friendR.name }}, Id : {{ friendR.id }} Photo : {{ friendR.photo }}</div>
              <div>
                <button v-on:click="acceptUser(friendR.id)" class="button">Accept User</button>
                <button v-on:click="rejectUser(friendR.id)" class="button">Reject</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import { getUserInfo } from '@/utils/auth';
import api from '../utils/api';

export default {
  name: 'Home',
  data() {
    return {
      user: getUserInfo(),
      friends: [],
      friendsRequest: [],
    };
  },
  created() {
    api.get('/friendship').then((response) => {
      console.log(response.data);
      this.friends = response.data;
    });
    api.get('/friendship/request').then((response) => {
      console.log(response);
      this.friendsRequest = response.data;
    });
  },
  computed: {
    formattedUser() {
      return JSON.stringify(this.user, null, 2);
    },
  },
  methods: {
    acceptUser(id) {
      api.get(`/friendship/request/${id}/accept`).then(() => alert('Amitié accepte'));
    },
    rejectUser(id) {
      api.get(`/friendship/request/${id}/reject`).then(() => alert('Amitié Refusé'));
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 48px 96px;

  p {
    margin: 16px 0;
  }
}
</style>
