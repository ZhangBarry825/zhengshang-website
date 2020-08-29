<template>
    <div class="case-detail-page">
        <Header :menu="2" :need-fixed="true"></Header>
        <div class="content">
            <div class="center">
                <div class="content-left">
                    <img v-for="item in 5" src="../../assets/images/j1.png" alt="">
                </div>
                <div class="content-right">
                    <div class="item-box" >
                        <div class="img" :style="'background-image: url('+require('../../assets/images/al1.png')+')'"></div>
                        <div class="bottom">
                            <div class="line1">线上健身</div>
                            <div class="line2">线上健身，重构健身新模式</div>
                        </div>
                    </div>
                    <div class="item-box" >
                        <div class="img" :style="'background-image: url('+require('../../assets/images/al1.png')+')'"></div>
                        <div class="bottom">
                            <div class="line1">线上健身</div>
                            <div class="line2">线上健身，重构健身新模式</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    export default {
        name: "CaseDetail",
        components: {
            Header,
            Footer,
        },
    }
</script>

<style scoped lang="scss">
    .case-detail-page{
        @include page-style;
        background-color: #f4f5f9;
        padding-top: 100px;
        .content{
            margin: 80px 0;
            width: 100%;
            display: flex;
            justify-content: center;
            .center{
                width: 1300px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .content-left{
                    width:858px ;
                    img{
                        width: 100%;
                    }
                }
                .content-right{
                    width: 381px;
                    display: flex;
                    flex-direction: column;

                    .item-box{
                        cursor: pointer;
                        width: 381px;
                        height: 391px;
                        background: #FFFFFF;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 60px;
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
            }
        }
    }
</style>