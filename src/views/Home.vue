<template>
  <div class="home">
    <p>Connected as:</p>
    <pre>{{ formattedUser }}</pre>
    <div>{{ getFriends }}</div>
    <div>{{ getFriendsRequest }}</div>
    <div>{{ acceptmyfriends }}</div>
    <div>{{ rejectmyfriends }}</div>
    <div>{{ requestFriendship }}</div>
  </div>
</template>

<script>
import { getUserInfo } from '@/utils/auth';
import {
  friends,
  friendsRequest,
  friendsAccept,
  friendsReject,
  sendRequest,
} from '../utils/friendship';

export default {
  name: 'Home',
  data() {
    return {
      user: getUserInfo(),
      getfriend: friends(),
      getfriendrequest: friendsRequest(),
      acceptfriends: friendsAccept(),
      rejectfriends: friendsReject(),
      sendRequestFriend: sendRequest(),
    };
  },
  computed: {
    formattedUser() {
      return JSON.stringify(this.user, null, 2);
    },
    getFriends() {
      return JSON.stringify(this.getfriend);
    },
    getFriendsRequest() {
      return JSON.stringify(this.getfriendrequest);
    },
    acceptmyfriends() {
      return JSON.stringify(this.acceptfriends);
    },
    rejectmyfriends() {
      return JSON.stringify(this.rejectfriends);
    },
    requestFriendship() {
      return JSON.stringify(this.sendRequestFriend);
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
