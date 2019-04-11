<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
    <panel title="Login">
      <v-text-field
        label="Email"
        v-model="email"
        clearable>
      </v-text-field>
      <br>
      <v-text-field
        label="Password"
        v-model="password"
        type= 'password'
        clearable>
      </v-text-field>
      <br>
      <div class = "error" v-html = "error" />
      <br>
      <v-btn dark class = "cyan" @click="login">
        Login</v-btn>
    </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      this.error = null
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.error {
  color: green
  }
</style>
