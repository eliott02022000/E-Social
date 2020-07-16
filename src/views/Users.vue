<template>
  <div class="home">
      <div>
        <div class="urfriends"><h2>Users</h2></div><br>
        <ul>
          <li v-for="user in users" :key="user.message">
            <div class="getusers">
                <div>
                    Id : <strong>{{ user.id }}</strong>,
                    Username : <strong>{{ user.username }}</strong>,
                    Nom : <strong>{{ user.name }}</strong>
                </div>
                <div class="userfollow">
                    <router-link
                        :to="{ name: 'getuser',
                        params: {userid: user.id } }">
                        En savoir plus
                    </router-link>
                </div>

            </div>

          </li>
        </ul>
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
      users: [],
    };
  },
  created() {
    api.get('/user').then((response) => {
      console.log(response);
      this.users = response.data;
    });
  },
};
</script>
