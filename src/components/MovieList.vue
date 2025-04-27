<template>
    <ul class="movie-list list-group">
      <MoiveListItem v-for="(movie, index) in movieList" :movie="movie"/>
    </ul>
</template>
<script>
import MoiveListItem from './movieListitem/MoiveListItem.vue';

export default {
  data() {
    return {
      movieList: JSON.parse(localStorage.getItem('movies')) || [
        {
          movie_name: 'Me before you',
          views: 1000,
          like: true,
          favorite: true
        },
        {
          movie_name: 'Worth to walk',
          views: 834,
          like: false,
          favorite: true
        },
        {
          movie_name: 'Goddam Love',
          views: 300,
          like: false,
          favorite: false,
        },
      ]
    }
  },
  components:{
    MoiveListItem
  }
}
</script>

<style scoped>
  ul{
    list-style: none;
  }

  .movie-list{
    margin-top: 2rem;
    padding: 1.5rem;
    background: #fcfaf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
  }
</style>