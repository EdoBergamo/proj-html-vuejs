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
    <i class="elem fa-solid fa-play"></i>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sin">
            <p class="textsm blue py-4">Tune up your workouts</p>
            <h1 class="textbig py-2">The best health and fitness advice online</h1>
            <p class="textsm grey py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur in
              aliasa
              ccusantium possimus labore explicabo </p>
            <button class="button_ py-3 mx-4 bg-red  py-2 text-center">
              <i class="fa-brands fa-youtube mx-2"></i>
              Visit my YouTube channel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use "../../styles/partials/mixins" as *;

.bg {
  background-color: white;
  height: 850px;

  .elem {
    border-radius: 50%;
    background-color: white;
    padding: 30px;
    color: #4154FF;
    position: absolute;
    bottom: -1350px;
    left: 430px;

    &:hover {
      color: $red;
    }

  }

  .image {


    img {
      width: 900px;
      height: 850px;
      border-bottom-right-radius: 10%;
      position: absolute;
      top: 1800px;
    }


  }

  .sin {

    padding-left: 700px;

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
      font-weight: 500;
    }

  }


}
</style>