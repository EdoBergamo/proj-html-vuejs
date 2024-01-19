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
      <i class="elem fa-solid fa-play"></i>
    </div>
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-11 ">
          <div class="sin">
            <p class="textsm blue py-4">Tune up your workouts</p>
            <h1 class="textbig py-2">The best health and fitness advice online</h1>
            <p class="textsm grey py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur in
              aliasa
              ccusantium possimus labore explicabo </p>
            <button class="button_ py-3 mx-4 bg-red  text-center">
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
  height: 750px;

  .elem {
    border-radius: 50%;
    background-color: white;
    padding: 30px;
    color: #4154FF;
    position: relative;
    right: 25%;
    top: 300px;


    &:hover {
      color: $red;
    }

  }

  .image {

    img {
      width: 900px;
      height: 850px;
      border-bottom-right-radius: 10%;
      float: left;
      margin-top: -100px;
    }


  }

  .sin {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 30px;
    margin-left: 25px;


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
      width: fit-content;

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