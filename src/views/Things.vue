<template>
    <div class="things-page">
        <Header></Header>
        <Background :type-index="5"></Background>
        <div class="gray">
            <div class="ability">
                <div class="ability-center">
                    <div class="ability-title">
                        可开发行业
                    </div>
                    <div class="list-line1">
                        <div class="item" @mouseenter="itemHover(0)" @mouseleave="itemHover(-1)">
                            <div class="item-line1">
                                <img :src="activeIndex==0?require('../assets/images/kkh0.png'):require('../assets/images/kk0.png')"
                                     alt="">
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
                                <img :src="activeIndex==1?require('../assets/images/kkh1.png'):require('../assets/images/kk1.png')"
                                     alt="">
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
                                <img :src="activeIndex==2?require('../assets/images/kkh2.png'):require('../assets/images/kk2.png')"
                                     alt="">
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
                                <img :src="activeIndex==3?require('../assets/images/kkh3.png'):require('../assets/images/kk3.png')"
                                     alt="">
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
                                <img :src="activeIndex==4?require('../assets/images/kkh4.png'):require('../assets/images/kk4.png')"
                                     alt="">
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
                                <img :src="activeIndex==5?require('../assets/images/kkh5.png'):require('../assets/images/kk5.png')"
                                     alt="">
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
                                <img :src="activeIndex==6?require('../assets/images/kkh6.png'):require('../assets/images/kk6.png')"
                                     alt="">
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
                                <img :src="activeIndex==7?require('../assets/images/kkh7.png'):require('../assets/images/kk7.png')"
                                     alt="">
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
                                <img :src="activeIndex==8?require('../assets/images/kkh8.png'):require('../assets/images/kk8.png')"
                                     alt="">
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
                                <img :src="activeIndex==9?require('../assets/images/kkh9.png'):require('../assets/images/kk9.png')"
                                     alt="">
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
        </div>
        <div class="bottom-box">
            <div class="progress">
                <div class="center">
                    <div class="title">系统开发流程</div>
                    <div class="content">
                        <img src="../assets/images/progress0.png" alt="">
                        <div class="items">
                            <div class="item item1">
                                <div class="item-num">01</div>
                                <div class="item-text">行业数据分析</div>
                            </div>
                            <div class="item item2">
                                <div class="item-num">02</div>
                                <div class="item-text">品牌定位规范</div>
                            </div>
                            <div class="item item3">
                                <div class="item-num">03</div>
                                <div class="item-text">功能需求调研</div>
                            </div>
                            <div class="item item4">
                                <div class="item-num">04</div>
                                <div class="item-text">交互视觉设计</div>
                            </div>
                            <div class="item item5">
                                <div class="item-num">05</div>
                                <div class="item-text">双端同步开发</div>
                            </div>
                            <div class="item item6">
                                <div class="item-num">06</div>
                                <div class="item-text">后端并行开发</div>
                            </div>
                            <div class="item item7">
                                <div class="item-num">07</div>
                                <div class="item-text">测试上线交付使用</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="delivery-standard">
                <div class="title">交付标准</div>
                <div class="items">
                    <div class="item">
                        <div class="logo">
                            <img src="../assets/images/d1.png" alt="">
                        </div>
                        <div class="item-text">项目计划书</div>
                        <img class="hoverImg" src="../assets/images/df1.png">
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="../assets/images/d2.png" alt="">
                        </div>
                        <div class="item-text">设计稿源文件</div>
                        <img class="hoverImg" src="../assets/images/df2.png">
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="../assets/images/d3.png" alt="">
                        </div>
                        <div class="item-text">源代码</div>
                        <img class="hoverImg" src="../assets/images/df3.png">
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="../assets/images/d4.png" alt="">
                        </div>
                        <div class="item-text">使用文档</div>
                        <img class="hoverImg" src="../assets/images/df4.png">
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="../assets/images/d5.png" alt="">
                        </div>
                        <div class="item-text">账号信息</div>
                        <img class="hoverImg" src="../assets/images/df5.png">
                    </div>
                </div>
            </div>
            <div class="security">
                <div class="left">
                    <div class="left-content" :style="'width:'+(520+(screenWidth-1300)/2) +'px'">
                        <div class="center-content">
                            <div class="cc-title">
                                <img :src="securityImg[securityIndex]" alt="">
                                <div class="text">{{securityList[securityIndex].title}}</div>
                            </div>
                            <div class="cc-items">
                                <div class="item" v-for="item in securityList[securityIndex].items">{{item}}</div>
                            </div>
                            <div class="pagination">
                                <div class="left">
                                    <img :src="securityIndex==0?dotBlue:dotWhite" alt="">
                                    <img :src="securityIndex==1?dotBlue:dotWhite" alt="">
                                    <img :src="securityIndex==2?dotBlue:dotWhite" alt="">
                                    <img :src="securityIndex==3?dotBlue:dotWhite" alt="">
                                </div>
                                <div class="right">
                                    <img v-if="securityIndex==0" src="../assets/images/left-gray.png" alt="">
                                    <img v-else src="../assets/images/left-blue.png" @click="changePage(-1)">
                                    <img v-if="securityIndex==3" src="../assets/images/right-gray.png" alt="">
                                    <img v-else src="../assets/images/right-blue.png" @click="changePage(1)">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="right-title">系统安全标准</div>
                    <img src="../assets/images/right-img.png" alt="">
                </div>
            </div>
            <div class="technology-support">
                <div class="left">
                    <img src="../assets/images/ss-l.png" alt="">
                </div>
                <div class="right">
                    <div class="right-title">技术支持</div>
                    <div class="right-content" :style="'width:'+(745+(screenWidth-1300)/2)+'px;'">
                        <div class="content-content">
                            <div class="right-item">
                                <div class="line1">
                                    <img src="../assets/images/c1.png" alt="">
                                    <div class="text">程序使用培训</div>
                                </div>
                                <div class="line2">程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训</div>
                            </div>
                            <div class="right-item">
                                <div class="line1">
                                    <img src="../assets/images/c2.png" alt="">
                                    <div class="text">项目问题咨询</div>
                                </div>
                                <div class="line2">程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训</div>
                            </div>
                            <div class="right-item">
                                <div class="line1">
                                    <img src="../assets/images/c3.png" alt="">
                                    <div class="text">项目部署及维护</div>
                                </div>
                                <div class="line2">程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训</div>
                            </div>
                            <div class="right-item">
                                <div class="line1">
                                    <img src="../assets/images/c4.png" alt="">
                                    <div class="text">后期功能升级和修改</div>
                                </div>
                                <div class="line2">程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训</div>
                            </div>
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
        name: "Things",
        components: {
            Header: Header,
            Background: Background,
        },
        data() {
            return {
                dotBlue: require('../assets/images/dot-blue.png'),
                dotWhite: require('../assets/images/dot-white.png'),
                securityIndex: 0,
                screenWidth: '',
                screenHeight: '',
                activeIndex: -1,
                securityImg:[
                    require('../assets/images/cc1.png'),
                    require('../assets/images/cc2.png'),
                    require('../assets/images/cc3.png'),
                    require('../assets/images/cc4.png'),
                ],
                securityList: [
                    {
                        title:'源代码安全',
                        items:['1、防SQL注入','2、过滤拦截机制','3、并发安全机制','4、加密(MDS、RSA、DES)']
                    },
                    {
                        title:'程序安全',
                        items:['1、身份认证机制','2、权限控制','3、渗透测试','4、日志追踪']
                    },
                    {
                        title:'数据库安全',
                        items:['1、双机容错','2、数据备份','3、灾难恢复','4、数据存储(基于RAID的存储技术)']
                    },
                    {
                        title:'服务器安全',
                        items:['1、防火墙','2、入侵检测','3、漏洞扫描','4、物理隔离']
                    }
                ]
            }
        },
        methods: {
            itemHover(index) {
                this.activeIndex = index
            },
            changePage(num){
                this.securityIndex+=num
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
    .things-page {
        @include page-style;
        overflow: hidden;

        .gray {
            width: 100%;
            height: 637px;
            background-color: #f4f5f8;
            position: relative;

            .ability {
                width: 100%;
                min-width: 1400px;
                background: #ffffff;
                position: absolute;
                z-index: 9;
                left: 50px;

                .ability-center {
                    position: relative;
                    left: -50px;
                    z-index: 9;
                    width: 1300px;
                    margin: 0 auto;
                    height: 752px;

                    .ability-title {
                        width: 100%;
                        text-align: center;
                        font-size: 34px;
                        font-weight: 500;
                        color: rgba(51, 51, 51, 1);
                        padding: 94px 0;
                    }

                    .list-line1 {
                        width: 1300px;
                        display: flex;

                        .item:hover {
                            background: #004ce5;

                            .item-line2 {
                                color: #ffffff;
                            }
                        }

                        .item:last-child {
                            border-right: none;
                        }

                        .item {
                            cursor: pointer;
                            width: 258px;
                            height: 218px;
                            border-right: 1px solid rgba(17, 26, 81, 0.1);
                            border-bottom: 1px solid rgba(17, 26, 81, 0.1);
                            display: flex;
                            flex-direction: column;
                            padding: 42px;
                            box-sizing: border-box;
                            align-items: flex-start;

                            .item-line1 {

                            }

                            .item-line2 {
                                font-size: 20px;
                                font-weight: 400;
                                color: #333333;
                                margin-top: 30px;
                                margin-bottom: 30px;
                            }

                            .item-line3 {
                                width: 100%;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: flex-end;
                                font-size: 14px;
                                font-weight: 400;
                                color: rgba(255, 255, 255, 1);

                                img {
                                    margin-left: 10px;
                                    width: 21px;
                                }
                            }
                        }
                    }

                    .list-line2 {
                        width: 1300px;
                        display: flex;

                        .item:hover {
                            background: #004ce5;

                            .item-line2 {
                                color: #ffffff;
                            }
                        }

                        .item:last-child {
                            border-right: none;
                        }

                        .item {
                            cursor: pointer;
                            width: 258px;
                            height: 218px;
                            border-right: 1px solid rgba(17, 26, 81, 0.1);
                            display: flex;
                            flex-direction: column;
                            padding: 42px;
                            box-sizing: border-box;
                            align-items: flex-start;

                            .item-line1 {

                            }

                            .item-line2 {
                                font-size: 20px;
                                font-weight: 400;
                                color: #333333;
                                margin-top: 30px;
                                margin-bottom: 30px;
                            }

                            .item-line3 {
                                width: 100%;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: flex-end;
                                font-size: 14px;
                                font-weight: 400;
                                color: rgba(255, 255, 255, 1);

                                img {
                                    margin-left: 10px;
                                    width: 21px;
                                }
                            }
                        }
                    }
                }

            }
        }


        .bottom-box {
            overflow: hidden;
            height: 2613px;
            width: 100%;
            min-width: 1300px;
            background-color: #f4f5f8;
            background-image: url("../assets/images/bottom-back.png");
            background-repeat: no-repeat;
            background-position: right;

            .progress {
                position: relative;
                left: -50px;
                width: 100%;
                min-width: 1400px;
                height: 736px;
                background: rgba(16, 21, 51, 1);

                .center {
                    width: 1300px;
                    margin: 0 auto;
                    position: relative;
                    left: 50px;

                    .title {
                        padding-top: 198px;
                        padding-bottom: 70px;
                        width: 100%;
                        text-align: center;
                        font-size: 34px;
                        font-weight: 500;
                        color: rgba(255, 255, 255, 1);
                    }

                    .content {
                        width: 100%;

                        img {
                            width: 100%;
                        }

                        .items {
                            width: 100%;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;

                            .item {
                                display: flex;
                                flex-direction: column;
                                align-items: center;

                                .item-num {
                                    font-size: 24px;
                                    font-weight: 500;
                                    color: rgba(24, 94, 224, 1);
                                }

                                .item-text {
                                    font-size: 16px;
                                    font-weight: 400;
                                    color: rgba(255, 255, 255, 1);
                                    margin-top: 21px;
                                }
                            }

                            .item1 {
                                position: relative;
                                top: -50px;
                                right: -15px;
                            }

                            .item2 {
                                position: relative;
                                top: -120px;
                                right: -10px;
                            }

                            .item4 {
                                position: relative;
                                top: -50px;
                                right: -5px;
                            }

                            .item5 {
                                position: relative;
                                right: -10px;
                            }

                            .item6 {
                                position: relative;
                                top: -120px;
                                right: 15px;
                            }

                            .item7 {
                                position: relative;
                                top: -50px;
                                right: 15px;
                            }
                        }

                    }

                }
            }

            .delivery-standard {
                margin: 0 auto;
                width: 1300px;

                .title {
                    width: 100%;
                    font-size: 34px;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                    text-align: center;
                    padding: 68px 0 50px 0;
                    margin-bottom: 55px;
                }

                .items {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    .item {
                        background-color: #ffffff;
                        border-radius: 5px;
                        display: flex;
                        justify-content: center;
                        align-self: center;
                        box-shadow: 0px 3px 30px 0px rgba(106, 122, 156, 0.3);
                        width: 220px;
                        height: 146px;
                        position: relative;

                        .item-text {
                            display: flex;
                            justify-content: center;
                            align-self: center;

                            font-size: 22px;
                            font-weight: 400;
                            color: rgba(51, 51, 51, 1);
                            position: relative;
                            top: 130px;

                        }

                        .logo {
                            z-index: 9;
                            width: 56px;
                            height: 56px;
                            background: rgba(255, 255, 255, 1);
                            box-shadow: 0px 0px 20px 0px rgba(24, 94, 224, 0.15);
                            border-radius: 50%;
                            position: absolute;
                            top: -28px;
                            left: 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .hoverImg {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            @include back-img-center;
                        }
                    }

                    .item:hover {
                        border-radius: 5px;

                        .hoverImg {
                            display: block !important;
                        }
                    }
                }
            }

            .security {
                width: 1300px;
                margin: 0 auto;
                margin-top: 170px;
                height: 614px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .left {
                    height: 100%;
                    width: 520px;
                    display: flex;
                    justify-content: flex-end;
                    position: relative;

                    .left-content {
                        min-width: 520px;
                        background-color: #ffffff;
                        height: 100%;
                        position: absolute;
                        z-index: 9;
                        display: flex;
                        justify-content: flex-end;

                        .center-content {
                            height: 100%;
                            width: 520px;
                            display: flex;
                            flex-direction: column;
                            padding: 60px 0;
                            box-sizing: border-box;

                            .cc-title {
                                width: 350px;
                                padding-top: 20px;
                                padding-bottom: 37px;
                                border-bottom: 1px solid rgba(230, 236, 248, 1);
                                display: flex;
                                align-items: center;

                                .text {
                                    margin-left: 14px;
                                    font-size: 28px;
                                    font-weight: 500;
                                    color: rgba(51, 51, 51, 1);
                                }
                            }

                            .cc-items {
                                width: 400px;
                                display: flex;
                                flex-direction: column;
                                padding: 25px 0;
                                box-sizing: border-box;

                                .item {
                                    margin: 25px 0;
                                    font-size: 22px;
                                    font-weight: 400;
                                    color: rgba(51, 51, 51, 1);
                                }
                            }

                            .pagination {
                                width: 400px;
                                display: flex;
                                justify-content: space-between;
                                .left {
                                    width: 80px;
                                    flex-shrink: 0;
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: space-between;
                                    align-items: center;
                                    img{
                                        width: 10px;
                                        height: 10px;
                                    }
                                }
                                .right{
                                    display: flex;
                                    flex-direction: row;
                                    img{
                                        cursor: pointer;
                                    }
                                    img:first-child{
                                        margin-right: 47px;
                                    }
                                }
                            }
                        }
                    }
                }

                .right {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .right-title {
                        width: 100%;
                        text-align: center;
                        font-size: 34px;
                        font-weight: 500;
                        color: rgba(51, 51, 51, 1);
                        padding-top: 24px;
                        padding-bottom: 154px;
                    }
                }
            }

            .technology-support{
                width: 1300px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                height: 745px;
                .left{
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    img{
                        margin-bottom: 50px;
                    }
                }
                .right{
                    height: 100%;
                    width: 745px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    .right-title{
                        padding-top: 102px;
                        padding-bottom: 61px;
                        width: 100%;
                        text-align: center;
                        font-size:34px;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                    }
                    .right-content{
                        height: 550px;
                        background-color: #ffffff;
                        min-width: 745px;
                        .content-content{
                            width: 745px;
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;
                            .right-item{
                                padding-top: 80px;
                                padding-left: 89px;
                                box-sizing: border-box;
                                width: 50%;
                                height: 50%;
                                display: flex;
                                flex-direction: column;
                                .line1{
                                    width: 100%;
                                    display: flex;
                                    flex-direction: row;
                                    .text{
                                        margin-left: 14px;
                                        font-size:22px;
                                        font-weight:500;
                                        color:rgba(51,51,51,1);
                                    }
                                }
                                .line2{
                                    margin-top: 32px;
                                    font-size:16px;
                                    font-weight:400;
                                    color:rgba(158,170,195,1);
                                    line-height:22px;
                                }
                            }
                        }

                    }
                }
            }
        }
    }

</style>








