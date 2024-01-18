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
                    label: '20 Best healthy recipes',
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
            <div class="row d-flex text-center padding_y">
                <div class="col-4">
                    <img src="https://avada.website/fitness/wp-content/uploads/sites/130/2021/04/logo-svg.svg"
                        alt="logo avada fitness">
                    <p class="my-4"> Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus.
                        Pellentesque consectetur amet purus ultrices mauris.</p>
                    <div class="my-1 ">
                        <div class="tooltip_">
                            <a href=""><i class="fa-brands fa-facebook-f "></i></a>
                            <span class="tooltiptext_">Facebook</span>
                        </div>
                        <div class="tooltip_">
                            <a href=""><i class="fa-brands fa-x-twitter "></i></a>
                            <span class="tooltiptext_">Twitter</span>
                        </div>
                        <div class="tooltip_">
                            <a href=""><i class="fa-brands fa-instagram "></i></a>
                            <span class="tooltiptext_">Instagram</span>
                        </div>
                        <div class="tooltip_">
                            <a href=""><i class="fa-brands fa-youtube "></i></a>
                            <span class="tooltiptext_">YouTube</span>
                        </div>
                        <div class="tooltip_">
                            <a href=""><i class="fa-brands fa-linkedin-in "></i></a>
                            <span class="tooltiptext_">Linkedin</span>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <h4>RECENT POSTS</h4>
                    <div class="my-5 posts_">
                        <a v-for="(post, index) in recentPosts" :key="index" :href="`${post.link}`" class="d-block my-2">
                            {{ post.label }}</a>
                    </div>
                </div>
                <div class="col-4 ">
                    <h4>CONTACT INFORMATIONS</h4>
                    <div class="my-5">
                        <p>4746 Tipple Road Michigan 48449</p>
                        <p>Mobile: {{ mobile }} <br>
                            Email: {{ mail }}</p>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="container">
            <div class="row text-center">
                <div class="col ">
                    <p class="grey margin_copyright">
                        Copyright 2012-2024 | Avada Theme by <a href="/" class="change">ThemeFusion</a> | All Rights
                        Reserved|Powered by <a href="/" class="change">WordPress</a>.
                    </p>
                </div>
            </div>
        </div>



    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as*;

footer {
    background-color: $black;

    /* first section of footer */
    .padding_y {
        padding: 150px 0px;

        h4 {
            color: white;
        }

        p {
            font-size: larger;
            color: white;

        }

        i {
            margin: 10px;
            color: $red;

            &:hover {
                color: $grey;
            }
        }

        .posts_ a {
            text-decoration: none;
            color: white;
            font-size: larger;

            &::before {
                content: "\203A";
                font-size: 28px;

                margin-right: 10px;
            }

            &:hover {
                color: $blue;
            }
        }

    }

    hr {
        color: white;
    }

    /* copyright section */
    .margin_copyright {
        margin: 40px 0px 50px 0px;
    }

    .grey {
        color: grey;
        font-size: large;

        &::before {
            content: '\00A9';
        }

        .change {
            color: white;
            text-decoration: none;

            &:hover {
                color: $blue;
            }
        }
    }

    .tooltip_ {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;

    }

    .tooltip_ .tooltiptext_ {
        visibility: hidden;
        width: 60px;
        background-color: rgb(33, 33, 33);
        color: $grey;
        text-align: center;
        border-radius: 6px;
        padding: 1px 0;
        font-size: smaller;

        /* Position the tooltip */
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%;
        margin-left: -25px;
    }

    .tooltip_:hover .tooltiptext_ {
        visibility: visible;
    }

}
</style>