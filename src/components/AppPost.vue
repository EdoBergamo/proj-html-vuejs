<script>
export default {
    name: 'AppPost',

    props: {
        post: Object
    },

}
</script>

<template lang="">
  <a class="d-block my-2">{{ post.label }}</a>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as*;
@use '../styles/partials/mixins' as*;

a {
    text-decoration: none;
    color: white;
    font-size: larger;
    transition-property: color;
    transition-duration: 1s;

    &::before {
        content: "\203A";
        font-size: 28px;
        margin-right: 10px;
        transition-property: color;
        transition-duration: 1s;
    }

    &:hover {
        color: $blue;
    }
}
</style>
