<script>
import AppLink from './AppLink.vue'
import { store } from '../store.js';

export default {
  name: 'Header',
  components: {
    AppLink,
  },
  data() {
    return {
      store,
      SearchActive: false,
    }
  },
  methods: {
    SearchOn() {
      if (this.SearchActive) {
        this.SearchActive = false;
      }
      else {
        this.SearchActive = true;
      }
    },
    ActiveLink(id) {
      store.header.forEach(element => {
        if (element.id == id) {
          element.active = true;
        }
        else {
          element.active = false;
        }
      });
    }
  }
}
</script>

<template>
  <header class="d-flex align-items-center">
    <div class="container">
      <div class="row d-flex justify-content-between align-items-center">

        <!-- logo link -->
        <div class="w_auto">
          <a href="">
            <img src="https://avada.website/fitness/wp-content/uploads/sites/130/2021/04/logo-svg.svg"
              alt="logo avada fitness">
          </a>
        </div>

        <div class="w_auto d_flex align-items-center transition_" v-show="SearchActive == false">
          <!-- links -->
          <ul class="d-flex m-0">
            <AppLink v-for="(link, index) in  store.header " :key="index" class="m-2" @click="ActiveLink(link.id)"
              :link="link"></AppLink>
          </ul>

          <!-- button and searchbutton -->
          <span>
            <button class="button_ px-4 py-2 text-center mx-3">Schedule a workout</button>
          </span>
          <i class="fa-solid fa-magnifying-glass mx-3 icon_grey" @click="SearchOn"></i>
          <i class="fa-solid fa-cart-shopping mx-3 icon_grey"></i>
        </div>

        <!-- search bar activate -->
        <div v-show="SearchActive" class="d_flex  align-items-center w-75">
          <div class="input-group w_auto m-0 w-100">
            <input type="text" class="p-3 search_style" placeholder="Search..." aria-label="Username"
              aria-describedby="basic-addon1">
            <span class="input-group-text button_search " id="basic-addon1">
              <i class="fa-solid fa-magnifying-glass m-1 fa-lg"></i>
            </span>
          </div>
          <i class="fa-solid fa-xmark icon_grey mx-4 fa-2xl" @click="SearchOn"></i>
        </div>

      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as*;
@use '../styles/partials/mixins' as*;

header {
  background-color: $black;
  height: 100px;

  ul {
    list-style-type: none;

    i {
      color: $grey;
    }
  }

  .button_ {
    @include blue-button;
    font-weight: normal;
    font-size: medium;
    background-color: $blue;
    transition-property: background-color;
    transition-duration: 1s;

    &:hover {
      background-color: $red;
    }
  }

  .icon_grey {
    color: $grey;
    transition-property: color;
    transition-duration: 1s;

    &:hover {
      color: rgb(255, 255, 255);
    }
  }

  .search_style {
    width: calc(100% - 60px);
    height: 60px;
    border-radius: 50px 0px 0px 50px;
  }

  .button_search {
    border-radius: 50px;
    background-color: $black;
    color: white;
    border: none;

    &:hover {
      background-color: $blue;
    }
  }

  .transition {
    transition: min-height calc(var(--awb-transition-time) * 1ms) cubic-bezier(.42, .01, .58, 1)
  }
}
</style>


