<template>
    <div class="case-page">
        <Header :menu="2"></Header>
        <Background :type-index="6" :show-scroll="false"></Background>
        <div class="menu-list">
            <div class="center">
                <van-tabs v-model="activeIndex" @change="menuChange">
                    <van-tab :title="item.title" v-for="item in tabList"></van-tab>
                </van-tabs>
            </div>
        </div>
        <div class="items-box">
            <div class="center">
                <van-grid :gutter="0" column-num="3" square :border="false">
                    <van-grid-item v-for="value in 9" @click="$router.push('/case-detail')">
                        <div class="item-box">
                            <div class="img" :style="'background-image: url('+require('../../assets/images/al1.png')+')'"></div>
                            <div class="bottom">
                                <div class="line1">线上健身</div>
                                <div class="line2">线上健身，重构健身新模式</div>
                            </div>
                        </div>
                    </van-grid-item>
                </van-grid>
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
        name: "Case",
        components: {
            Header,
            Footer,
            Background,
        },
        data() {
            return {
                activeIndex: 0,
                tabList:[
                    {
                        title:'APP开发'
                    },
                    {
                        title:'小程序开发'
                    },
                    {
                        title:'网站建设'
                    },
                    {
                        title:'系统集成'
                    },
                    {
                        title:'物联网'
                    },
                    {
                        title:'政务云'
                    },
                ]
            }
        },
        methods: {
            menuChange(name, title) {
                // console.log(name,title)
            }
        }
    }
</script>

<style scoped lang="scss">
    .case-page {
        @include page-style;
        background-color: #f4f5f8;

        .menu-list {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 60px 0;
            .center {
                width: 1300px;
                /deep/ .van-tabs{
                    .van-tabs__wrap{
                        border-bottom: 1px solid #D6DCE9;
                        height: 55px;
                        .van-tabs__nav{
                            background-color: #f4f5f8 !important;
                        }
                        .van-tab__text{
                            font-size: 24px;
                            font-weight: 400;
                            overflow: visible;
                        }
                        .van-tab{
                            margin-bottom: 30px;
                        }
                        .van-tab--active{
                            color: #014CE5;
                        }
                        .van-tabs__line{
                            background-color: #014CE5;
                        }
                    }
                }

            }
        }
        .items-box{
            width: 100%;
            display: flex;
            justify-content: center;
            .center{
                width: 1300px;
               /deep/ .van-grid-item__content{
                    background-color: #f4f5f8;
                   padding: 0;
                   .item-box{
                       cursor: pointer;
                       width: 381px;
                       height: 391px;
                       background: #FFFFFF;
                       position: absolute;
                       display: flex;
                       flex-direction: column;
                       align-items: center;
                       .img{
                           width: 381px;
                           height: 258px;
                           @include back-img-center;
                       }
                       .bottom{
                           width: 100%;
                           height: calc(100% - 258px);
                           display: flex;
                           flex-direction: column;
                           justify-content: center;
                           align-items: center;
                           .line1{
                               font-size: 24px;
                               font-weight: 400;
                               color: #333333;
                           }
                           .line2{
                               font-size: 16px;
                               margin-top: 20px;
                               font-weight: 400;
                               color: #9EAAC3;
                           }
                       }
                   }
                   .item-box:hover{
                       box-shadow: 0px 3px 30px 0px rgba(106, 122, 156, 0.3);
                   }
                }
                .pagination{
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    padding: 50px 0 80px 0;
                   /deep/ .active{
                        background-color: #014CE5;
                    }
                }
            }
        }
    }

</style>