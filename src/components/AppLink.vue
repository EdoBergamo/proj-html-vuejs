
<script>
export default {
    name: 'AppLink',

    props: {
        link: Object
    },

    data() {
        return {

        }
    },

}
</script>

<template lang="">
    <li>
        <div class="dropdown">
            <a :class="link.active ? 'color_white' : ''" class="mx-1">
                {{ link.label }}
                <span class="badge bg-warning mx-1 custom_badge" v-show="link.badge">New</span>
                <span v-show="link.dropdown.length > 0" class="mx-1">
                    <i class="fa-solid fa-angle-down"></i>
                </span>
            </a>

            <div class="dropdown-content">
                <a href="#" v-for="drop in link.dropdown" >{{ drop }}</a>
            </div>
        </div>

    </li>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as*;
@use '../styles/partials/mixins' as*;

a {
    color: #7f7f7f;
    text-decoration: none;
    font-size: large;
    transition-property: color;
    transition-duration: 1s;

    &:hover,
    &:hover i {
        color: #ddd
    }
}

.color_white {
    color: white
}

.dropdown {
    position: relative;
    display: inline-block;

    .custom_badge {
        color: $black;
        border-radius: 0;
    }
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: $black;
    min-width: 130px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: rgb(255, 255, 255);
    font-size: small;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: $blue;
}

.dropdown:hover .dropdown-content {
    display: block;
}

i {
    color: $grey;
}
</style>