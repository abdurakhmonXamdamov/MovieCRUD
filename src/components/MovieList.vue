<template>
  <div class="list-group">
    <ul class="movie-list">
      <MoiveListItem/>
      <MoiveListItem/>
      <MoiveListItem/>
    </ul>
  </div>
</template>
<script>
import MoiveListItem from './movieListitem/MoiveListItem.vue';

export default {
  components:{
    MoiveListItem
  }
}
</script>

<style scoped>
  ul{
    list-style: none;
  }

  .list-group{
    margin-top: 2rem;
    padding: 1.5rem;
    background: #fcfaf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
  }
</style>