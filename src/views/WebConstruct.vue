<template>
    <div class="web-page">
        <Header></Header>
        <Background :type-index="2"></Background>
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
                <img src="../assets/images/other.png" alt="" class="other-img">
            </div>
        </div>
        <div class="progress-box">
            <div class="progress">
                <div class="center">
                    <div class="title">网站开发流程</div>
                    <div class="items">
                        <div class="item">
                            <img src="../assets/images/w1.png" alt="">
                            <h2 class="text">1、行业数据分析</h2>
                        </div>
                        <div class="item">
                            <img src="../assets/images/w2.png" alt="">
                            <h2 class="text">2、品牌定位规范</h2>
                        </div>
                        <div class="item">
                            <img src="../assets/images/w3.png" alt="">
                            <h2 class="text">3、功能需求调研</h2>
                        </div>
                        <div class="item">
                            <img src="../assets/images/w4.png" alt="">
                            <h2 class="text">4、交互视觉设计</h2>
                        </div>
                        <div class="item">
                            <img src="../assets/images/w5.png" alt="">
                            <h2 class="text">5、双端同步开发</h2>
                        </div>
                        <div class="item">
                            <img src="../assets/images/w6.png" alt="">
                            <h2 class="text">6、后端并行开发</h2>
                        </div>
                        <div class="item">
                            <img src="../assets/images/w7.png" alt="">
                            <h2 class="text">7、测试上线交付使用</h2>
                        </div>

                    </div>
                    <div class="imgs">
                        <img class="left" src="../assets/images/dots0.png" alt="">
                        <img class="right" src="../assets/images/paper.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="delivery-standard">
            <div class="center">
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
            <div class="system-security">
                <div class="title">系统安全标准</div>
                <div class="items">
                    <div class="item">
                        <div class="top">源代码安全</div>
                        <div class="bottom">
                            <div class="li">
                                <img src="../assets/images/ss1.png" alt="">
                                <div class="text">防SQL注入</div>
                            </div>
                            <div class="li">
                                <img src="../assets/images/ss2.png" alt="">
                                <div class="text">过滤拦截机制</div>
                            </div>
                            <div class="li">
                                <img src="../assets/images/ss3.png" alt="">
                                <div class="text">并发安全机制</div>
                            </div>
                            <div class="li">
                                <img src="../assets/images/ss4.png" alt="">
                                <div class="text">
                                    加密(MDS、RSA、
                                    DES)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="top">程序安全</div>
                        <div class="bottom">
                            <div class="li">
                                <img src="../assets/images/ss5.png" alt="">
                                <div class="text">身份认证机制</div>
                            </div>
                            <div class="li">
                                <img src="../assets/images/ss6.png" alt="">
                                <div class="text">权限控制</div>
                            </div>
                            <div class="li">
                                <img src="../assets/images/ss7.png" alt="">
                                <div class="text">渗透测试</div>
                            </div>
                            <div class="li">
                                <img src="../assets/images/ss8.png" alt="">
                                <div class="text">日志追踪</div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="top">数据库安全</div>
                        <div class="bottom">
                            <div class="li">
                                <img src="../assets/images/ss9.png" alt="">
                                <div class="text">双机容错</div>
                            </div>
                            <div class="li">
                                <img src="../assets/images/ss10.png" alt="">
                                <div class="text">数据备份</div>
                            </div>
                            <div class="li">
                                <img src="../assets/images/ss11.png" alt="">
                                <div class="text">灾难恢复</div>
                            </div>
                            <div class="li">
                                <img src="../assets/images/ss12.png" alt="">
                                <div class="text">
                                    数据存储(基于RAID <br>
                                    的存储技术)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="top">服务器安全</div>
                        <div class="bottom">
                            <div class="li">
                                <img src="../assets/images/ss1.png" alt="">
                                <div class="text">防火墙</div>
                            </div>
                            <div class="li">
                                <img src="../assets/images/ss2.png" alt="">
                                <div class="text">入侵检测</div>
                            </div>
                            <div class="li">
                                <img src="../assets/images/ss3.png" alt="">
                                <div class="text">漏洞扫描</div>
                            </div>
                            <div class="li">
                                <img src="../assets/images/ss4.png" alt="">
                                <div class="text">物理隔离</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="support-box">
                <div class="support">
                    <div class="left">
                        <div class="dots">
                            <img src="../assets/images/dots.png" alt="">
                        </div>
                        <div class="left-img-box">
                            <img src="../assets/images/ba.png" alt="">
                        </div>
                    </div>
                    <div class="right">
                        <div class="support-title">技术支持</div>
                        <div class="support-items">
                            <div class="support-item">
                                <div class="support-item-title">
                                    <img src="../assets/images/su1.png" >
                                    <div class="title-text">程序使用培训</div>
                                </div>
                                <div class="support-item-context">程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训</div>
                            </div>
                            <div class="support-item">
                                <div class="support-item-title">
                                    <img src="../assets/images/su2.png" >
                                    <div class="title-text">项目问题咨询</div>
                                </div>
                                <div class="support-item-context">程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训</div>
                            </div>
                            <div class="support-item">
                                <div class="support-item-title">
                                    <img src="../assets/images/su3.png" >
                                    <div class="title-text">项目部署及维护</div>
                                </div>
                                <div class="support-item-context">程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训</div>
                            </div>
                            <div class="support-item">
                                <div class="support-item-title">
                                    <img src="../assets/images/su4.png" >
                                    <div class="title-text">后期功能升级和修改</div>
                                </div>
                                <div class="support-item-context">程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训程序使用培训</div>
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
        name: "WebConstruct",
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
        },

    }
</script>

<style scoped lang="scss">
    .web-page {
        @include page-style;
        z-index: 0;
        .ability {
            width: 100%;
            min-width: 1300px;
            margin: 0 auto;
            height: 800px;
            background-color: #ffffff;

            .center {
                width: 1300px;
                margin: 0 auto;
                margin-bottom: 50px;
                position: relative;
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

                .other-img{
                    position: absolute;
                    right: 450px;
                    bottom: 50px;
                }
            }


        }

        .progress-box {
            width: 100%;
            min-width: 1300px;
            height: 630px;
            position: relative;
            overflow: visible;

            .progress {
                width: 100%;
                min-width: 1300px;
                height: 1122px;
                background-image: url("../assets/images/pro0.png");
                @include back-img-center;
                position: absolute;

                .center {
                    width: 1300px;
                    margin: 0 auto;
                    padding-top: 150px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    .title {
                        width: 100%;
                        font-size: 34px;
                        font-weight: 500;
                        color: rgba(255, 255, 255, 1);
                        text-align: center;
                        padding: 68px 0 50px 0;
                    }

                    .items {
                        width: 850px;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-between;

                        .item {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            margin: 35px 10px;

                            .text {
                                margin-left: 27px;
                                font-size: 20px;
                                font-weight: 400;
                                color: rgba(255, 255, 255, 1);
                            }
                        }
                    }

                    .imgs {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        margin-top: 80px;
                        position: relative;

                        .left {
                            width: 10px;
                            height: 150px;
                        }

                        .right {
                            width: 766px;
                            height: 723px;
                            position: absolute;
                            top: -362px;
                            right: 0;
                        }
                    }
                }
            }
        }

        .delivery-standard {
            width: 100%;
            min-width: 1300px;
            height: 2242px;
            background-color: #f4f5f8;
            z-index: -1;
            background-image: url("../assets/images/left-back.png");
            background-repeat: no-repeat;
            background-position: 0 -200px;

            .left-back {
                width: 475px;
                height: 1758px;
                position: absolute;
                left: -70px;
                top: -150px;
                z-index: 1;
            }

            .center {
                margin: 0 auto;
                padding-top: 280px;
                width: 1300px;

                .title {
                    z-index: 99;
                    width: 100%;
                    font-size: 34px;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                    text-align: left;
                    padding: 68px 0 50px 0;
                    margin-bottom: 55px;
                }

                .items {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    z-index: 9;

                    .item {
                        z-index: 9;
                        background-color: #ffffff;
                        cursor: pointer;
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
                        }

                        .logo {
                            z-index: 99;
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
                            display: none;
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

        }

        .system-security{
            width: 1300px;
            margin: 0 auto;
            margin-top: 132px;
            display: flex;
            flex-direction: column;
            .title{
                width: 100%;
                text-align: center;
                font-size:34px;
                font-weight:500;
                color:rgba(51,51,51,1);
                margin-bottom: 70px;
            }
            .items{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .item{
                    background-color: #ffffff;
                    width:269px;
                    height:392px;
                    .top{
                        width: 100%;
                        height: 100px;
                        background-color: #004BE5;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size:24px;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                    }
                    .bottom{
                        padding: 30px 20px;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        .li{
                            width: 100%;
                            display: flex;
                            align-items: flex-start;
                            margin-bottom: 30px;
                            line-height: 1.5;
                            .text{
                                margin-left: 14px;
                                font-size:18px;
                                font-weight:400;
                                color:rgba(51,51,51,1);
                            }
                        }
                    }
                }
            }
        }

        .support-box{
            width: 1300px;
            margin: 0 auto;
            .support {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 120px;

                .left {
                    width: 405px;
                    position: relative;
                    .dots{
                        width:600px;
                        height:535px;
                        background:rgba(0,76,229,1);
                        border-radius:60px;
                        position: absolute;
                        left: -330px;
                        display: flex;
                        justify-content: flex-end;
                        padding: 50px 160px;
                        box-sizing: border-box;
                        img{
                            width: 99px;
                            height: 174px;
                        }
                    }
                    .left-img-box{
                        width:263px;
                        height:492px;
                        background:rgba(255,255,255,1);
                        box-shadow:0px 3px 62px 0px rgba(105,122,156,0.3);
                        border-radius:60px;
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }

                .right {
                    width: 730px;

                    .support-title {
                        width: 100%;
                        font-size:34px;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        text-align: center;
                    }

                    .support-items{
                        width: 100%;
                        margin-top: 89px;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        .support-item:nth-child(3),.support-item:nth-child(4){
                            margin-top: 90px;
                        }
                        .support-item {
                            width: 323px;
                            height: 208px;
                            background: rgba(255, 255, 255, 1);
                            border: 2px solid rgba(225, 229, 239, .7);
                            padding: 30px 20px;
                            box-sizing: border-box;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;


                            .support-item-title {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                font-size: 22px;
                                font-weight: 500;
                                color: rgba(51, 51, 51, 1);
                                .title-text{
                                    margin-left: 15px;
                                }
                            }
                            .support-item-context{
                                font-size:16px;
                                font-weight:400;
                                color:rgba(157,169,195,1);
                                line-height:22px;
                                @include line-hidden(3);
                            }
                        }
                        .support-item:hover{
                            box-shadow: 0px 3px 50px 0px rgba(105, 122, 156, 0.25);
                        }
                    }

                }
            }
        }
    }
</style>














