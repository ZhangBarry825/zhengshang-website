<template>
    <div class="gov-page">
        <Header :menu="1"></Header>
        <div class="swiper">
            <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in textList">
                    <div class="context" :style="'background-image: url('+require('../../assets/images/gb.png')+')'">
                        <div class="context-center">
                            <div class="line1">{{item.title}}</div>
                            <div class="line2">{{item.description}}</div>
                            <div class="line3">立即咨询</div>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <!--                <div class="swiper-button-prev" slot="button-prev"></div>-->
                <!--                <div class="swiper-button-next" slot="button-next"></div>-->
            </swiper>
        </div>
        <div class="service-area">
            <div class="center">
                <div class="center-title">服务领域</div>
                <div class="items">
                    <div class="item" v-for="item in areaList">
                        <div class="line1">
                            <img :src="item.url" alt="">
                        </div>
                        <div class="line2">{{item.title}}</div>
                        <div class="line3">{{item.description}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="solve-methods" :style="'background-image: url('+require('../../assets/images/jjfa.png')+')'">
            <div class="center">
                <div class="center-title">行业解决方案</div>
                <div class="center-menus">
                    <van-tabs v-model="activeIndex" @change="menuChange">
                        <van-tab :title="item.title" v-for="item in tabList"></van-tab>
                    </van-tabs>
                </div>
                <div class="items">
                    <div class="item" v-for="item in 4">
                        <div class="line1">
                            <img class="blue" src="../../assets/images/rr011.png" alt="">
                            <img class="white" src="../../assets/images/rr01.png" alt="">
                            <div class="text">城市操作系统</div>
                        </div>
                        <div class="line2">以城市智慧化管理和运营为核心，感知城市全域数据、融合多源异构数据，构建智慧城市的应用体系</div>
                        <div class="line3">
                            <div class="text">了解更多</div>
                            <img class="blue" src="../../assets/images/r-b.png" alt="">
                            <img class="white" src="../../assets/images/r-w.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../../components/Header";
    import Background from "../../components/Background";
    import Footer from "../../components/Footer";

    export default {
        name: "GovService",
        components: {
            Header: Header,
            Background: Background,
            Footer
        },
        data() {
            return {
                textList: [
                    {
                        title: '互联网+政务服务平台',
                        description: '以互联网定制开发为主营业务，专注微信服务号、企业号、微信公众平台开发和微信小程序等的微信开发服务。凭借专业的研发团队，在微信商城、会员、分销、营销互动以及商业地产、酒店、医疗美容、汽车和零售等行业具有丰富的开发经验，全方位满足企业个性化需求',
                        img: require('../../assets/images/gb.png')
                    },
                    {
                        title: '专业的互联网方案解决专家',
                        description: '以互联网定制开发为主营业务，专注微信服务号、企业号、微信公众平台开发和微信小程序等的微信开发服务。凭借专业的研发团队，在微信商城、会员、分销、营销互动以及商业地产、酒店、医疗美容、汽车和零售等行业具有丰富的开发经验，全方位满足企业个性化需求',
                        img: require('../../assets/images/gb.png')
                    },
                    {
                        title: '互联网+政务服务平台',
                        description: '以互联网定制开发为主营业务，专注微信服务号、企业号、微信公众平台开发和微信小程序等的微信开发服务。凭借专业的研发团队，在微信商城、会员、分销、营销互动以及商业地产、酒店、医疗美容、汽车和零售等行业具有丰富的开发经验，全方位满足企业个性化需求',
                        img: require('../../assets/images/gb.png')
                    }
                ],
                areaList: [
                    {
                        title: '智慧城市建设',
                        description: '做好智慧城市顶层设计，推进城市治理现代化，分布建设万物互联的全感知全连接的基础软硬件设施及数据连接管道',
                        url: require('../../assets/images/ly1.png')
                    }, {
                        title: '大数据',
                        description: '基于Hadoop/NoSQL 等技术，支持海量数据计算与存储，满足智慧城市大数据量处理需求，在感知监察、智慧公安、智能交通等领域建立了成功案例',
                        url: require('../../assets/images/ly2.png')
                    }, {
                        title: '数字化',
                        description: '以元数据智能驱动为基座，形成数据管控平台，面向各业务领域提供大数据建设、管理及数据服务的能力，构建全链路一站式的数据资产管控中心',
                        url: require('../../assets/images/ly3.png')
                    }, {
                        title: '信息安全',
                        description: '高标准的运维管控体系，为客户提供合规、可用、安全、可信的云计算服务',
                        url: require('../../assets/images/ly4.png')
                    }],
                swiperOption: {
                    loop: true,
                    pagination: '.swiper-pagination',
                    direction: 'horizontal',
                    // observer: true,
                    // observeParents: true,
                },
                activeIndex: 0,
                tabList: [
                    {
                        title: 'APP开发'
                    },
                    {
                        title: '小程序开发'
                    },
                    {
                        title: '网站建设'
                    },
                    {
                        title: '系统集成'
                    },
                    {
                        title: '物联网'
                    },
                    {
                        title: '政务云'
                    },
                ]
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {
            menuChange(name, title) {
                // console.log(name,title)
            }
        },
        mounted() {
            this.swiper.slideTo(1, 1000, false)
        }
    }
</script>

<style scoped lang="scss">
    .gov-page {
        @include page-style;
        background-color: #f7f8fa;

        .swiper {
            width: 100%;
            min-width: 1300px;
            height: 780px;

            .context {
                height: 780px;
                width: 100%;
                @include back-img-center;
                display: flex;
                justify-content: center;

                .context-center {
                    width: 1300px;
                    height: 780px;
                    display: flex;
                    flex-direction: column;
                    margin-top: 217px;

                    .line1 {
                        font-size: 50px;
                        font-weight: bold;
                        color: #FFFFFF;
                    }

                    .line2 {
                        width: 620px;
                        font-size: 18px;
                        font-weight: 400;
                        color: #FFFFFF;
                        margin-top: 80px;
                        margin-bottom: 90px;
                        line-height: 32px;
                    }

                    .line3 {
                        cursor: pointer;
                        width: 164px;
                        height: 62px;
                        border: 1px solid #FFFFFF;
                        border-radius: 32px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        font-size: 20px;
                        font-weight: 400;
                        color: #FFFFFF;
                    }
                }
            }

            /deep/ .swiper-pagination {
                bottom: 40px;

                .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    border: 1px solid #FFFFFF;
                    border-radius: 50%;
                    margin: 0 15px;
                }

                .swiper-pagination-bullet-active {
                    width: 12px;
                    height: 12px;
                    background: #FFFFFF;
                    border-radius: 50%;
                }
            }

        }

        .service-area {
            width: 100%;
            display: flex;
            justify-content: center;

            .center {
                width: 1300px;
                padding-bottom: 100px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;

                .center-title {
                    padding: 80px 0;
                    font-size: 34px;
                    font-weight: 500;
                    width: 100%;
                    text-align: center;
                    color: #343434;
                }

                .items {
                    width: 1300px;
                    display: flex;
                    justify-content: space-between;

                    .item {
                        width: 310px;
                        height: 392px;
                        background: #FFFFFF;
                        display: flex;
                        flex-direction: column;
                        padding: 50px 30px;
                        box-sizing: border-box;

                        .line1 {

                        }

                        .line2 {
                            font-size: 24px;
                            font-weight: 500;
                            color: #343434;
                            margin-top: 51px;
                            margin-bottom: 41px;
                        }

                        .line3 {
                            font-size: 16px;
                            font-weight: 400;
                            color: #9EAAC4;
                            @include line-hidden(5)
                        }
                    }
                }
            }
        }

        .solve-methods {
            width: 100%;
            display: flex;
            justify-content: center;
            @include back-img-center;

            .center {
                width: 1300px;
                padding-bottom: 100px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;

                .center-title {
                    padding: 80px 0;
                    font-size: 34px;
                    font-weight: 500;
                    width: 100%;
                    text-align: center;
                    color: #FFFFFF;
                }

                .center-menus {
                    width: 100%;

                    /deep/ .van-tabs {
                        .van-tabs__wrap {
                            border-bottom: 1px solid #D6DCE9;
                            height: 55px;

                            .van-tabs__nav {
                                background-color: rgba(0, 0, 0, 0) !important;
                            }

                            .van-tab__text {
                                font-size: 24px;
                                font-weight: 400;
                                overflow: visible;
                            }

                            .van-tab {
                                margin-bottom: 30px;
                                color: #FFFFFF;
                            }

                            .van-tab--active {
                                color: #FFFFFF;
                            }

                            .van-tabs__line {
                                background-color: #FFFFFF;
                            }
                        }
                    }
                }

                .items {
                    width: 1300px;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    padding-top: 60px;
                    box-sizing: border-box;

                    .item:nth-child(1), .item:nth-child(2), .item:nth-child(3) {
                        margin-bottom: 80px;
                    }

                    .item:hover {
                        background-color: #004CE5;

                        .line1 {
                            img {
                                margin-right: 15px;
                            }

                            .text {
                                font-size: 20px;
                                font-weight: 400;
                                color: #FFFFFF;
                            }

                            .blue {
                                display: none;
                            }

                            .white {
                                display: block;
                            }
                        }

                        .line2 {
                            color: #FFFFFF;
                        }

                        .line3 {
                            .text {
                                color: #FFFFFF;
                            }

                            .blue {
                                display: none;
                            }

                            .white {
                                display: block;
                            }
                        }
                    }

                    .item {
                        width: 370px;
                        height: 278px;
                        background: #FFFFFF;
                        padding: 40px 30px;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        .line1 {
                            width: 100%;
                            display: flex;
                            align-items: center;

                            img {
                                margin-right: 15px;
                            }

                            .text {
                                font-size: 20px;
                                font-weight: 400;
                                color: #343434;
                            }

                            .blue {
                                display: block;
                            }

                            .white {
                                display: none;
                            }
                        }

                        .line2 {
                            font-size: 16px;
                            font-weight: 400;
                            color: #9EAAC4;
                            @include line-hidden(3);
                        }

                        .line3 {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            cursor: pointer;

                            .text {
                                font-size: 14px;
                                font-weight: 400;
                                color: #024CE5;
                            }

                            img {
                                margin-left: 9px;
                            }

                            .blue {
                                display: block;
                            }

                            .white {
                                display: none;
                            }
                        }
                    }

                    .item:nth-child(2),.item:nth-child(5){
                        margin: 0 calc(50% - 555px);
                    }
                }
            }
        }
    }

</style>

















