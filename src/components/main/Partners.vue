<script>
export default {
  name: 'Partners'
}
</script>
<template lang="">
  <div class="container">
    <h4>Join our mailing list today</h4>
    <h1>Insider offers & flash sales in your inbox every week</h1>
  
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
</template>
<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

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
</style>