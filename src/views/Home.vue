<template>
  <div class="home">
    <p>Connected as:</p>
    <pre>{{ formattedUser }}</pre>
  </div>
</template>

<script>
import { getUserInfo } from '@/utils/auth';

export default {
  name: 'Home',
  data() {
    return {
      user: getUserInfo(),
    };
  },
  computed: {
    formattedUser() {
      return JSON.stringify(this.user, null, 2);
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
