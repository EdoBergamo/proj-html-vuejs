<script>
export default {
  name: "Workout"
}
</script>
<template lang="">
  <div class="bg-white">
    <div class="container">
      <div class="row">
        <div class="content-row">
          <div class="col-3">
            <img class="img" src="/yoga.png" alt="">
            <div class="py-3">
              <img src="/onda.png" alt="">
            </div>
            <p class="text-grey">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolor laborum porro enim deleniti corrupti velit, non.</p>
            <p>Visit Yoga Studio ></p>
          </div>
          <div class="col-3">
            <img class="img" src="/fitnessCenter.png" alt="">
            <div class="py-3">
              <img src="/onda.png" alt="">
            </div>
            <p class="text-grey">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolor laborum porro enim deleniti corrupti velit, non.</p>
            <p>Join Fitness Center ></p>
          </div>
          <div class="col-3">
            <img class="img" src="/fitnessClub.png" alt="">
            <div class="py-3">
              <img src="/onda.png" alt="">
            </div>
            <p class="text-grey">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolor laborum porro enim deleniti corrupti velit, non.</p>
            <p>Learn about FC ></p>
          </div>
          <div class="col-3">
            <img class="img" src="/power.png" alt="">
            <div class="py-3">
              <img src="/onda.png" alt="">
            </div>
            <p class="text-grey">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolor laborum porro enim deleniti corrupti velit, non.</p>
            <p>Visit Power Gym ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="jumbo">
    <div class="layout">
      <div class="container">
        <div class="row">
          <div class="content-col">
            <div class="col-12">
              <i class="fa-solid fa-play"  ></i>
            </div>
            <div class="col-12">
              <h1>Crossfit workout of the day</h1>
            </div>
            <div class="co-12">
              <h2>November 15th, 2019</h2>
            </div>
            <div class="col-12">
              <p>View all video &RightArrow;</p>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

.bg-white {
  background-color: white;
  text-align: center;
  height: 450px;

  .img {
    width: 60%;
  }

  .text-grey {
    color: $grey;
  }

  .content-row {
    display: flex;
    flex-direction: row;
    padding: 50px;

  }

  .col-3 {
    cursor: pointer;
  }
}

.jumbo {

  background-image: url("https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/banner14@2x.jpg");
  background-size: cover;
  color: white;
  text-align: center;

  .layout {
    height: 650px;
    background: linear-gradient(151deg, rgba(19, 0, 161, 0.726) 35%, rgba(156, 1, 1, 0.596) 100%);
  }


  .content-col {
    display: flex;
    flex-direction: column;
    padding: 250px;


  }

  h1 {
    font-size: 40px;
    word-spacing: 2px;
  }

  h2 {
    color: $yellow;
    font-size: 40px;
  }

  i {
    border-radius: 50%;
    background-color: white;
    padding: 30px;
    color: #4154FF;

    &:hover {
      color: $red;
    }

  }

}
</style>