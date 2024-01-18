<script>
import { ref } from "vue";
export default {
    name: "FitnessCard",
    data() {
        return {
            cards: ref([
                {
                    id: 1,
                    title: "Team training",
                    subtitle: "Find a partner",
                    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    button: "Find a partner",
                },
                {
                    id: 2,
                    title: "Crossfit workout",
                    subtitle: "Push your limits",
                    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    button: "Learn about Crossfit",
                },
                {
                    id: 3,
                    title: "Weight loss plan",
                    subtitle: "Shed those pounds",
                    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    button: "Schedule a workout",
                },
            ]),
        };
    },
}
</script>
<template lang="">
    <div class="container">
          <ul v-for="card in cards" :key="card.id" class="border border-primary border-4 rounded-1 list-unstyled text-center p-3 mx-3 ">
            <li>
              <div class="card-header text-white">
                <h2>{{ card.title }}</h2>
              </div>
              <div class="card-subtitle">
                <h3>{{ card.subtitle }}</h3>
              </div>
              <div class="card-body text-white">
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
}





.card-subtitle {
    color: #fff941;
}

.card-footer a {
    text-decoration: none;
}


</style>