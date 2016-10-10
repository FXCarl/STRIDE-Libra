<template>
    <div>
        <div id = 'hint'>This is a QRCode Page!</div>
        <div id = 'qrcode'></div>
        <button v-on:click = 'create'>QRCode</button>
    </div>
</template>
<script>
    import QRCode from 'davidshimjs-qrcodejs'
    export default{
        methods:{
            create:function(){
                new QRCode(document.getElementById("qrcode"), "http://www.baidu.com");
            }
        }
    }
</script>
<style>
    .hint{background-color:#ffffff;height:40px}
</style>