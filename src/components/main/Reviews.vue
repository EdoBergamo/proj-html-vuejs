<script>
export default {
  name: "Reviews",
};
</script>

<template>
  <div class="bg_linear">
    <div class="container leila">
      <div class="row width-80 py-5">
        <div class="image-section">
          <img src="https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/service6@2x.jpg" alt="Image 1" />

          <div class="bottom-left mx-4">
            <img src="/big-wave-grossa-gls.png" />
            <h1>Crossfit Workout</h1>
            <p class="text-yellow">Push your limits</p>
          </div>
          <img src="https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/box1@2x.jpg" alt="Image 2" />
          <img src="https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/box3@2x.jpg" alt="Image 3" />
        </div>

        <div class="text-section">
          <p class="big-text">
            "How you respond to the challenge in the second half will determine
            what you become after the game, whether you are a winner or a loser."
          </p>
        </div>

        <img src="/leila.jpg" class="d-none" alt="" />

        <div class="d-flex align-items-centerx justify-content-center">
          <img src="/leila-waves-yellow.png" class="" alt="" />
        </div>

        <div class="d-flex justify-content-center mt-4">
          <img class="image" src="https://avada.website/fitness/wp-content/uploads/sites/130/2020/03/avatar-1@2x.jpg"
            alt="" />
          <p>Brad Johnson</p>
          <p>Las Vegas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.bg_linear {
  background: linear-gradient(150deg, rgb(0, 22, 219) 0%, rgb(219, 0, 11) 100%);
  ;

  .leila {
    position: relative;
    text-align: center;
    color: #fff;

    .bottom-left {
      position: absolute;
      left: 16px;
      top: 220px;
    }
  }

  .text-yellow {
    color: $yellow;
  }

  .image-section {
    display: flex;
    justify-content: space-around;
    margin-top: -100px;

    img {
      width: 30%;
      border-radius: 8px;
    }
  }

  .text-section {
    text-align: center;
    margin: 20px;

    p {
      font-size: 16px;
    }

    .big-text {
      font-size: 40px;
      color: #000;
    }
  }

  .image {
    border-radius: 50%;
  }
}
</style>
