<template>
      <panel title="Song Metadata">
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
                  <v-btn @click="navigateTo({
                  name: 'song-edit',
                  params: {
                    songId: song.id
                  }
                })"
                  dark
                  light
                  samll
                  color="cyan">Edit</v-btn>
              </v-flex>
              <v-flex xs6>
                <img :src="song.albumImageUrl" style="width:200px;height:200px">
                <br>
                {{song.album}}
              </v-flex>
            </v-layout>
      </panel>
</template>

<script>
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}

</script>

<style>

</style>
