<template>
  <div class="movie-form">
    <div class="h3">Yange kino qo'shish</div>
    <form>
      <div class="d-flex align-items-center">
        <input type="text" class="form-control me-2" placeholder="Qanday kino?">
        <input type="text" class="form-control me-2" placeholder="Nechimarta ko'rgansiz?">
        <button class="btn btn-outline-primary">Qo‘shish</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.movie-form{
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>