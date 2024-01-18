<script>
export default {
    name: 'BuyAvada'
}
</script>
<template lang="">
 <div class="bg_img py-5 my-5">
  <div class="container">
   <div class="row justify-content-center">
    <div class="col-8">
     <div class="text-center">
      <h2>
       “I’ve failed over and over again in my life. And that is why I succeed.”
      </h2>

      <div class="text-grey my-5">
       Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donec sed massa in ipsum eros, tristique. Gravida suspendisse etiam in iaculis
      </div>
      <button>Buy Avada today <i class="fas fa-angle-right"></i></button>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>
<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;
@import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

.bg_img {
    background-image: url('https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/banner2@2x.jpg');
    background-position: top;

    h2 {
        font-size: 60px;
        color: white;
    }

    .text-grey {
        color: $grey;
        font-size: 25px;
        line-height: 1.5;
    }

    button {
        @include blue-button
    }
}
</style>


