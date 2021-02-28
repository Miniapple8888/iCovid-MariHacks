<template>
<div>
    <div data-cdc-widget='healthBot' data-cdc-theme='theme1' class='cdc-widget-color-white'  data-cdc-language='en-us'></div>
</div>
</template>
<script>
export default {
    head: {
        title: {
        inner: 'Statistics',
        separator: ' - ',
        complement: 'iCovid',
        },
    },
    mounted() {
        const plugin = document.createElement("script");
        plugin.setAttribute(
        "src",
        "https://t.cdc.gov/1M1B"
        );
        plugin.async = true;
        document.head.appendChild(plugin);
    },
}
</script>
<style scoped>
div {
    margin-top: 10px;
}
</style>