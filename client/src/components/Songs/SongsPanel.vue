<template>
      <panel title="My Songs">
        <v-btn to="songs/create"
          slot="action"
          class="cyan lighten-5"
          light
          samll
          absolute
          right
          middle
          fab>
          <v-icon>add_circle
          </v-icon>
        </v-btn>
          <div v-for="song in songs" :key="song.id"
           class="song">
            <v-layout>
              <v-flex xs6>
                <div calss="song-title" >
                  {{ song.title }}
                  </div>
                  <div calss="song-artist">
                  {{ song.artist }}
                  </div>
                  <div calss="song-genre">
                  {{ song.genre }}
                  </div>
                  <div>
                <v-btn @click="navigateTo({
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                })"
                  dark
                  light
                  samll
                  color="cyan">view</v-btn>
                  </div>
              </v-flex>
              <v-flex xs6>
                <img :src="song.albumImageUrl" style="width:200px;height:200px">
                <br>
                {{song.album}}
              </v-flex>
            </v-layout>
          </div>
      </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
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
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
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
