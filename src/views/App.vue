<template>
    <div class="app-page">
        <Header ></Header>
        <Background :type-index="4"></Background>
        <div class="business">
            <div class="center">
                <div class="title">可开发行业</div>
                <div class="content">
                    <div class="left">
                        <img src="../assets/images/k1.png" alt="">
                    </div>
                    <div class="middle">
                        <img src="../assets/images/l.png" alt="">
                    </div>
                    <div class="right">
                        <div class="item">
                            <img class="visible" src="../assets/images/z1.png" alt="">
                            <img class="hidden" src="../assets/images/zz1.png" alt="">
                            <div class="text">社交</div>
                        </div>
                        <div class="item">
                            <img class="visible" src="../assets/images/z2.png" alt="">
                            <img class="hidden" src="../assets/images/zz2.png" alt="">
                            <div class="text">教育</div>
                        </div>
                        <div class="item">
                            <img class="visible" src="../assets/images/z3.png" alt="">
                            <img class="hidden" src="../assets/images/zz3.png" alt="">
                            <div class="text">直播</div>
                        </div>
                        <div class="item">
                            <img class="visible" src="../assets/images/z4.png" alt="">
                            <img class="hidden" src="../assets/images/zz4.png" alt="">
                            <div class="text">医疗</div>
                        </div>
                        <div class="item">
                            <img class="visible" src="../assets/images/z5.png" alt="">
                            <img class="hidden" src="../assets/images/zz5.png" alt="">
                            <div class="text">团购</div>
                        </div>
                        <div class="item">
                            <img class="visible" src="../assets/images/z6.png" alt="">
                            <img class="hidden" src="../assets/images/zz6.png" alt="">
                            <div class="text">外卖</div>
                        </div>
                        <div class="item">
                            <img class="visible" src="../assets/images/z7.png" alt="">
                            <img class="hidden" src="../assets/images/zz7.png" alt="">
                            <div class="text">跑腿</div>
                        </div>
                        <div class="item">
                            <img class="visible" src="../assets/images/z8.png" alt="">
                            <img class="hidden" src="../assets/images/zz8.png" alt="">
                            <div class="text">健身</div>
                        </div>
                        <div class="item">
                            <img class="visible" src="../assets/images/z9.png" alt="">
                            <img class="hidden" src="../assets/images/zz9.png" alt="">
                            <div class="text">交友</div>
                        </div>
                        <div class="item">
                            <img class="visible" src="../assets/images/z10.png" alt="">
                            <img class="hidden" src="../assets/images/zz10.png" alt="">
                            <div class="text">房产</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Background from "../components/Background";

    export default {
        name: "App",
        components: {
            Header: Header,
            Background: Background,
        },
    }
</script>

<style scoped lang="scss">
    .app-page{
        @include page-style;
        .business{
            width: 100%;
            height: 1000px;
            background-color: #ffffff;
            .center{
                width: 1300px;
                margin: 0 auto;
                .title{
                    width: 100%;
                    text-align: center;
                    font-size:34px;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    padding-top: 80px;
                    padding-bottom: 50px;
                }
                .content{
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    .left{
                        width:840px;
                        height:840px;
                        background-image: url("../assets/images/circle0.png");
                        img{
                            
                        }
                    }
                    .middle{
                        height: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }
                    .right{
                        width: 350px;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        .item:nth-child(2n){
                            margin-left: 130px;
                        }
                        .item:nth-child(9),.item:nth-child(10){
                            margin-bottom: 0;
                        }
                        .item:hover{
                            .text{
                                font-size:24px;
                                font-weight:400;
                                color:#004CE5;
                                margin-left: 10px;
                            }
                            .hidden{
                                display: block;
                            }
                            .visible{
                                display: none;
                            }
                        }
                        .item{
                            cursor: pointer;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            margin-bottom: 68px;
                            .text{
                                font-size:24px;
                                font-weight:400;
                                color:rgba(51,51,51,1);
                                margin-left: 10px;
                            }
                            .hidden{
                                display: none;
                            }
                        }
                        
                    }
                }
            }
        }
    }

</style>