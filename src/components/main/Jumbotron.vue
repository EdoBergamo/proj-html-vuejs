<script>
export default {
  name: 'Jumbotron',
}
</script>

<template>
  <div class="hero">
    <div class="hero__content">
      <p class="intro-text text-red">Certified fitness professional</p>
      <h1 class="big-text">Take control of your health</h1>
      <p class="intro-text-2">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</p>

      <button class="button_ bg-blue px-4 py-2 text-center">Visit my YouTube channel</button>
      <button class="button_ bg-outline px-4 py-2 text-center">Buy Avada Today &rarr;</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use "../../styles/partials/variables" as *;

.hero {
  height: 650px;
  display: flex;
  width: 100%;
  align-items: center;
  background: linear-gradient(90deg, black 47%,rgba(6, 6, 7, 0) 76%), url('https://avada.website/fitness/wp-content/uploads/sites/130/2020/02/slider82x-scaled.jpg') no-repeat;
  background-size: cover;
}

.hero__content {
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
}

.big-text {
  font-size: 70px;
  color: #fff;
}

.intro-text,
.intro-text-2 {
  color: $grey;
  font-size: 20px;
  font-weight: 700;
}

.text-red {
  color: $red;
}

.bg-blue {
  background: $blue;
}

.bg-outline {
  background-color: transparent !important;
  border: 2px solid $grey !important;
}

.button_ {
  @include blue-button;
  font-weight: normal;
  font-size: medium;
}
</style>