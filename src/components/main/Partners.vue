<script>
export default {
  name: 'Partners'
}
</script>
<template lang="">
  <div class="bg-img">
    <div class="container">
      <div class="row py-5">
        <h4>Join our mailing list today</h4>
        <h1 class="text-white">Insider offers & flash sales in your inbox every week</h1>
        <div class="row pt-5">
          <div class="col-6">
            <input type="email" name="email" id="email" value="" required="true"  placeholder="Insert your email ...*" class="email">
          </div>
          <div class="col-3">
            <button type="submit" class="button">Subscribe</button>
          </div>
        </div>
        <p class="paragraph pt-4">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing elit sed porttitor lectus.</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;


.bg-img {
  background-size: cover;
  background-image: linear-gradient(90deg, black 47%,rgba(6, 6, 7, 0) 76%), url('../../../public/banner1-2x.jpg');

  .row{
    width: 80%;
  }
  h4 {
    color: $red;
  }
  
  .email {
    padding: 15px 60px;
    border-radius: 40px;
    border: 1px solid black;
    font-size: 18px;
  }
  
  .button {
    @include blue-button;
  }
  
  .paragraph {
    color: $grey;
    font-size: 23px;
  }
}
</style>