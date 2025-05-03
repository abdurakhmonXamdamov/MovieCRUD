<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo
        :appInfo="movieList.length"
        :favoriteMovies="movieList.filter((fav) => fav.like).length"
      />
      <Box class="search-info">
        <searchPanel :termController="termController" />
        <appPanel :updateFilter="updateFilter" :filterName="filter" />
      </Box>
      <MovieList
        :movieList="filterMovies(searchControl(movieList, searchTerm), filter)"
        @ItemID="gettingId"
        @updateMovie="updateMovie"
        @onRemove="onRemoveHandeler"
      />
      <MovieForm @movie-added="loadMovies" />
    </div>
  </div>
</template>

<script>
import AppInfo from '@/components/app-info.vue'
import searchPanel from './components/search-panel.vue'
import appPanel from './components/app-panel.vue'
import MovieList from './components/MovieList.vue'
import MovieForm from './components/MovieForm.vue'
import Box from './UI_components/Box.vue'
export default {
  data() {
    return {
      movieList: [],
      searchTerm: '',
      filter: 'all',
    }
  },
  components: {
    AppInfo,
    searchPanel,
    appPanel,
    MovieList,
    MovieForm,
  },
  methods: {
    loadMovies() {
      this.movieList = JSON.parse(localStorage.getItem('movies')) || []
    },
    gettingId(id) {
      this.movieList.map((item) => {
        if (item.id == id) {
          item.like = !item.like
        }
        return item
      })
      localStorage.setItem('movies', JSON.stringify(this.movieList))
    },
    updateMovie(updatedMovie) {
      this.movieList = this.movieList.map((item) => {
        if (item.id === updatedMovie.id) {
          return { ...item, ...updatedMovie }
        }
        return item
      })

      localStorage.setItem('movies', JSON.stringify(this.movieList))
    },
    onRemoveHandeler(id) {
      this.movieList = this.movieList.filter((item) => item.id != id)

      localStorage.setItem('movies', JSON.stringify(this.movieList))
    },
    searchControl(arr, searchTerm) {
      if (searchTerm.length == 0) {
        return arr
      }

      return arr.filter((item) =>
        item.movie_name.toLowerCase().includes(this.searchTerm.toLowerCase()),
      )
    },

    termController(newTerm) {
      this.searchTerm = newTerm
    },

    filterMovies(arr, filter) {
      switch (filter) {
        case 'popular':
          return arr.filter((item) => item.like)
          break
        case 'mostWatched':
          return arr.filter((item) => item.views > 600)
          break

        default:
          return arr
          break
      }
    },

    updateFilter(filter) {
      this.filter = filter
    },
  },

  mounted() {
    this.loadMovies()
  },
}
</script>

<style>
.app {
  height: 100vh;
  color: #000;
}

.content {
  width: 1000px;
  min-height: 600px;
  background-color: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}

.search-info {
  margin-top: 2rem;
}
</style>
