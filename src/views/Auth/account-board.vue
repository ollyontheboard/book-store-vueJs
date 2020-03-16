<template>
    <div class="account-dashboard">
        <top-header></top-header>



        <page-footer></page-footer>
    </div>
</template>

<script lang="js">
    const pageFooter = () => import('@/components/footer.vue');
    const topHeader = () => import('@/components/top-header.vue');

    export default {
        name: "account-board",
        components: {pageFooter, topHeader}
    }
</script>

<style scoped>

</style>
