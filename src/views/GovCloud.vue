<template>
    <div class="GovCloud-page">
        <Header ></Header>
        <Background :type-index="1"></Background>
        <div class="center">
            <div class="ability" >
                <div class="ability-title">
                    可开发行业
                </div>
                <div class="list-line1" :style="'margin-left: '+marginWidth+'px;'">
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
                <div class="list-line2" :style="'margin-left: '+marginWidth+'px;'">
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
        <div class="white-box">
            <div class="progress">
                <img src="../assets/images/pro.png" alt="">
                <div class="text">系统开发流程</div>
            </div>
        </div>
        <div class="gray-box">
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
            <div class="bottom-box">
                <div class="security-standard">
                    <div class="title">系统安全标准</div>
                    <div class="items">
                        <div class="item item1">
                            <div class="item-title">源代码安全</div>
                            <div class="li">1、防SQL注入</div>
                            <div class="li">2、过滤拦截机制</div>
                            <div class="li">3、并发安全机制</div>
                            <div class="li">4、加密(MDS、RSA、DES)</div>
                            <div class="img">
                                <img src="../assets/images/se0.png" alt="">
                            </div>
                        </div>
                        <div class="item item2">
                            <div class="item-title">程序安全</div>
                            <div class="li">1、身份认证机制</div>
                            <div class="li">2、权限控制</div>
                            <div class="li">3、渗透测试</div>
                            <div class="li">4、日志追踪</div>
                            <div class="img">
                                <img src="../assets/images/se1.png" alt="">
                            </div>
                        </div>
                        <div class="item item3">
                            <div class="item-title">数据库安全</div>
                            <div class="li">1、双机容错</div>
                            <div class="li">2、数据备份</div>
                            <div class="li">3、灾难恢复</div>
                            <div class="li">
                                4、数据存储(基于RAID的存
                                储技术)
                            </div>
                            <div class="img">
                                <img src="../assets/images/se2.png" alt="">
                            </div>
                        </div>
                        <div class="item item4">
                            <div class="item-title">服务器安全</div>
                            <div class="li">1、防火墙</div>
                            <div class="li">2、入侵检测</div>
                            <div class="li">3、漏洞扫描</div>
                            <div class="li">4、物理隔离</div>
                            <div class="img">
                                <img src="../assets/images/se3.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="technology-support">
                <div class="title">
                    技术支持
                </div>
                <div class="items">
                    <div class="item">
                        <img src="../assets/images/j1.png" class="item-img" alt="">
                        <div class="item-title">程序使用培训</div>
                    </div>
                    <div class="item">
                        <img src="../assets/images/j2.png" class="item-img" alt="">
                        <div class="item-title">项目问题咨询</div>
                    </div>
                    <div class="item">
                        <img src="../assets/images/j3.png" class="item-img" alt="">
                        <div class="item-title">项目部署及维护</div>
                    </div>
                    <div class="item">
                        <img src="../assets/images/j4.png" class="item-img" alt="">
                        <div class="item-title">后期功能升级和修改</div>
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
        computed:{
          marginWidth(){
              let res= ((this.screenWidth-1300)/2-120)>0?((this.screenWidth-1300)/2-120):0
              return res
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
        position: relative;
        .center{
            margin: 0 auto;
            width: 100%;
            height:996px;
            position: absolute;
            overflow-x: hidden;
            .ability{
                z-index: 9;
                width: 100%;
                min-width: 1300px;
                height:996px;
                background:rgba(15,21,51,1);
                position: absolute;
                left: 120px;
                .ability-title{
                    width: 100%;
                    text-align: center;
                    font-size:34px;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    margin: 94px 0;
                }
                .list-line1{
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
                        align-items: flex-start;
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
                        align-items: flex-start;
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
            position: relative;
            display: flex;
            justify-content: center;
            .progress{
                z-index: 10;
                width:1300px;
                height:852px;
                background:rgba(255,255,255,1);
                position: absolute;
                top:732px;
                display: flex;
                justify-content: center;
                align-items: center;
                .text{
                    position: absolute;
                    right: 169px;
                    top: 111px;
                    font-size:34px;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                }
            }
        }
        .gray-box{
            width:100%;
            background:rgba(243,245,247,1);
            .delivery-standard{
                margin: 0 auto;
                padding-top: 1290px;
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

                            font-size:22px;
                            font-weight:400;
                            color:rgba(51,51,51,1);
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
            .bottom-box{
                margin-top: 64px;
                width: 100%;
                height: 828px;
                background-image: url("../assets/images/btm.png");
                @include back-img-center;
                background-size: 120% 110%;
                .security-standard{
                    width: 1300px;
                    margin: 0 auto;
                    padding-top: 20px;
                    .title {
                        width: 100%;
                        font-size:34px;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        text-align: center;
                        padding: 68px 0 50px 0;
                        margin-bottom: 30px;
                    }
                    .items{
                        width: 100%;
                        height: 412px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        .item{
                            width:279px;
                            height:412px;
                            background:rgba(23,39,99,.7);

                            .item-title{
                                margin-top: 26px;
                                font-size:24px;
                                font-weight:500;
                                color:rgba(255,255,255,1);
                                margin-bottom: 51px;
                                width: 100%;
                                text-align: center;
                            }
                            .li{
                                font-size:18px;
                                font-weight:400;
                                color:rgba(255,255,255,1);
                                margin-bottom: 22px;
                                padding: 0 20px;
                                box-sizing: border-box;
                                line-height: 1.5;
                            }

                            .img{
                                padding: 0 33px;
                                box-sizing: border-box;
                                margin-top: 51px;
                                width: 100%;
                                text-align: right;
                                img{
                                    width: 64px;
                                    height: 64px;
                                }
                            }
                        }
                        .item2{
                            img{
                                width:66px !important;
                                height:53px !important;
                            }
                        }
                        .item3{
                            .img{
                                margin-top: 20px;
                                img{
                                    width:64px;
                                    height:64px;
                                }
                            }

                        }
                        .item4{
                            img{
                                width:54px !important;
                                height:56px !important;
                            }
                        }
                    }
                }
            }
            .technology-support{
                position: relative;
                top: -130px;
                width: 1300px;
                margin: 0 auto;
                .title {
                    width: 100%;
                    font-size:34px;
                    color:rgba(51,51,51,1);
                    text-align: center;
                    margin-bottom: 60px;
                }
                .items{
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .item{
                        width: 287px;
                        display: flex;
                        flex-direction: column;
                        .item-img{
                            width:287px;
                            height:201px;
                        }
                        .item-title{
                            width: 100%;
                            text-align: center;
                            font-size:24px;
                            font-weight:500;
                            color:rgba(51,51,51,1);
                            margin: 30px 0;
                        }
                    }
                }
            }
        }
    }

</style>