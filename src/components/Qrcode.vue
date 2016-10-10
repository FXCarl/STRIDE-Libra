<template>
    <img v-bind:src="imgeSrc">
</template>

<script>
    import Qrious from 'qrious'

    export default {
        props: ['data'],
        data() {
            return{
                imgeSrc: '',
                qr: new Qrious()
            }
        },
        watch: {
            data: function(newData){
                this.qr.value = newData
                this.imgeSrc = this.qr.toDataURL()
            }
        }
    }
</script>