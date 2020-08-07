<template>
    <div class="home">
        <Header></Header>
        <div class="home-back">

        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue'

    export default {
        name: 'Home',
        components: {
            Header
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        .home-back{
            background-image: url("../assets/images/home-back.png");
            @include back-img-center;
            width: 100%;
            min-width: 1300px;
            height: 1200px;
        }
    }
</style>
