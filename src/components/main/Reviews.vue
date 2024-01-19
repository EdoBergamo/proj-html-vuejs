<script>
export default {
  name: "Reviews",
};
</script>

<template>
  <div class="bg_linear ">
    <div class="container leila">
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="my_card mx-1" id="my_card-1">
            <div class="layout">
              <img src="/big-wave-grossa-gls.png" alt="">
              <h2>Crossfit workout</h2>
              <span>Push your limits</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="my_card mx-1" id="my_card-2">
            <div class="layout">
              <img src="/big-wave-grossa-gls.png" alt="">
              <h2>New gym apparel</h2>
              <span>Look good, feel good</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="my_card mx-1" id="my_card-3">
            <div class="layout">
              <img src="/big-wave-grossa-gls.png" alt="">
              <h2>Team training</h2>
              <span>Find a partner</span>
            </div>
          </div>
        </div>

        <div class="text-section">
          <p class="big-text">
            "How you respond to the challenge in the second half will determine
            what you become after the game, whether you are a winner or a loser."
          </p>
        </div>

        <img src="/leila.jpg" class="d-none" alt="" />

        <div class="d-flex align-items-centerx justify-content-center">
          <img src="/leila-waves-yellow.png" class="my-3" />
        </div>

        <div class="d-flex justify-content-center mt-4 text-light align-item-center">
          <img class="image" src="https://avada.website/fitness/wp-content/uploads/sites/130/2020/03/avatar-1@2x.jpg"
            alt="" />
          <div class="name d-flex gap-3">
            <p class="text-light">Brad Johnson</p>
            <p class="text-secondary">Las Vegas</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.bg_linear {
  background: linear-gradient(150deg, rgb(0, 22, 219) 0%, rgb(219, 0, 11) 100%);
  padding-bottom: 200px;

  .my_card {
    position: relative;
    min-height: 500px;
    border-radius: 10px;
    border-bottom-right-radius: 40px;
    margin-top: -80px;
    cursor: pointer;

    .layout {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(4, 4, 4, 0.457) 100%);
      padding-left: 50px;
      border-radius: 10px;
      border-bottom-right-radius: 40px;


      img {
        margin-top: 325px;
        filter: saturate(100%);
        width: 20%;
      }

      h2 {
        margin-top: 20px;
        color: white;
        font-size: 40px;
      }

      span {
        color: $yellow;
        font-size: 25px;
      }
    }
  }

  .my_card:hover {
    transform: scale(1.05);
  }

  #my_card-1 {
    background: url('https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/service6@2x.jpg');
    background-size: cover;
    height: fit-content;
  }

  #my_card-2 {
    background: url('https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/box1@2x.jpg');
    background-size: cover;
    height: fit-content;
  }

  #my_card-3 {
    background: url('https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/box3@2x.jpg');
    background-size: cover;
    height: fit-content;

  }

  .text-section {
    text-align: center;
    margin: 20px;
    margin-top: 60px;

    p {
      color: white;
      font-size: 50px;
    }

    .big-text {}
  }

  .image {
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }

  .name {
    font-size: 30px;
    padding: 10px 20px;
  }
}
</style>
