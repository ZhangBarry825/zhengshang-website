<template>
    <div class="home">
        <Header :menu="0"></Header>
        <div class="home-back">
            <div class="context">
                <div class="line1">专业的互联网方案解决专家</div>
                <div class="line2">
                    以互联网定制开发为主营业务，专注微信服务号、企业号、微信公众平台开发和微信小程序等的微信开发服务。凭借专业的研发团队，在微信商城、会员、分销、营销互动以及商业地产、酒店、医疗美容、汽车和零售等行业具有丰富的开发经验，全方位满足企业个性化需求
                </div>
                <div class="line3">
                    <div class="text"></div>
                    <img src="../assets/images/more-white.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue'

    export default {
        name: 'Home',
        components: {
            Header,
        },
        data() {
            return {

            }
        },

        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    .home {
        @include page-style;

        .home-back {
            background-image: url("../assets/images/home-back.gif");
            @include back-img-center;
            width: 100%;
            min-width: 1300px;
            height: 1080px;
        }

        .context {
            position: relative;
            top: 250px;

            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .line1 {
                font-size: 70px;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
            }

            .line2 {
                margin-top: 49px;
                margin-bottom: 115px;
                font-size: 14px;
                color: rgba(255, 255, 255, 1);
                max-width: 600px;
                line-height: 24px;
                text-align: center;
                @include line-hidden(3);
            }

            .line3 {
                width: 164px;
                height: 62px;
                background: rgba(254, 130, 56, 1);
                border-radius: 31px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                img {
                    width: 24px;
                    height: 9px;
                }
            }
        }
    }
</style>
