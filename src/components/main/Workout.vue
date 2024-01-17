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
            <img src="/yoga.png" alt="">
            <div class="py-3">
              <img src="/onda.png" alt="">
            </div>
            <p class="text-grey">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolor laborum porro enim deleniti corrupti velit, non, eum quis aliquam accusantium possimus sunt, vero accusamus ea illo? Neque, iure possimus!</p>
            <p>Visit Yoga Studio ></p>
          </div>
          <div class="col-3">
            <img src="/fitnessCenter.png" alt="">
            <div class="py-3">
              <img src="/onda.png" alt="">
            </div>
            <p class="text-grey">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolor laborum porro enim deleniti corrupti velit, non, eum quis aliquam accusantium possimus sunt, vero accusamus ea illo? Neque, iure possimus!</p>
            <p>Join Fitness Center ></p>
          </div>
          <div class="col-3">
            <img src="/fitnessClub.png" alt="">
            <div class="py-3">
              <img src="/onda.png" alt="">
            </div>
            <p class="text-grey">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolor laborum porro enim deleniti corrupti velit, non, eum quis aliquam accusantium possimus sunt, vero accusamus ea illo? Neque, iure possimus!</p>
            <p>Learn about FC ></p>
          </div>
          <div class="col-3">
            <img src="/power.png" alt="">
            <div class="py-3">
              <img src="/onda.png" alt="">
            </div>
            <p class="text-grey">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolor laborum porro enim deleniti corrupti velit, non, eum quis aliquam accusantium possimus sunt, vero accusamus ea illo? Neque, iure possimus!</p>
            <p>Visit Power Gym ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="jumbo ">
    <div class="container">
      <div class="row">
        <div class="content-col">
          <div class="col-12">
            <i class="fa-solid fa-play"  style="color: #4154FF;"></i>
          </div>
          <div class="col-12">
            <h2>Crossfit workout of the day</h2>
          </div>
          <div class="co-12">
            <h3>November 15th, 2019</h3>
          </div>
          <div class="col-12">
            <p>View all video &RightArrow;</p>
          </div>  
        </div>
      </div>
    </div>
  </div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</template>

<style lang="scss" scoped>
.bg-white {
  background-color: white;
  text-align: center;

  .text-grey {
    color: grey;
  }

  .content-row {
    display: flex;
    flex-direction: row;
    padding: 50px;

  }
}

.jumbo {
  background-image: url("https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/banner14@2x.jpg");
  background-size: cover;
  color: white;
  text-align: center;
  height: 650px;



  .content-col {
    display: flex;
    flex-direction: column;
    padding: 250px;


  }

  h3 {
    color: yellow;
  }

  i {
    border-radius: 50%;
    background-color: white;
    padding: 30px;
  }

}
</style>