<template>
  <box>
    <p class="fs-3 text-uppercase">Barcha kino filimlar: {{ appInfo }}</p>
    <p class="fs-4 text-uppercase">Ko'rilgan kinolar: {{ favoriteMovies }}</p>
  </box>
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
  },
}
</script>

<style scoped>

</style>