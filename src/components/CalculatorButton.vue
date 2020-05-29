<template>
    <button class="button" type="button">{{number}} </button>

</template>



<script>
export default {
    name: "CalculatorButton",
    props: {
        number: Number,
    },
};
</script>



<style>
    .button {
        min-height: 35px;
        font-weight: bold;
    }


</style>