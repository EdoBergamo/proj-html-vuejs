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
</style>