<template>
    <fragment>
        <h2> {{ title  }}</h2>

        <input type="text"  
            v-model="name"
            
        />


    </fragment>

</template>


<script>
export default {
    data: () => ({ title: "Directive personalized", name: "" }),
};
</script>
>