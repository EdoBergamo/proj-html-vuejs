<script>
import BuyAvada from './BuyAvada.vue'
export default {
  name: 'Articles',
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
          Latest articles
        </h4>
      </div>
      <div class="col-6 text-end">
        <h6 class="my-4">Read all articles</h6>
        <i class="fas fa-angle-right"></i>
      </div>
      <div class="col-4">
        <img class="img-fluid"
          src="https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/blog4@2x-600x386.jpg" alt="protein">
        <h4 class="my-3">The best protein shake</h4>
        <div>Published On: November 26th, 2019
          |
          <div> 2 Comments </div>
        </div>
      </div>
      <div class="col-4">
        <img class="img-fluid"
          src="https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/blog1@2x-600x386.jpg" alt="cardio">
        <h4 class="my-3">Ultimate cardio workout</h4>
        <div>Published On: November 26th, 2019
          |
          <div> 0 Comments </div>
        </div>
      </div>
      <div class="col-4">
        <img class="img-fluid"
          src="https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/blog3@2x-600x386.jpg" alt="juices">
        <h4 class="my-3">New juices available now</h4>
        <div>Published On: November 26th, 2019
          |
          <div>0 Comments</div>
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
