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
                <a :href="`${link.href}`" :class="link.active ? 'color_white' : ''">{{ link.label }} </a>
                <span v-show="link.dropdown.length > 0"></span>
                <div class="dropdown-content">
                  <a href="#" v-for="drop in link.dropdown">{{ drop }}</a>
                </div>
              </div>
            </li>
          </ul>

          <!-- button and searchbar -->
          <span>
            <button class="button_ px-4 py-2 text-center">Schedule a workout</button>
          </span>

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
      color: rgb(127, 127, 127);
      text-decoration: none;
    }

    .color_white {
      color: white
    }
  }

  .button_ {
    @include blue-button;
    font-weight: normal;
    font-size: medium;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
}
</style>


