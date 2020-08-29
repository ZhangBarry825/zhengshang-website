<template>
    <div class="news-page">
        <Header :menu="3"></Header>
        <Background :type-index="7" :show-scroll="false"></Background>
        <div class="page-box">
            <div class="center">
                <div class="top-items">
                    <div class="top-item" v-for="item in 3" :style="'background-image: url('+require('../../assets/images/nn1.png')+')'" >
                        <div class="gray">
                            <div class="line1">如果我们重新定义社区营销</div>
                            <div class="line2">2020-05-08</div>
                        </div>
                    </div>
                </div>
                <div class="list-items">
                    <div class="item" v-for="item in 5" @click="$router.push('/news-detail')">
                        <div class="left" :style="'background-image: url('+require('../../assets/images/nn1.png')+')'"></div>
                        <div class="right">
                            <div class="line1">2C互联网还有机会么？</div>
                            <div class="line2">「资本寒冬」四个字从 18 年开始贯穿到了今天，2020 年初又因为疫情的影响，互联网市场再次到达了冰点。艰难时刻「创业公司已无大机会」的论调也越来越多，可是各方声音更多的都是在描述一种感受，一种从业者的集体焦虑。无论是创业者还是投资人在当下或许都...</div>
                            <div class="line3">2020-05-22</div>
                        </div>
                    </div>
                </div>


                <div class="pagination">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import Background from "../../components/Background";
    export default {
        name: "News",
        components: {
            Header,
            Footer,
            Background,
        },
    }
</script>

<style scoped lang="scss">
    .news-page{
        @include page-style;
        background-color: #f4f5f8;

        .page-box{
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 80px 0;
            .center{
                width: 1300px;
                display: flex;
                flex-direction: column;
                .top-items{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    .top-item{
                        cursor: pointer;
                        width: 381px;
                        height: 258px;
                        @include back-img-center;
                        display: flex;
                        align-items: flex-end;
                        .gray{
                            width: 100%;
                            height: 88px;
                            background: rgba(16, 21, 51, .5);
                            padding: 15px 20px;
                            box-sizing: border-box;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            .line1{
                                font-size: 24px;
                                font-weight: 400;
                                color: #FFFFFF;
                                @include line-hidden(1);
                            }
                            .line2{
                                font-size: 14px;
                                font-weight: 400;
                                color: #FFFFFF;
                                opacity: 0.6;
                            }
                        }
                    }
                    .top-item:hover{
                        box-shadow: 0px 3px 62px 0px rgba(106, 122, 156, 0.3);
                    }
                }
                .list-items{
                    margin-top: 60px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    .item{
                        margin-bottom: 22px;
                        cursor: pointer;
                        width: 1298px;
                        height: 222px;
                        background: #FFFFFF;
                        display: flex;
                        flex-direction: row;
                        padding: 20px;
                        box-sizing: border-box;
                        .left{
                            width: 213px;
                            height: 182px;
                            @include back-img-center;
                        }
                        .right{
                            width: calc(100% - 213px);
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            box-sizing: border-box;
                            padding-top: 10px;
                            padding-left: 27px;

                            .line1{
                                font-size: 24px;
                                font-weight: 500;
                                color: #333333;
                            }
                            .line2{
                                font-size: 16px;
                                font-weight: 400;
                                color: #333333;
                                line-height: 26px;
                                @include line-hidden(3);
                            }
                            .line3{
                                font-size: 16px;
                                font-weight: 500;
                                color: #9EAAC3;
                            }
                        }
                    }
                    .item:hover{
                        box-shadow: 0px 3px 62px 0px rgba(106, 122, 156, 0.3);
                        .line1{
                            font-size: 24px;
                            font-weight: 500;
                            color: rgba(0, 47, 247, 1);
                        }
                    }
                }

                .pagination{
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    padding: 50px 0 0 0;
                    /deep/ .active{
                        background-color: #014CE5;
                    }
                }
            }
        }
    }

</style>




















