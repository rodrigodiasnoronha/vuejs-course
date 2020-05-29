<template>
<fragment>
    <h2>Github </h2>

    <h3> {{ user.login}} </h3>
    <img v-bind:src="user.avatar_url" v-bind:style="{width: `100%`}">
    </fragment>

</template>



<script>
export default {
    props: {
        user: Object,
    },
};
</script>
>