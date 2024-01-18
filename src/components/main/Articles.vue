<script>
import BuyAvada from './BuyAvada.vue'
export default {
  name: 'Articles',
  props: {
    cards: Array,
    title: String,
    view_all: String
  },
  components: {
    BuyAvada,
  }
}
</script>
<template>
  <div class="container my-3">
    <div class="row">
      <div class="col-6">
        <h4 class="my-4">
          {{ title }}
        </h4>
      </div>
      <div class="col-6 text-end mt-4">
        <h6 class="d-inline pe-3">{{ view_all }}</h6>
        <i class="fas fa-angle-right"></i>
      </div>
      <div class="col-4" v-for="card in    cards   ">
        <img class="img-fluid" :src=card.img alt="protein">
        <h4 class="my-3">{{ card.name }}</h4>
        <div>
          {{ card.sub_title }}
        </div>

      </div>
    </div>
  </div>

  <BuyAvada />
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.col-4 {
  div {
    color: $grey
  }
}
</style>
