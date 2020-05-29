<template>
    <div>
            

        <h2>QRCode Generator</h2>

        <VueQrcode :options="{ width: 200 }" v-bind:value='value' />

        <br />


        <input
            placeholder="QRCode value is this input value"
            v-model="value"
         />
    </div>
</template>



<script>
import VueQrcode from '@chenfengyuan/vue-qrcode';

export default {
    name: 'QRCode',
    data: () => ({ value: 'Hello World' }),
    components: {
        VueQrcode,
    },
};
</script>
