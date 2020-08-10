<template>
    <div class="business-page">
        <Header :menu="1"></Header>
        <Background :type-index="0"></Background>
        <div class="ability">
            <div class="center">
                <h2 class="title">
                    可开发行业
                </h2>
                <div class="items">
                    <div class="column column1">
                        <div class="line line0" @mouseenter="itemHover(0)" @mouseleave="itemHover(-1)">
                            <div class="context">
                                <div class="left-logo">
                                    <img src="../assets/images/a1.png" alt="">
                                </div>
                                <div class="right-text">移动社交</div>
                            </div>
                            <div class="more">
                                <img :src="activeIndex==0?more0:more1" alt="">
                            </div>
                        </div>
                        <div class="line line1" @mouseenter="itemHover(1)" @mouseleave="itemHover(-1)">
                            <div class="context">
                                <div class="left-logo">
                                    <img src="../assets/images/a2.png" alt="">
                                </div>
                                <div class="right-text">视频直播</div>
                            </div>
                            <div class="more">
                                <img :src="activeIndex==1?more0:more1" alt="">
                            </div>
                        </div>
                        <div class="line line2" @mouseenter="itemHover(2)" @mouseleave="itemHover(-1)">
                            <div class="context">
                                <div class="left-logo">
                                    <img src="../assets/images/a3.png" alt="">
                                </div>
                                <div class="right-text">线上教育</div>
                            </div>
                            <div class="more">
                                <img :src="activeIndex==2?more0:more1" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="column column2">
                        <div class="line line3" @mouseenter="itemHover(3)" @mouseleave="itemHover(-1)">
                            <div class="context">
                                <div class="left-logo">
                                    <img src="../assets/images/a4.png" alt="">
                                </div>
                                <div class="right-text">智慧医疗</div>
                            </div>
                            <div class="more">
                                <img :src="activeIndex==3?more0:more1" alt="">
                            </div>
                        </div>
                        <div class="line line4" @mouseenter="itemHover(4)" @mouseleave="itemHover(-1)">
                            <div class="context">
                                <div class="left-logo">
                                    <img src="../assets/images/a5.png" alt="">
                                </div>
                                <div class="right-text">移动商城</div>
                            </div>
                            <div class="more">
                                <img :src="activeIndex==4?more0:more1" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="column column3">
                        <div class="line line5" @mouseenter="itemHover(5)" @mouseleave="itemHover(-1)">
                            <div class="context">
                                <div class="left-logo">
                                    <img src="../assets/images/a6.png" alt="">
                                </div>
                                <div class="right-text">跑腿外送</div>
                            </div>
                            <div class="more">
                                <img :src="activeIndex==5?more0:more1" alt="">
                            </div>
                        </div>
                        <div class="line line6" @mouseenter="itemHover(6)" @mouseleave="itemHover(-1)">
                            <div class="context">
                                <div class="left-logo">
                                    <img src="../assets/images/a7.png" alt="">
                                </div>
                                <div class="right-text">智慧外卖</div>
                            </div>
                            <div class="more">
                                <img :src="activeIndex==6?more0:more1" alt="">
                            </div>
                        </div>
                        <div class="line line7" @mouseenter="itemHover(7)" @mouseleave="itemHover(-1)">
                            <div class="context">
                                <div class="left-logo">
                                    <img src="../assets/images/a8.png" alt="">
                                </div>
                                <div class="right-text">智慧健身</div>
                            </div>
                            <div class="more">
                                <img :src="activeIndex==7?more0:more1" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="progress">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Background from "../components/Background";

    export default {
        name: "Business",
        components: {
            Header: Header,
            Background: Background,
        },
        data() {
            return {
                activeIndex: -1,
                more0: require('../assets/images/more0.png'),
                more1: require('../assets/images/more1.png'),
            }
        },
        methods: {
            itemHover(index) {
                this.activeIndex = index
            }
        }
    }
</script>

<style scoped lang="scss">
    .business-page {
        @include page-style;
        .ability {
            width: 100%;
            min-width: 1300px;
            margin: 0 auto;
            height: 1380px;
            background: rgba(244, 245, 248, 1);
            .center {
                width: 1300px;
                margin: 0 auto;
                margin-bottom: 50px;
                .title {
                    width: 100%;
                    font-size: 34px;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                    text-align: center;
                    padding: 68px 0 50px 0;
                }
                .items {
                    width: 100%;
                    height: 630px;
                    background-image: url("../assets/images/ability.png");
                    @include back-img-center;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;

                    .column {
                        width: 375px;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-end;

                        .line {
                            cursor: pointer;
                            width: 270px;
                            height: 156px;
                            background: rgba(255, 255, 255, 1);
                            box-shadow: 0px 8px 20px 0px rgba(24, 94, 224, 0.15);
                            padding: 30px 20px;
                            box-sizing: border-box;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;

                            .context {
                                display: flex;
                                justify-content: flex-start;
                                padding-left: 20px;
                                align-items: center;
                                width: 100%;

                                .left-logo {
                                    width: 56px;
                                    height: 56px;
                                    background: rgba(255, 255, 255, 1);
                                    box-shadow: 0px 8px 30px 0px rgba(24, 94, 224, 0.25);
                                    border-radius: 50%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                }

                                .right-text {
                                    margin-left: 20px;
                                    font-size: 24px;
                                    font-weight: 400;
                                    color: #333333;
                                }
                            }

                            .more {
                                width: 100%;
                                display: flex;
                                justify-content: flex-end;
                            }
                        }

                        .line0:hover, .line1:hover, .line2:hover, .line3:hover, .line4:hover, .line5:hover, .line6:hover, .line7:hover {
                            background-color: rgba(0, 76, 229, 1);

                            .right-text {
                                color: #FFFFFF;
                            }
                        }

                        .line1 {
                            align-self: flex-start;
                            margin: 40px 0;
                        }

                        .line4 {
                            margin-top: 40px;
                            align-self: flex-start;
                        }

                        .line5, .line7 {
                            align-self: flex-start;
                        }

                        .line6 {
                            margin: 40px 0;
                        }
                    }

                    .column1 {
                        width: 330px;
                    }

                    .column2 {
                        width: 300px;
                    }

                    .column3 {
                        width: 300px;
                    }
                }
            }
            .progress {
                margin-top: 20px;
                height: 1070px;
                background-color: #101533;
                position: absolute;
                min-width: 1300px;
                left: calc(100% - 1300px)/2;
                right:  calc(100% - 1300px)/2;

            }

        }
    }
</style>