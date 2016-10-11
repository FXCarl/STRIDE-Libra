<template>
    <img v-bind:src="imgeSrc">
</template>

<script>
    import Qrious from 'qrious'

    export default {
        props: ['info'],
        data() {
            return{
                qr: new Qrious({value: this.info})
            }
        },
        computed: {
            imgeSrc: function(){
                this.qr.value = this.info
                return this.qr.toDataURL()
            }
        }
    }
</script>