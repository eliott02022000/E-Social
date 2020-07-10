<template>
  <div class="login">
    <form @submit.prevent="login">
      <div class="form-row">
        <label for="email">Username:</label>
        <input v-model="email" id="email" type="text">
      </div>
      <div class="form-row">
        <label for="password">Password:</label>
        <input v-model="password" id="password" type="password">
      </div>
      <p class="error" v-if="error">Une erreur est survenue.</p>
      <div class="form-row center">
        <button type="submit">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { login } from '@/utils/auth';

export default {
  name: 'Login',
  data() {
    return {
      error: false,
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      this.error = false;
      login({ email, password })
        .then(() => {
          this.$router.push({ name: 'home' });
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  padding: 48px;
  border-radius: 6px;
  color: #fff;
  background-color: #2ecc71;

  .form-row {
    display: flex;
    align-items: center;
    margin: 16px 0;

    &.center {
      justify-content: center;
    }

    label {
      min-width: 100px;
      font-weight: 600;
    }

    input {
      padding: 4px 8px;
      width: 200px;
      border-radius: 4px;
      border: solid 1px #e1e9ed;

      &:focus {
        outline: none;
        box-shadow: 0 0 3px 2px #3498db;
      }
    }
  }

  p.error {
    text-align: center;
    color: #e74c3c;
    font-weight: 600;
  }

  button[type=submit] {
    border: none;
    padding: 8px 12px;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-family: Avenir;
    transition: all .2s;
    font-weight: 500;

    &:hover {
      background-color: #eee;
    }
  }
}
</style>
