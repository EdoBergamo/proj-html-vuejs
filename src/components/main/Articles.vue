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
}
</script>
<template>
  <div class="my_50">
    <div class="container">
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
          <div class="position-relative">
            <img class="img-fluid" :src=card.img alt="protein" :class="card.videos ? 'my_img' : ''">
            <i v-if="card.videos" class="fa-solid fa-play position-absolute"></i>
          </div>
          <h4 class="my-3">{{ card.name }}</h4>
          <div>
            {{ card.sub_title }}
          </div>

        </div>
      </div>
    </div>
  </div>
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

    .my_img {
      border-bottom-right-radius: 40px;
    }

    .position-relative {
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        border-radius: 50%;
        background-color: white;
        padding: 30px;
        z-index: 1;
        color: $blue;
      }

      i:hover {
        color: $red
      }

    }

    div {
      color: $grey
    }
  }
}
</style>
