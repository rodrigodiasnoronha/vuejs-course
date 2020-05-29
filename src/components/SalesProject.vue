<template>
    <div>
        <h2> {{ title  }} </h2>

        <h2 v-if="loading"> Loading</h2>


        <div v-if="sales.length > 0">
        <div v-for="sale in sales"  v-bind:key="sale.id">
                <h2>{{sale.name}}</h2>
            </div> 
        </div>
    </div>



</template>


<script>
import api from '../services/jsonApi';

export default {
    name: 'Sales',
    data: () => ({ title: 'Sales Project', sales: [], loading: true }),
    methods: {
        async fetchSales() {
            try {
                const { data } = await api.get('/sales');
                this.sales = data;
                this.loading = false;
            } catch (err) {
                alert('Error');
            }
        },
    },

    async mounted() {
        await this.fetchSales();
    },
};
</script>

