<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
       <SongsSearchPanel />
         <songs-panel class="mt-2"/>
    </v-flex>
    </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 300px;
  overflow: hidden
  }
.song-title {
  font-size: 30px;
  color: cyan darken-4
}
.song-artist {
  font-size: 24px;
  color:cyan darken-3
}
.song-genre {
  font-size: 18px;
  color: cyan darken-2
}

</style>
