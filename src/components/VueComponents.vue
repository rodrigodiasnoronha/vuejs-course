<template>
    <fragment>
        <h2> {{ title }} </h2>

        <h2 v-if="name !== null"> {{ name }} </h2>

        <input type="text" placeholder="Github username"  v-model="username" >


        <button @click="onPressToSearchGithubByUsername">Search</button>



        <Github v-if="user !== null" v-bind:user="user"  />
    </fragment>    
</template>



<script>
import Github from "./Github";
import axios from "axios";

export default {
    data: () => ({
        title: "Working with Vue Components",
        user: null,
        username: "",
    }),
    props: {
        name,
    },
    components: {
        Github,
    },
    methods: {
        async onPressToSearchGithubByUsername() {
            try {
                const { data } = await axios.get(
                    `https://api.github.com/users/${this.username}`
                );

                this.user = data;
            } catch (err) {
                alert("Error");
            }
        },
    },
};
</script>
