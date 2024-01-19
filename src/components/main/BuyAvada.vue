<script>
export default {
    name: 'BuyAvada'
}
</script>
<template lang="">
    <div class="bg_img">
        <!-- SFONDO NERO SFUMATO  -->
        <div class="layout">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-8">
                        <div class="text-center">
                            <h2>
                            “I’ve failed over and over again in my life. And that is why I succeed.”
                            </h2>
                            <img src="/leila-waves-yellow.png" alt="wave" class="my-img">
                            <div class="text-grey my-5">
                            Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donec sed massa in ipsum eros, tristique. Gravida suspendisse etiam in iaculis
                            </div>
                            <button>Buy Avada today <i class="fas fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

.bg_img {
    background-image: url('https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/banner2@2x.jpg');
    background-position: top;
    background-size: cover;
    margin-top: 100px;

    .layout {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.229) 10%, black 100%);
        padding: 10%;

        h2 {
            font-size: 60px;
            color: white;
        }

        .my-img {
            width: 80px;
            margin-top: 35px;
        }

        .text-grey {
            color: $grey;
            font-size: 25px;
            line-height: 1.5;
        }

        button {
            @include blue-button;
            background-color: $blue;
            font-weight: 500;
        }

        button:hover {
            background-color: $red;
        }
    }

}

.bg_img:hover {
    filter: saturate(120%) brightness(110%);
    transition: filter 0.5s ease;
}
</style>


