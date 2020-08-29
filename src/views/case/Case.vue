<template>
    <div class="page">
       <Header :menu="2"></Header>
        <Background :type-index="6"></Background>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import Background from "../../components/Background";
    export default {
        name: "Case",
        components: {
            Header,
            Footer,
            Background
        },
    }
</script>

<style scoped>

</style>