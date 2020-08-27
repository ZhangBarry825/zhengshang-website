<template>
    <div class="home">
        <Header :menu="0"></Header>
        <div class="home-back">
            <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in textList">
                    <div class="context">
                        <div class="line1">{{item.title}}</div>
                        <div class="line2">
                            {{item.description}}
                        </div>
                        <div class="line3">
                            <div class="text"></div>
                            <img src="../assets/images/more-white.png" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
<!--                <div class="swiper-button-prev" slot="button-prev"></div>-->
<!--                <div class="swiper-button-next" slot="button-next"></div>-->
            </swiper>

        </div>
        <div class="our-service">
            <div class="float-back" :style="'min-width:'+ (1300+(screenWidth-1300)/2)+'px'"></div>
            <div class="center">
                <div class="center-title">我们的服务</div>
                <div class="items">
                    <div class="item" v-for="item in serviceList">
                        <div class="img" :style="'background-image: url('+item.img+');'"></div>
                        <div class="item-title">{{item.title}}</div>
                        <div class="item-description">
                            {{item.description}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="solve-methods">
            <div class="center">
                <div class="center-title">行业解决方案</div>
                <div class="items">

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
                textList: [
                    {
                        title: '专业的互联网方案解决专家',
                        description: '以互联网定制开发为主营业务，专注微信服务号、企业号、微信公众平台开发和微信小程序等的微信开发服务。凭借专业的研发团队，在微信商城、会员、分销、营销互动以及商业地产、酒店、医疗美容、汽车和零售等行业具有丰富的开发经验，全方位满足企业个性化需求'
                    },
                    {
                        title: '专业的互联网方案解决专家',
                        description: '以互联网定制开发为主营业务，专注微信服务号、企业号、微信公众平台开发和微信小程序等的微信开发服务。凭借专业的研发团队，在微信商城、会员、分销、营销互动以及商业地产、酒店、医疗美容、汽车和零售等行业具有丰富的开发经验，全方位满足企业个性化需求'
                    },
                    {
                        title: '专业的互联网方案解决专家',
                        description: '以互联网定制开发为主营业务，专注微信服务号、企业号、微信公众平台开发和微信小程序等的微信开发服务。凭借专业的研发团队，在微信商城、会员、分销、营销互动以及商业地产、酒店、医疗美容、汽车和零售等行业具有丰富的开发经验，全方位满足企业个性化需求'
                    }
                ],
                serviceList:[
                    {
                        img:require('../assets/images/hs1.png'),
                        title:'APP开发',
                        description:'助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现'
                    },
                    {
                        img:require('../assets/images/hs2.png'),
                        title:'小程序开发',
                        description:'助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现'
                    },
                    {
                        img:require('../assets/images/hs3.png'),
                        title:'网站建设',
                        description:'助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现'
                    },
                    {
                        img:require('../assets/images/hs4.png'),
                        title:'系统集成',
                        description:'助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现'
                    },
                    {
                        img:require('../assets/images/hs5.png'),
                        title:'物联网',
                        description:'助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现'
                    },
                    {
                        img:require('../assets/images/hs6.png'),
                        title:'政务云',
                        description:'助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现流量高效变现助力商家实现'
                    }
                ],
                screenWidth: '',
                screenHeight: '',
                swiperOption: {
                    loop : true,
                    pagination:'.swiper-pagination',
                    direction: 'horizontal',
                    // observer: true,
                    // observeParents: true,
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            this.swiper.slideTo(1, 1000, false)

            this.screenWidth = document.body.clientWidth;
            this.screenHeight = document.body.clientHeight;
            window.onresize = () => {
                return (() => {
                    this.screenWidth = document.body.clientWidth;
                    this.screenHeight = document.body.clientHeight;
                })();
            };

        }
    }
</script>

<style lang="scss" scoped>
    .home {
        @include page-style;
        height: 100%;
        background-color: #f4f5f8;

        .home-back {
            background-image: url("../assets/images/home-back.gif");
            @include back-img-center;
            width: 100%;
            min-width: 1300px;
            height: 1080px;

            .swiper-box {
                position: relative;
                top: 250px;
                .context {


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
                .swiper-pagination{
                    z-index:999 ;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    position: absolute;
                    left: unset !important;
                    right: 100px !important;
                    width: unset !important;
                    top: 50px;
                    bottom: unset;
                    /deep/ .swiper-pagination-bullet{
                        margin: 15px 0 !important;
                        width: 10px;
                        height: 10px;
                        background: #e3e3e3;
                    }
                    /deep/ .swiper-pagination-bullet-active{
                        background: #ffffff;
                        width: 12px;
                        height: 12px;
                    }
                }
            }
        }

        .our-service{
            height: 910px;
            width: 100%;
            margin-top: -130px;
            display: flex;
            justify-content: center;
            position: relative;
            .float-back{
                position: absolute;
                left: 0;
                height: 100%;
                width: 90%;
                background-color: #ffffff;
            }
            .center{
                z-index: 1;
                width: 1300px;
                height:100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 80px 0;
                box-sizing: border-box;
                .center-title{
                    font-size:34px;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                }
                .items{
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 10px;
                    justify-content: space-around;
                    .item{
                        width: 345px;
                        height: 367px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 40px;
                        box-sizing: border-box;
                        border: 1px solid rgba(0,0,0,0);
                        .img{
                            width: 126px;
                            height: 142px;

                            @include back-img-center;
                        }
                        .item-title{
                            margin: 20px 0;
                            font-size:20px;
                            font-weight:400;
                            color:rgba(51,51,51,1);
                        }
                        .item-description{
                            font-size:16px;
                            font-weight:400;
                            color:rgba(158,170,195,1);
                            line-height: 1.5;
                            @include line-hidden(3)
                        }
                    }
                    .item:hover{
                        border: 1px solid #245af2;
                    }
                }
            }
        }

        .solve-methods{
            width: 100%;
            display: flex;
            justify-content: center;
            .center{
                width: 1300px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 50px 0;
                box-sizing: border-box;
                .center-title{
                    font-size:34px;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                }
            }
        }
    }
</style>
