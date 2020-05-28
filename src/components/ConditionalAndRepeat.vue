<template>
    <div>
        <h2>{{ title }}</h2>

        <h3 id="test" v-if="show === true">I am HERE</h3>

        <button @click="onChangeShow" type="button">Click to show</button>

        <h3>V-For</h3>

        <h2 v-if="loading === true">
            Loading...
        </h2>

        <div v-else>
            <div v-for="student in students" v-bind:key="student.id">
                <h2>
                    {{ i }} {{ student.name }} - {{ student.note.toFixed(1) }}
                    <span v-if="student.note >= 7">Approved! Excellent</span>
                    <span v-else-if="student.note >= 5">Approved</span>
                    <span v-else>Reproved</span>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
const students = [
    { id: 1, name: "Rodrigo", note: 9.0 },
    { id: 7, name: "Eduardo", note: 5.0 },
    { id: 5, name: "Mike", note: 3.0 },
    { id: 2, name: "Tatiane", note: 1.0 },
    { id: 11, name: "Gabriela", note: 8.0 },
    { id: 111, name: "Maria", note: 4.0 },
    { id: 92, name: "Mariana", note: 6.0 },
];

export default {
    name: "Conditionals",
    data: () => ({
        title: "Working with v-if and v-for",
        show: false,
        students,
        loading: true,
    }),

    methods: {
        onChangeShow() {
            this.show = !this.show;
        },
    },

    async mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 5000);
    },
};
</script>
