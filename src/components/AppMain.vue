<script>
import Jumbotron from "./main/Jumbotron.vue";
import Partners from "./main/Partners.vue";
import Articles from "./main/Articles.vue";
import Workout from "./main/Workout.vue";
import BuyAvada from "./main/BuyAvada.vue";
import healthEfitness from "./main/healthEfitness.vue";
import Reviews from "./main/Reviews.vue";
import { store } from "../store"

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    Jumbotron,
    Partners,
    Articles,
    Workout,
    BuyAvada,
    healthEfitness,
    Reviews
  },
  methods: {
    onEnter() {
      const boxes = document.querySelectorAll(".box");
      const trigger = window.innerHeight / 5 * 4;
      boxes.forEach(box => {
        const rect = box.getBoundingClientRect().top;
        if (rect < trigger) {
          box.classList.add('show_box')
        }
      });
    },
  },

  mounted() {
    document.addEventListener("scroll", this.onEnter);
  }
}
</script>

<template>
  <Jumbotron />
  <Reviews />
  <div class="box box_even">
    <healthEfitness />
  </div>
  <div class="box box_odd">
    <Articles :cards="store.videos" :title="store.title_videos" :view_all="store.view_all_videos" />
  </div>
  <div class="box box_even">
    <Partners />
  </div>
  <div class="box box_odd">
    <Articles :cards="store.articles" :title="store.title_articles" :view_all="store.view_all_articles" />
  </div>
  <div class="box box_even">
    <BuyAvada />
  </div>
  <div class="box box_odd">
    <Workout />
  </div>
</template>

<style lang="scss" scoped></style>