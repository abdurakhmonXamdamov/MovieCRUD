<template>
    <li class="list-group-item d-flex justify-content-between align-items-center"
    :class="[{favorite: movie.favorite}, {like: movie.like}]">
        <div v-if="isEditing">
          <input  v-model="editedName" class="list-group-item-input" />
        </div>

        <div v-else>
          <span class="list-group-item-label" @click="liked()">{{ movie.movie_name }}</span>
        </div>
    
    <div class="d-flex justify-content-center align-items-center">
        <div v-if="isEditing">
          <input type="number" v-model="editedViews" class="list-group-item-input" />
        </div>
        <div v-else>
          <input type="number" class="list-group-item-input" :value="movie.views" readonly />
        </div>
        <button v-if="isEditing" type="button" class="btn-pen btn-sm" @click="saveMovies">
          <i class="fas fa-check"></i>
        </button>
        <button v-else type="button" class="btn-pen btn-sm" @click="editing">
          <i  class="fas fa-pen"></i>
        </button>

        <button type="button" class="btn-trash btn-sm" @click="$emit('onRemove', this.movie.id)">
            <i class="fas fa-trash"></i>
        </button>
            <i class="fas fa-star"></i>
    </div>
</li>
</template>
<script>
export default {
  data() {
    return {
      isEditing: false,
      editedName: this.movie.movie_name,
      editedViews: this.movie.views
    }
  },
  props: {
    movie: {
      type: Object,
      required: true
    },
  },
  methods: {
    liked(){
      this.$emit('clickedID', this.movie.id);
    },
    editing(){
      this.isEditing = true
    },
    saveMovies(){
      this.movie.movie_name = this.editedName 
      this.movie.views = this.editedViews 
      this.$emit('updateMovie', this.movie)
      this.isEditing = false
    }
  }
}
</script>
<style scoped>
  .list-group-item{
    padding: 15px 20px;
    border: none;
    border-bottom: 1px solid #3d5a80;
    background: transparent;
  }

  .list-group-item:last-child{
    border-bottom: none;
  }

  .list-group-item span{
    line-height: 35px;
    font-size: 20px;
    cursor: pointer;
    width: 550px;
  }

  .list-group-item input{
    line-height: 35px;
    font-size: 20px;
    text-align: center;
    border: 0;
  }

  .list-group-item input:focus{
    outline: none;
  }

  .list-group-item button{
    width: 35px;
    height: 35px;
    font-size: 17px;
    cursor: pointer;
    margin: 3px;
    border: none;
  }

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.list-group-item .btn-pen{
  color: #59efab;
}

.list-group-item .btn-trash{
  color: #e5380e;
}

.list-group-item .fa-star{
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  color: #ffd700;
  font-size: 16px;
  transition: .3s all;
  transform: translateX(30px);
  opacity: 0;
}

.list-group-item.like .fa-star{
  opacity: 1;
  transform: translateX(0);
}

.list-group-item.like .list-group-item-label,
.list-group-item.like .list-group-item-input{
    color: #59efab;
}

</style>