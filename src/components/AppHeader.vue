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
            <li v-for="(link, index) in store.header" :key="index" class="m-2">
              <a :href="`${link.href}`">{{ link.label }}</a>
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
      color: white;
      text-decoration: none;
    }
  }

  .button_ {
    @include blue-button;
    font-weight: normal;
    font-size: medium;
  }

}
</style>


