<template>
  <div class="h2">
    <input
      type="text"
      class="form-control search"
      id="exampleFormControlInput1"
      placeholder="Kinolar qidirish"
      :value="term"
      @input="changeController"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      term: '',
    }
  },
  props: {
    termController: {
      type: Function,
      required: true,
    },
  },
  methods:{
    changeController(e){
      this.term = e.target.value.toLowerCase()
      this.termController(this.term)
    }
  }
}
</script>
<style>
.search {
  padding: 1.5rem;
  background: #fcfaf5;
  border-radius: 4px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
}
</style>
