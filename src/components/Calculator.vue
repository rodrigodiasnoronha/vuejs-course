<template>
    <fragment>
        <h2>
            {{ title }}
        </h2>



            
            <div class="calculator">


                <div class="numbers">
                    <Button v-for="number in numbers" v-bind:number="number"  v-bind:key="number"  />
                </div>
                <div class="op">
                    <Button v-for="op in operations" v-bind:number="op" v-bind:key="op" />
                </div>
        </div>
    </fragment>
</template>



<script>
import Button from "./CalculatorButton";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "=" ];
const operations = ["+", "-", "/", "x"];

export default {
    name: "Calculator",
    data: () => ({ title: "Calculator with VueJS", numbers, operations }),
    components: {
        Button,
    },
};
</script>


<style>
.calculator {
    background-color: #222;
    display: flex;
}

.numbers {
    flex: 3;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;w
}

.op {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr;
}
</style>
