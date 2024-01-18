<script>
import { store } from '../store.js';

export default {
  name: 'Header',
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <header class="d-flex align-items-center">
    <div class="container">
      <div class="row d-flex justify-content-between align-items-center">

        <!-- logo link -->
        <div class="w_auto">
          <a href="">
            <img src="https://avada.website/fitness/wp-content/uploads/sites/130/2021/04/logo-svg.svg" alt="">
          </a>
        </div>

        <div class="w_auto d-flex align-items-center">
          <!-- links -->
          <ul class="d-flex m-0">
            <li v-for="(link, index) in  store.header " :key="index" class="m-2">

              <div class="dropdown">
                <a :href="`${link.href}`" :class="link.active ? 'color_white' : ''" class="mx-1">
                  {{ link.label }}
                  <span class="badge bg-warning mx-1 custom_badge" v-show="link.badge">New</span>
                  <span v-show="link.dropdown.length > 0" class="mx-1">
                    <i class="fa-solid fa-angle-down"></i>
                  </span>
                </a>

                <div class="dropdown-content">
                  <a href="#" v-for="drop in link.dropdown">{{ drop }}</a>
                </div>
              </div>

            </li>
          </ul>

          <!-- button and searchbar -->
          <span>
            <button class="button_ px-4 py-2 text-center mx-3">Schedule a workout</button>
          </span>
          <i class="fa-solid fa-magnifying-glass mx-3 icon_grey"></i>
          <i class="fa-solid fa-cart-shopping mx-3 icon_grey"></i>

        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as*;
@use '../styles/partials/mixins' as*;

header {
  background-color: black;
  height: 100px;

  ul {
    list-style-type: none;

    a {
      color: #7f7f7f;
      text-decoration: none;
      font-size: large;

      &:hover,
      &:hover i {
        color: #ddd
      }
    }

    .color_white {
      color: white
    }

    .dropdown {
      position: relative;
      display: inline-block;

      .custom_badge {
        color: rgb(0, 0, 0);
        border-radius: 0;
      }
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #000000;
      min-width: 130px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    .dropdown-content a {
      color: rgb(255, 255, 255);
      font-size: small;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      background-color: #1e00ff;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    i {
      color: #7f7f7f;
    }
  }

  .button_ {
    @include blue-button;
    font-weight: normal;
    font-size: medium;
    background-color: rgb(99, 99, 235);

    &:hover {
      background-color: rgb(153, 0, 0);
    }
  }

  .icon_grey {
    color: rgb(132, 132, 132);

    &:hover {
      color: rgb(255, 255, 255);
    }
  }
}
</style>


