<template>
  <Box class="movie-form">
    <div class="h3">Yange kino qo'shish</div>
    <form @submit.prevent>
      <div class="d-flex align-items-center">
        <input 
          type="text" 
          class="form-control me-2" 
          placeholder="Qanday kino?" 
          v-model="newMovie.movie_name"
          required
        />
        <input
          type="text"
          class="form-control me-2"
          placeholder="Nechimarta ko'rgansiz?"
          v-model="newMovie.views"
          required
        />
        <PrimaryButton class="btn-outline-primary" @click="addMovieToStore">Qo‘shish</PrimaryButton>
      </div>
    </form>
  </Box>
</template>
<script>

import PrimaryButton from '@/UI_components/PrimaryButton.vue'
import Box from '@/UI_components/Box.vue'

export default {
  data() {
    return {
      newMovie: {
        like: false,
        favorite: false,
        id: Date.now(),
      }
    }
  },
  methods: {
    addMovieToStore(){

      if (!(this.newMovie.movie_name && this.newMovie.views)){
        return
      }

      let all_movies = JSON.parse(localStorage.getItem("movies")) || []

      all_movies.push(this.newMovie)

      localStorage.setItem('movies', JSON.stringify(all_movies))
      this.$emit('movie-added')
      
      this.newMovie = {
        movie_name: '',
        views: '',
        like: false,
        favorite: false,
        id: Date.now(),
      }
    }
  }
}
</script>
<style scoped>
.movie-form {
  margin-top: 2rem;
}
</style>
