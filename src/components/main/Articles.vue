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
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    onEnter() {
      const box = document.getElementById("box");
      const rect = box.getBoundingClientRect().top;
      if (rect < 750) {
        this.show = true
      }
    },
  },

  mounted() {
    document.addEventListener("scroll", this.onEnter);
  }
}
</script>
<template>
  <div class="my_50">
    <div class="container" id="box" :class="show ? 'show_box' : 'box_even'">
      <div class="row">
        <div class="col-6">
          <!-- TITOLO SEZIONE  -->
          <h4 class="my-4">
            {{ title }}
          </h4>
        </div>
        <div class="col-6 text-end mt-4 pe-5">
          <a href="#">
            <!-- LINK PER ALTRI ARTICOLI  -->
            <h6 class="d-inline pe-3 font-weight-bold">{{ view_all }}</h6>
            <i class="fas fa-angle-right"></i>
          </a>
        </div>
        <!-- CICLA CARD IN ARRAY PASSATO CON PROPS  -->
        <div class="col-4" v-for="card in cards">
          <!-- IMMAGINE  -->
          <img class="img-fluid" :src=card.img alt="protein">
          <h4 class="my-3">{{ card.name }}</h4>
          <div>
            {{ card.sub_title }}
          </div>

        </div>
      </div>
    </div>
  </div>

  <BuyAvada />
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.my_50 {
  margin: 60px 0;

  a {
    cursor: pointer;
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: $blue;
  }

  .col-4 {
    img {
      cursor: pointer;
    }

    div {
      color: $grey
    }
  }
}
</style>
