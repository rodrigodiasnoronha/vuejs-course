<template>
    <fragment>
        <h2 class="test">
            {{ title }}
        </h2>

        <button type="button" @click="changeColor" >Change color</button>

        <div class="background" v-bind:style="{backgroundColor: color}" />



    </fragment>
</template>

<script>
export default {
    data: () => ({ title: "Applying CSS styles", color: "red" }),
    methods: {
        changeColor() {
            const colors = [
                "red",
                "blue",
                "black",
                "green",
                "orange",
                "brown",
                "yellow",
            ];

            this.color = colors[Math.floor(Math.random() * colors.length)];
        },
    },
};
</script>

<style>
.test {
    font-size: 40px;
}

.background {
    width: 50px;
    height: 50px;
    background-color: red;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 25px;
}
</style>
