<script>
export default {
  name: "healthEfitness",
  data() {
    return {

    }
  },
}

</script>

<template>
  <div class="bg">
    <div class="image">
      <img src="https://avada.website/fitness/wp-content/uploads/sites/130/2019/12/service15@2x.jpg" alt="">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sin">
            <p class="textsm blue py-4">Tune up your workouts</p>
            <h1 class="textbig">The best health and fitness advice online</h1>
            <p class="textsm grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur in aliasa
              ccusantium possimus labore explicabo </p>
            <button class="button_ py-3 mx-4 bg-red px-4 py-2 text-center">
              <i class="fa-brands fa-youtube mx-2"></i>
              Visit my YouTube channel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use "../../styles/partials/mixins" as *;

.bg {
  background-color: white;
  height: 700px;

  .image {


    img {
      width: 830px;
      height: 780px;
      border-bottom-right-radius: 10%;
      position: absolute;
      top: 1450px;
    }


  }

  .sin {

    padding-left: 600px;

    .blue {
      color: $blue;

    }

    .grey {
      color: $grey;
    }



    .bg-red {
      background-color: red;

      &:hover {
        background-color: rgba(255, 0, 0, 0.678)
      }
    }

    .button_ {
      @include blue-button;
      font-weight: normal;
      font-size: medium;
    }

    .textbig {
      font-size: 70px;
    }

    .textsm {
      font-size: 20px;
      font-weight: 700;
    }

  }


}
</style>