<template>
    <div>
        <h2>{{ title }}</h2>

        <input placeholder="Github username" v-model="username" type="text" />

        <button type="button" v-on:click="search">
            Search
        </button>

        <div v-if="user !== null">
            <h2>Found</h2>

            {{ user.name }}
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data: () => ({
        name: "Training",
        title: "Training with VueJS",
        username: "",
        user: null,
    }),
    watch: {},
    methods: {
        async search() {
            const { data } = await axios.get(
                "https://api.github.com/users/" + this.username
            );

            console.log(data);
            this.$store.state.user = data;
        },
    },
};
</script>
