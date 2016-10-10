<template>
    <div id="qrpage">
        <input v-model="parentMsg" placeholder="Try type in !"></input>
        <br>
        <qrcode v-bind:data ="parentMsg"></qrcode>  
    </div>
</template>

<script>
    import QRCode from './Qrcode.vue'
    export default{
        data () {
            return {
                parentMsg: ''
            }
        },
        components: {
            'qrcode': QRCode
        }
    }
</script>

<style>
#qrpage{
    background-color: #FFFFFF;
}
</style>