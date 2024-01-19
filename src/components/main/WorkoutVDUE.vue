<script>
export default {
    name: "WorkoutVDUE",

    data() {
        return {

        }
    },
}

</script>

<template>
    <div class="jumbo">
        <div class="layout">
            <div class="container">
                <div class="row">
                    <div class="content-col">
                        <div class="col-12">
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div class="col-12">
                            <h1>Crossfit workout of the day</h1>
                        </div>
                        <div class="co-12">
                            <h2>November 15th, 2019</h2>
                        </div>
                        <div class="col-12">
                            <p>View all video &RightArrow;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use "../../styles/partials/mixins" as *;

.jumbo {

    background-image: url("https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/banner14@2x.jpg");
    background-size: cover;
    color: white;
    text-align: center;

    .layout {
        height: 650px;
        background: linear-gradient(151deg, rgba(19, 0, 161, 0.726) 35%, rgba(156, 1, 1, 0.596) 100%);
    }


    .content-col {
        display: flex;
        flex-direction: column;
        padding: 250px;


    }

    h1 {
        font-size: 40px;
        word-spacing: 2px;
    }

    h2 {
        color: $yellow;
        font-size: 40px;
    }

    i {
        border-radius: 50%;
        background-color: white;
        padding: 30px;
        color: #4154FF;

        &:hover {
            color: $red;
        }

    }

}
</style>