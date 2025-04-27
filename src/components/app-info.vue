<template>
  <div class="app-info">
    <p class="fs-3 text-uppercase">Barcha kino filimlar: {{ appInfo }}</p>
    <p class="fs-4 text-uppercase">Ko'rilgan kinolar: {{ favoriteMovies }}</p>
  </div>
</template>

<script>
export default{
  props: {
    appInfo: {
      type: Number,
      required: true
    },
    favoriteMovies: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.app-info{
  padding: 1.5rem;
  background: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}

</style>