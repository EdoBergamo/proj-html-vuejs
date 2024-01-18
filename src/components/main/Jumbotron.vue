<script>
export default {
  name: "Jumbotron",
};
</script>

<template>
  <div class="hero">
    <div class="hero__content">
      <p class="intro-text text-red">Certified fitness professional</p>
      <h1 class="big-text pb-5">Take control of your health</h1>
      <div>
        <img src="/leila-waves-yellow.png" alt="" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/47/47371.png"
          class="d-none"
          alt=""
        />
      </div>
      <p class="intro-text-2 pt-5">
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor
        sit amet.
      </p>

      <button class="button_ py-3 mx-4 bg-blue px-4 py-2 text-center">
        <i class="fa-brands fa-youtube mx-2"></i>
        Visit my YouTube channel
      </button>
      <button class="button_ py-3 piccolo-bug bg-outline px-4 py-2 text-center">
        Buy Avada Today
        <i class="fa-solid mx-2 fa-arrow-right"></i>
      </button>
    </div>
  </div>

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.hero {
  height: 650px;
  display: flex;
  width: 100%;
  align-items: center;
  background: linear-gradient(90deg, black 47%, rgba(6, 6, 7, 0) 76%),
    url("https://avada.website/fitness/wp-content/uploads/sites/130/2020/02/slider82x-scaled.jpg")
      no-repeat;
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
  border: 3.23px solid rgb(37, 37, 37) !important;
}

.button_ {
  @include blue-button;
  font-weight: normal;
  font-size: medium;
}
</style>
