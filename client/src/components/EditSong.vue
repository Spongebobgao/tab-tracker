<template>
<div>
  <v-layout>
      <v-flex xs6>
       <panel title="Song Metadata">
        <v-text-field
            label="Title"
            required
            :rules="[required]"
            v-model="song.title"
            clearable>
          </v-text-field>
          <br>
        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"
          clearable>
        </v-text-field>
        <br>
          <v-text-field
            label="Genre"
            required
            :rules="[required]"
            v-model="song.genre"
            clearable>
          </v-text-field>
          <br>
          <v-text-field
            label="Album"
            required
            :rules="[required]"
            v-model="song.album"
            clearable>
          </v-text-field>
          <br>
          <v-text-field
            label="Album Image Url"
            required
            :rules="[required]"
            v-model="song.albumImageUrl"
            clearable>
          </v-text-field>
          <br>
          <v-text-field
            label="Youtube Id"
            required
            :rules="[required]"
            v-model="song.youtubeId"
            clearable>
          </v-text-field>
          <br>
          </panel>
      </v-flex>
      <v-flex xs6 calss="ml-2">
          <panel title="Song Structure" >
         <v-text-field
            label="Lyrics"
            required
            :rules="[required]"
            multi-line
            v-model="song.lyrics"
            clearable>
          </v-text-field>
          <br>
          <v-text-field
            label="Tab"
            required
            multi-line
            :rules="[required]"
            v-model="song.tab"
            clearable>
          </v-text-field>
          <br>
           <v-alert v-if="error"
            :value="true"
            color="error"
            icon="warning"
            outline>
            {{ error }}
           </v-alert>
            <br>
          <v-btn dark class = "cyan" @click="save">
            Save Song</v-btn>
            </panel>
      </v-flex>
  </v-layout>
</div>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      console.log('save')
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'songs',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}

</script>

<style>

</style>
