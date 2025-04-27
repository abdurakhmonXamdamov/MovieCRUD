<template>
    <ul class="movie-list list-group">
      <MoiveListItem v-for="(movie, index) in movieList" :movie="movie" :key="index"/>
    </ul>
</template>
<script>
import MoiveListItem from './movieListitem/MoiveListItem.vue';

export default {
  components:{
    MoiveListItem
  },
  props: {
    movieList: {
      type: Array,
      required: true
    }
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