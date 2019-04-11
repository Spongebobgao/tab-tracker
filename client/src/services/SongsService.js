import Api from '@/services/Api'

export default {
  index (search) { // get all songs
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  post (song) { // get all songs
    return Api().post('songs', song)
  },
  show (songId) { // get song by id
    return Api().get(`songs/${songId}`)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
