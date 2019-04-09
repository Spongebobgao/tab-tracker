<template>
  <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4">
        <span
          class="home"
          @click="navigateTo({name: 'root'})">
        TabTracker
        </span>
      </v-toolbar-title>
      <v-btn flat dark
        @click="navigateTo({name: 'songs'})"><!-- can use v-router link too -->
          Browse
        </v-btn>
      <v-toolbar-items>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
       <v-btn v-if="!$store.state.isUserLoggedIn"
       flat dark
        @click="navigateTo({name: 'login'})">
          Log In
        </v-btn>
        <v-btn v-if="!$store.state.isUserLoggedIn"
        flat dark
        @click="navigateTo({name: 'register'})"><!-- can use v-router link too -->
          Sign Up
        </v-btn>
        <v-btn v-if="$store.state.isUserLoggedIn"
       flat dark
        @click="logout">
          Log out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'HelloWorld'
      })
    }
  }
}
</script>
<style scoped>
.home {
  cursor: pointer;
}

.home:hover{
  color:darkslategrey
}
</style>
