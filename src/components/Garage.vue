<template>
    <div class="wrapper">

        <div class="page_bg hd"></div>

        <div class="garage_scroll ui">
            <grgbox></grgbox>
        </div>

    </div>
</template>

<script>
    import GrgBox from './GrgBox.vue'
    export default{
        components: {
            'grgbox': GrgBox
        }
    }
</script>

<style src="../assets/css/style_main.css"></style>