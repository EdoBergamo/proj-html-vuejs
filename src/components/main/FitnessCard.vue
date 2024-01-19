<script>
import { ref } from "vue";
export default {
    name: "FitnessCard",
    data() {
        return {
            cards: ref([
                {
                    id: 1,
                    // voglio aggiungere una immagine presente nella cartella public
                    img: "./../../public/fitness-watch.png",
                    title: "Team training",
                    subtitle: "Find a partner",
                    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    button: "Find a partner >",
                },
                {
                    id: 2,
                    img: "./../../public/dumbbell.png",
                    title: "Crossfit workout",
                    subtitle: "Push your limits",
                    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    button: "Learn about Crossfit >",
                },
                {
                    id: 3,
                    img: "./../../public/idk-waist.png",
                    title: "Weight loss plan",
                    subtitle: "Shed those pounds",
                    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    button: "Schedule a workout >",
                },
            ]),
        };
    },
}
</script>
<template lang="">
    <div class="container">
          <ul v-for="card in cards" :key="card.id" class="list-unstyled text-center mx-4 ">
            <li>
                <div>
                    <img :src="card.img" :alt="card.title">
                </div>
              <div class="card-header text-white mt-3">
                <h2>{{ card.title }}</h2>
              </div>
              <div class="card-subtitle mb-5">
                <h3>{{ card.subtitle }}</h3>
              </div>
              <div class="card-body text-white mb-5">
                <p>{{ card.description }}</p>
              </div>
              <div class="card-footer">
                <a href="#" class="text-white">{{ card.button }}</a>
              </div>
            </li>
          </ul>
      </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    margin: 0px;

    ul {
        padding: 35px 40px;
        position: relative;
    }

    ul:before {
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 5px solid #4154ff;
        border-radius: 5px;
        transition: transform 0.5s;
        position: absolute;
    }

    ul:hover:before{
        transform: scale(1.1);
    }

    .card-subtitle {
        color: #fff941;

    }

    .card-body p {
        font-size: 19px;
        line-height: 31px;
        color: #d5d4d7;
    }

    .card-footer a {
        text-decoration: none;
    }

}
</style>