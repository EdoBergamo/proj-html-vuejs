<script>
import { store } from '../store.js';
export default {
    name: 'Footer',
    data() {
        return {
            store,
            mobile: '1.800.000.0000',
            mail: 'info@your-company.com',
            recentPosts: [
                {
                    label: 'The best protein shake',
                    link: '/',
                },
                {
                    label: 'Ultimate cardio workout',
                    link: '/',
                },
                {
                    label: 'New juices availabel now',
                    link: '/',
                },
                {
                    label: 'Tips to find training partners',
                    link: '/',
                },
                {
                    label: '20bets healthy recipes',
                    link: '/',
                },

            ]
        }
    },
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row d-flex text-center">
                <div class="col-4">
                    <img src="https://avada.website/fitness/wp-content/uploads/sites/130/2021/04/logo-svg.svg"
                        alt="logo avada fitness">
                    <p> Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus.
                        Pellentesque consectetur amet purus ultrices mauris.</p>
                </div>
                <div class="col-4">
                    <h4>RECENT POSTS</h4>
                    <div>
                        <a v-for="(post, index) in recentPosts" :key="index" :href="`${post.link}`" class="d-block">
                            {{ post.label }}</a>
                    </div>
                </div>
                <div class="col-4">
                    <h4>CONTACT INFORMATIONS</h4>
                    <p>4746 Tipple Road Michigan 48449</p>
                    <p>Mobile: {{ mobile }}</p>
                    <p>Email: {{ mail }}</p>
                </div>
            </div>
            <div class="row"></div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as*;

footer {
    background-color: $black;
    color: white;
}
</style>