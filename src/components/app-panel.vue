<template>
  <div class="btn-group">
    <PrimaryButton
      v-for="(item, index) in filterBtns"
      :key="index"
      type="button"
      @click="filterController(item.btnLabel)"
      :class="[
        filterName == item.btnLabel 
      ? 'btn-dark' 
      : 'btn-outline-dark'
      ]"
    >
      {{ item.title }}
    </PrimaryButton>
  </div>
</template>
<script>
export default {
  props: {
    updateFilter: {
      type: Function,
      required: true,
    },
    filterName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      filter: 'all',
      filterBtns: [
        {
          title: 'Barcha kinolar',
          btnLabel: 'all'
        },
        {
          title: 'Mashxur kinolar',
          btnLabel: 'popular'
        },
        {
          title: "Eng ko'p ko'rilgan kinolar",
          btnLabel: 'mostWatched'
        },
      ]
    }
  },
  methods: {
    filterController(filter) {
      this.filter = filter
      this.updateFilter(this.filter)
    },
  },
}
</script>
<style scoped>
.btn-group {
  margin-top: 1rem;
}
</style>
