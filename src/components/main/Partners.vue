<script>
import { ref } from "vue";
import FitnessCard from "../main/FitnessCard.vue";
export default {
  components: {
    FitnessCard
  },
  name: "Partners",
  
};

</script>
<template lang="">
  <div class="bg-img">
    <div class="container">
      <div class="row width-80 py-5">
        <p class="red size-28">Join our mailing list today</p>
        <p class="text-white size-58">Insider offers & flash sales in your inbox every week</p>
        <div class="row pt-5">
          <div class="col-8">
            <input type="email" name="email" id="email" value="" required="true"  placeholder="Insert your email ...*" class="form-control email">
          </div>
          <div class="col-4">
            <button type="submit" class="button text-white">Subscribe</button>
          </div>
        </div>
        <p class="paragraph pt-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing elit sed porttitor lectus.</p>
      </div>
    </div>
  </div>
  <div class="bg-black">
    <div class="container">
      <div class="row ">
        <FitnessCard />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;


.bg-img {
  background-size: cover;
  background-image: linear-gradient(90deg, black 47%, rgba(6, 6, 7, 0) 76%), url('/banner1-2x.jpg');
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 80%;
    margin-left: 200px;
    padding: 95px 111px;

    .size-58 {
      font-size: 58px;
    }

    .size-28 {
      font-size: 28px;
    }

    .red {
      color: $red;
    }

    .width-80 {
      width: 80%;
    }

    .email {
      padding: 15px 60px;
      border-radius: 40px;
      border: none;
      font-size: 18px;
    }

    .button {
      background-color: rgb(65, 84, 255);
      padding: 15px 60px;
      border-radius: 40px;
      border: none;
      font-size: 18px;
      padding: 17px 60px;
    }

    .paragraph {
      color: $grey;
      font-size: 23px;
    }
  }


}

.bg-black{
  background-color: #000;
  padding: 60px 80px;
  
}
</style>