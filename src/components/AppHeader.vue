<script>
import AppLink from './AppLink.vue';
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
  <header class="d_flex">
    <div class="container_header">
      <div class="row_ ">

        <!-- logo link -->
        <div class="w_auto">
          <a href="">
            <img src="https://avada.website/fitness/wp-content/uploads/sites/130/2021/04/logo-svg.svg"
              alt="logo avada fitness">
          </a>
        </div>
        <div class="container_ ">
          <div class="box_" :class="SearchActive ? 'change_' : ''">

            <div class="upside_ btn_">
              <div class="input-group w_auto m-0 w-100">
                <input type="text" class="p-3 search_style" placeholder="Search..." aria-label="Username"
                  aria-describedby="basic-addon1">
                <span class="input-group-text button_search " id="basic-addon1">
                  <i class="fa-solid fa-magnifying-glass m-1 fa-lg"></i>
                </span>
              </div>
              <i class="fa-solid fa-xmark icon_grey mx-4 fa-2xl" @click="SearchOn"></i>
            </div>

            <div class="front_ btn_">
              <ul class="d_flex m-0">
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
          </div>
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

  .container_header {
    width: 95vw;
    margin: 0 auto;

    .row_ {
      display: flex;
      justify-content: space-between;
      align-items: center;

      i {
        color: $grey;
        transition-property: color;
        transition-duration: 1s;

        &:hover {
          color: white;
        }
      }

      ul {
        list-style-type: none;
        height: 60px;
        display: flex;
        align-items: center;

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

      .container_ {
        display: flex;
        align-items: center;
        height: 95px;

        .change_ {
          transform: rotateX(90deg)
        }

        .box_ {
          transform-style: preserve-3d;
          transition: 0.4s ease;

          .btn_ {
            background-color: rgb(0, 0, 0);
            color: white;
            display: flex;
            align-items: center;
            backface-visibility: hidden;
          }

          .upside_ {
            transform: rotateX(-90deg) translateZ(75px);

            .search_style {
              width: 90%;
              height: 60px;
              border-radius: 50px 0px 0px 50px;
            }

            .button_search {
              border-radius: 0px 50px 50px 0px;
              background-color: $black;
              color: white;
              border: none;

              &:hover {
                background-color: $blue;
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
          }

          .front_ {
            transform: translateZ(75px) translateY(-30px);

          }
        }
      }
    }
  }
}
</style>


