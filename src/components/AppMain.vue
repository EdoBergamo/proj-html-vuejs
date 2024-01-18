<script>
import Jumbotron from "./main/Jumbotron.vue";
import Partners from "./main/Partners.vue";
import Articles from "./main/Articles.vue";
import Workout from "./main/Workout.vue";
import { store } from "../store"

export default {
  data() {
    return {
      store
    }
  },
  components: {
    Jumbotron,
    Partners,
    Articles,
    Workout
  }
}
</script>

<template>
  <Jumbotron />
  <Partners />
  <Articles :cards="store.articles" :title="store.title_articles" :view_all="store.view_all_articles" />
  <Workout />
</template>

<style></style>