<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo :appInfo="movieList.length" :favoriteMovies="movieList.filter(fav => fav.like).length"/>
      <div class="search-info">
        <searchPanel/>
        <appPanel/>
      </div>
      <MovieList :movieList="movieList" @ItemID="gettingId" @updateMovie="updateMovie" @onRemove="onRemoveHandeler"/>
      <MovieForm @movie-added="loadMovies"/>
    </div>
  </div>
</template>

<script>
import AppInfo from '@/components/app-info.vue' 
import searchPanel from './components/search-panel.vue';
import appPanel from './components/app-panel.vue';
import MovieList from './components/MovieList.vue';
import MovieForm from './components/MovieForm.vue';
export default{
  data() {
    return {
      movieList: []
    }
  },
  components: {
    AppInfo,
    searchPanel,
    appPanel,
    MovieList,
    MovieForm
  },
  methods: {
    loadMovies(){
      this.movieList = JSON.parse(localStorage.getItem("movies")) || []
    },
    gettingId(id){
      this.movieList.map(item => {
        if (item.id == id){
          item.like = !item.like
        }
        return item
      })
      localStorage.setItem("movies", JSON.stringify(this.movieList));
    },
    updateMovie(updatedMovie) {
      this.movieList = this.movieList.map(item => {
        if (item.id === updatedMovie.id) {
          return { ...item, ...updatedMovie };
        }
        return item;
      });
      
      localStorage.setItem("movies", JSON.stringify(this.movieList));
    },
    onRemoveHandeler(id){
      this.movieList = this.movieList.filter(item => item.id != id)

      localStorage.setItem("movies", JSON.stringify(this.movieList));
    }

  },

  mounted() {
    this.loadMovies()
  },
}
</script>

<style>
.app{
  height: 100vh;
  color: #000;
}

.content{
  width: 1000px;
  min-height: 600px;
  background-color: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}

.search-info{
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}

</style>