<template>
    <div class="GovCloud-page">
        <Header ></Header>
        <Background :type-index="1"></Background>
        <div class="center">
            <div class="ability" :style="'width:'+(1300+(screenWidth-1300)/2+(screenWidth-1300)*3/10)+'px;left:-'+(screenWidth-1300)*3/10+'px'">
                <div class="ability-title">
                    可开发行业
                </div>
                <div class="list-line1">
                    <div class="item" @mouseenter="itemHover(0)" @mouseleave="itemHover(-1)">
                        <div class="item-line1">
                            <img :src="activeIndex==0?require('../assets/images/kkh0.png'):require('../assets/images/kk0.png')" alt="">
                        </div>
                        <div class="item-line2">
                            移动社交
                        </div>
                        <div class="item-line3">
                            <a v-show="activeIndex==0">了解更多</a>
                            <img v-show="activeIndex==0" src="../assets/images/more0.png" alt="">
                        </div>
                    </div>
                    <div class="item" @mouseenter="itemHover(1)" @mouseleave="itemHover(-1)">
                        <div class="item-line1">
                            <img :src="activeIndex==1?require('../assets/images/kkh1.png'):require('../assets/images/kk1.png')" alt="">
                        </div>
                        <div class="item-line2">
                            视频直播
                        </div>
                        <div class="item-line3">
                            <a v-show="activeIndex==1">了解更多</a>
                            <img v-show="activeIndex==1" src="../assets/images/more0.png" alt="">
                        </div>
                    </div>
                    <div class="item" @mouseenter="itemHover(2)" @mouseleave="itemHover(-1)">
                        <div class="item-line1">
                            <img :src="activeIndex==2?require('../assets/images/kkh2.png'):require('../assets/images/kk2.png')" alt="">
                        </div>
                        <div class="item-line2">
                            线上教育
                        </div>
                        <div class="item-line3">
                            <a v-show="activeIndex==2">了解更多</a>
                            <img v-show="activeIndex==2" src="../assets/images/more0.png" alt="">
                        </div>
                    </div>
                    <div class="item" @mouseenter="itemHover(3)" @mouseleave="itemHover(-1)">
                        <div class="item-line1">
                            <img :src="activeIndex==3?require('../assets/images/kkh3.png'):require('../assets/images/kk3.png')" alt="">
                        </div>
                        <div class="item-line2">
                            智慧医疗
                        </div>
                        <div class="item-line3">
                            <a v-show="activeIndex==3">了解更多</a>
                            <img v-show="activeIndex==3" src="../assets/images/more0.png" alt="">
                        </div>
                    </div>
                    <div class="item" @mouseenter="itemHover(4)" @mouseleave="itemHover(-1)">
                        <div class="item-line1">
                            <img :src="activeIndex==4?require('../assets/images/kkh4.png'):require('../assets/images/kk4.png')" alt="">
                        </div>
                        <div class="item-line2">
                            智慧健身
                        </div>
                        <div class="item-line3">
                            <a v-show="activeIndex==4">了解更多</a>
                            <img v-show="activeIndex==4" src="../assets/images/more0.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="list-line2">
                    <div class="item" @mouseenter="itemHover(5)" @mouseleave="itemHover(-1)">
                        <div class="item-line1">
                            <img :src="activeIndex==5?require('../assets/images/kkh5.png'):require('../assets/images/kk5.png')" alt="">
                        </div>
                        <div class="item-line2">
                            移动商城
                        </div>
                        <div class="item-line3">
                            <a v-show="activeIndex==5">了解更多</a>
                            <img v-show="activeIndex==5" src="../assets/images/more0.png" alt="">
                        </div>
                    </div>
                    <div class="item" @mouseenter="itemHover(6)" @mouseleave="itemHover(-1)">
                        <div class="item-line1">
                            <img :src="activeIndex==6?require('../assets/images/kkh6.png'):require('../assets/images/kk6.png')" alt="">
                        </div>
                        <div class="item-line2">
                            智慧外卖
                        </div>
                        <div class="item-line3">
                            <a v-show="activeIndex==6">了解更多</a>
                            <img v-show="activeIndex==6" src="../assets/images/more0.png" alt="">
                        </div>
                    </div>
                    <div class="item" @mouseenter="itemHover(7)" @mouseleave="itemHover(-1)">
                        <div class="item-line1">
                            <img :src="activeIndex==7?require('../assets/images/kkh7.png'):require('../assets/images/kk7.png')" alt="">
                        </div>
                        <div class="item-line2">
                            跑腿外送
                        </div>
                        <div class="item-line3">
                            <a v-show="activeIndex==7">了解更多</a>
                            <img v-show="activeIndex==7" src="../assets/images/more0.png" alt="">
                        </div>
                    </div>
                    <div class="item" @mouseenter="itemHover(8)" @mouseleave="itemHover(-1)">
                        <div class="item-line1">
                            <img :src="activeIndex==8?require('../assets/images/kkh8.png'):require('../assets/images/kk8.png')" alt="">
                        </div>
                        <div class="item-line2">
                            移动交友
                        </div>
                        <div class="item-line3">
                            <a v-show="activeIndex==8">了解更多</a>
                            <img v-show="activeIndex==8" src="../assets/images/more0.png" alt="">
                        </div>
                    </div>
                    <div class="item" @mouseenter="itemHover(9)" @mouseleave="itemHover(-1)">
                        <div class="item-line1">
                            <img :src="activeIndex==9?require('../assets/images/kkh9.png'):require('../assets/images/kk9.png')" alt="">
                        </div>
                        <div class="item-line2">
                            其他行业
                        </div>
                        <div class="item-line3">
                            <a v-show="activeIndex==9">了解更多</a>
                            <img v-show="activeIndex==9" src="../assets/images/more0.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="white-box"></div>
        <div class="gray-box"></div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Background from "../components/Background";

    export default {
        name: "GovCloud",
        components: {
            Header: Header,
            Background: Background,
        },
        data() {
            return {
                screenWidth: '',
                screenHeight: '',
                activeIndex: -1,
            }
        },
        methods: {
            itemHover(index) {
                this.activeIndex = index
            }
        },
        mounted() {
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

<style scoped lang="scss">
    .GovCloud-page{
        @include page-style;
        .center{
            margin: 0 auto;
            width: 1300px;
            position: relative;
            .ability{
                min-width: 1300px;
                height:996px;
                background:rgba(15,21,51,1);
                position: absolute;
                .ability-title{
                    width: 100%;
                    text-align: center;
                    font-size:34px;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    margin: 94px 0;
                }
                .list-line1{
                    margin-left: 180px;
                    width: 1300px;
                    display: flex;
                    .item:hover{
                        background:#004ce5;
                    }
                    .item:last-child{
                        border-right: none;
                    }
                    .item{
                        cursor: pointer;
                        width:258px;
                        height:218px;
                        border-right: 1px solid #14227a;
                        border-bottom: 1px solid #14227a;
                        display: flex;
                        flex-direction: column;
                        padding: 42px;
                        box-sizing: border-box;
                        .item-line1{

                        }
                        .item-line2{
                            font-size:20px;
                            font-weight:400;
                            color:rgba(254,254,254,1);
                            margin-top: 30px;
                            margin-bottom: 30px;
                        }
                        .item-line3{
                            width: 100%;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: flex-end;
                            font-size:14px;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            img{
                                margin-left: 10px;
                                width: 21px;
                            }
                        }
                    }
                }
                .list-line2{
                    margin-left: 180px;
                    width: 1300px;
                    display: flex;
                    .item:hover{
                        background:#004ce5;
                    }
                    .item:last-child{
                        border-right: none;
                    }
                    .item{
                        cursor: pointer;
                        width:258px;
                        height:218px;
                        border-right: 1px solid #14227a;
                        display: flex;
                        flex-direction: column;
                        padding: 42px;
                        box-sizing: border-box;
                        .item-line1{

                        }
                        .item-line2{
                            font-size:20px;
                            font-weight:400;
                            color:rgba(254,254,254,1);
                            margin-top: 30px;
                            margin-bottom: 30px;
                        }
                        .item-line3{
                            width: 100%;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: flex-end;
                            font-size:14px;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            img{
                                margin-left: 10px;
                                width: 21px;
                            }
                        }
                    }
                }
            }

        }
        .white-box{
            width: 100%;
            height: 300px;
            background-color: #ffffff;
        }
        .gray-box{
            width:100%;
            height:2715px;
            background:rgba(243,245,247,1);
        }
    }

</style>