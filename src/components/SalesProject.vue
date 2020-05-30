<template>
    <div>
        <h2> {{ title  }} </h2>

        <h2 v-if="loading"> Loading</h2>

        <h2 v-if="sales.length >0">
        Total: R${{salesByProduct.toFixed(2)}}
        </h2>

        <table class="table">

            <thead class="table-dark">
            
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>

                </tr>
            </thead>

                <tbody>
                     


                <tr v-for="sale in sales" v-bind:key="sale.id">
                    <td> {{sale.id }} </td>
                    <td> {{sale.name}} </td>
                    <td >  R${{ sale.price.toFixed(2).replace('.', ',') }} </td>
                    <td> {{ sale.qtde }} </td>
                    <td> R${{ (sale.qtde * sale.price).toFixed(2) }} </td>
                </tr>
                    


   

            </tbody>


        </table>

        <button v-on:click="nextSales">Render more sales</button>
    </div>



</template>


<script>
import api from '../services/jsonApi';

export default {
    name: 'Sales',
    data: () => ({ title: 'Sales Project', sales: [], loading: true, page: 1 }),
    methods: {
        async fetchSales() {
            try {
                const page = this.page * 25;
                const { data } = await api.get(
                    `/sales?_page=${this.page}&_limit=${page}`
                );
                this.sales = data;
                this.loading = false;
            } catch (err) {
                alert('Error');
            }
        },

        async nextSales() {
            try {
                const page = this.page++ * 25;
                const { data } = await api.get(
                    `/sales?_page=${this.page}&_limit=${page}`
                );

                this.sales = [...this.sales, ...data];
                this.page = this.page++;
            } catch (err) {
                alert('Err');
            }
        },
    },
    computed: {
        salesByProduct() {
            if (this.sales.length <= 0) {
                return 0;
            }

            const reducer = (acumulator, item) => {
                if (!acumulator.value) {
                    return item.price * item.qtde;
                }

                return acumulator.value + item.price * item.qtde;
            };

            const total = this.sales.reduce(reducer);

            console.log('total', total);

            return total;
        },
    },
    mounted() {
        this.fetchSales();
    },
};
</script>



<style>
.table {
    max-width: 700px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}
</style>
