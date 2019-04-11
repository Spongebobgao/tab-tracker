<template>
<div>
  <v-layout >
    <v-flex xs6>
      <song-metadata :song="song"/>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <youtube :youtubeId="song.youtubeId"/>
    </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 class="mt-2">
        <lyrics :song="song"/>
      </v-flex>
      <v-flex xs6 class="ml-2 mt-2">
      <tab :song="song"/>
    </v-flex>
    </v-layout>
</div>

</template>

<script>
import Tab from '@/components/ViewSong/Tab'
import Lyrics from '@/components/ViewSong/Lyrics'
import Youtube from '@/components/ViewSong/Youtube'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata,
    Youtube,
    Lyrics,
    Tab
  }
}
</script>

<style>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px
}

</style>
