<template>
    <div class="app-page">
        <Header></Header>
        <Background :type-index="4"></Background>
        <div class="business">
            <div class="center">
                <div class="title">可开发行业</div>
                <div class="content">
                    <div class="left">
                        <img :src="businessList[businessIndex].img" alt="">
                    </div>
                    <div class="middle">
                        <img src="../assets/images/l.png" alt="">
                    </div>
                    <div class="right">
                        <div class="item" :class="businessIndex==0?'selected':''" @click="businessSelect(0)">
                            <img class="visible" src="../assets/images/z1.png" alt="">
                            <img class="hidden" src="../assets/images/zz1.png" alt="">
                            <div class="text">社交</div>
                        </div>
                        <div class="item" :class="businessIndex==1?'selected':''" @click="businessSelect(1)">
                            <img class="visible" src="../assets/images/z2.png" alt="">
                            <img class="hidden" src="../assets/images/zz2.png" alt="">
                            <div class="text">教育</div>
                        </div>
                        <div class="item" :class="businessIndex==2?'selected':''" @click="businessSelect(2)">
                            <img class="visible" src="../assets/images/z3.png" alt="">
                            <img class="hidden" src="../assets/images/zz3.png" alt="">
                            <div class="text">直播</div>
                        </div>
                        <div class="item" :class="businessIndex==3?'selected':''" @click="businessSelect(3)">
                            <img class="visible" src="../assets/images/z4.png" alt="">
                            <img class="hidden" src="../assets/images/zz4.png" alt="">
                            <div class="text">医疗</div>
                        </div>
                        <div class="item" :class="businessIndex==4?'selected':''" @click="businessSelect(4)">
                            <img class="visible" src="../assets/images/z5.png" alt="">
                            <img class="hidden" src="../assets/images/zz5.png" alt="">
                            <div class="text">商城</div>
                        </div>
                        <div class="item" :class="businessIndex==5?'selected':''" @click="businessSelect(5)">
                            <img class="visible" src="../assets/images/z6.png" alt="">
                            <img class="hidden" src="../assets/images/zz6.png" alt="">
                            <div class="text">外卖</div>
                        </div>
                        <div class="item" :class="businessIndex==6?'selected':''" @click="businessSelect(6)">
                            <img class="visible" src="../assets/images/z7.png" alt="">
                            <img class="hidden" src="../assets/images/zz7.png" alt="">
                            <div class="text">二手车</div>
                        </div>
                        <div class="item" :class="businessIndex==7?'selected':''" @click="businessSelect(7)">
                            <img class="visible" src="../assets/images/z8.png" alt="">
                            <img class="hidden" src="../assets/images/zz8.png" alt="">
                            <div class="text">健身</div>
                        </div>
                        <div class="item" :class="businessIndex==8?'selected':''" @click="businessSelect(8)">
                            <img class="visible" src="../assets/images/z9.png" alt="">
                            <img class="hidden" src="../assets/images/zz9.png" alt="">
                            <div class="text">交友</div>
                        </div>
                        <div class="item" :class="businessIndex==9?'selected':''" @click="businessSelect(9)">
                            <img class="visible" src="../assets/images/z10.png" alt="">
                            <img class="hidden" src="../assets/images/zz10.png" alt="">
                            <div class="text">房产</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="progress">
            <div class="center">
                <div class="title">APP开发流程</div>
                <img src="../assets/images/progress.png" alt="">
            </div>
        </div>
        <div class="jfbz">
            <div class="center">
                <div class="title">交付标准</div>
                <div class="items">
                    <div class="item">
                        <div class="top">
                            <img src="../assets/images/df1.png" alt="">
                        </div>
                        <div class="middle">
                            <img src="../assets/images/d1.png" alt="">
                        </div>
                        <div class="bottom">产品文档</div>
                    </div>
                    <div class="item">
                        <div class="top">
                            <img src="../assets/images/df2.png" alt="">
                        </div>
                        <div class="middle">
                            <img src="../assets/images/d2.png" alt="">
                        </div>
                        <div class="bottom">设计稿源文件</div>
                    </div>
                    <div class="item">
                        <div class="top">
                            <img src="../assets/images/df3.png" alt="">
                        </div>
                        <div class="middle">
                            <img src="../assets/images/d3.png" alt="">
                        </div>
                        <div class="bottom">源代码</div>
                    </div>
                    <div class="item">
                        <div class="top">
                            <img src="../assets/images/df4.png" alt="">
                        </div>
                        <div class="middle">
                            <img src="../assets/images/d4.png" alt="">
                        </div>
                        <div class="bottom">使用文档</div>
                    </div>
                    <div class="item">
                        <div class="top">
                            <img src="../assets/images/df5.png" alt="">
                        </div>
                        <div class="middle">
                            <img src="../assets/images/d5.png" alt="">
                        </div>
                        <div class="bottom">账号信息</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-box">
            <div class="center">
                <div class="system-security" :style="'width:'+(1300+(screenWidth-1300)/2)+'px'">
                    <div class="center-title">
                        系统安全标准
                    </div>
                    <div class="center-center">
                        <div class="left">
                            <div class="left-item" :class="securityIndex==0?'selected':''" @click="selectSecurity(0)">
                                源代码安全
                            </div>
                            <div class="left-item" :class="securityIndex==1?'selected':''" @click="selectSecurity(1)">
                                程序安全
                            </div>
                            <div class="left-item" :class="securityIndex==2?'selected':''" @click="selectSecurity(2)">
                                数据库安全
                            </div>
                            <div class="left-item" :class="securityIndex==3?'selected':''" @click="selectSecurity(3)">
                                服务器安全
                            </div>
                        </div>
                        <div class="middle"></div>
                        <div class="right">
                            <div v-for="item in securityList[securityIndex]" class="right-item">
                                <img :src="item.img" alt="">
                                <div class="text">{{item.title}}</div>
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
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Background from "../components/Background";

    export default {
        name: "Application",
        components: {
            Header: Header,
            Background: Background,
        },
        data() {
            return {
                businessList:[
                    {
                        img:require('../assets/images/k1.png')
                    },
                    {
                        img:require('../assets/images/k2.png')
                    },
                    {
                        img:require('../assets/images/k3.png')
                    },
                    {
                        img:require('../assets/images/k4.png')
                    },
                    {
                        img:require('../assets/images/k5.png')
                    },
                    {
                        img:require('../assets/images/k6.png')
                    },
                    {
                        img:require('../assets/images/k7.png')
                    },
                    {
                        img:require('../assets/images/k8.png')
                    },
                    {
                        img:require('../assets/images/k9.png')
                    },
                    {
                        img:require('../assets/images/k10.png')
                    },
                ],
                securityList: [
                    [{
                        title: '防SQL注入',
                        img: require('../assets/images/bz1.png')
                    },{
                        title: '过滤拦截机制',
                        img: require('../assets/images/bz2.png')
                    },{
                        title: '并发安全机制',
                        img: require('../assets/images/bz3.png')
                    },{
                        title: '加密(MDS、RSA、DES)',
                        img: require('../assets/images/bz4.png')
                    }],
                    [{
                        title: '身份认证机制',
                        img: require('../assets/images/bz5.png')
                    },{
                        title: '权限控制',
                        img: require('../assets/images/bz6.png')
                    },{
                        title: '渗透测试',
                        img: require('../assets/images/bz7.png')
                    },{
                        title: '日志追踪',
                        img: require('../assets/images/bz8.png')
                    }],
                    [{
                        title: '双机容错',
                        img: require('../assets/images/bz9.png')
                    },{
                        title: '数据备份',
                        img: require('../assets/images/bz10.png')
                    },{
                        title: '灾难恢复',
                        img: require('../assets/images/bz11.png')
                    },{
                        title: '数据存储(基于RAID的存储技术)',
                        img: require('../assets/images/bz12.png')
                    }],
                    [{
                        title: '防火墙',
                        img: require('../assets/images/bz13.png')
                    },{
                        title: '入侵检测',
                        img: require('../assets/images/bz14.png')
                    },{
                        title: '漏洞扫描',
                        img: require('../assets/images/bz15.png')
                    },{
                        title: '物理隔离',
                        img: require('../assets/images/bz16.png')
                    }],
                ],
                businessIndex: 0,
                securityIndex: 0,
                screenWidth: '',
                screenHeight: '',
            }
        },
        methods: {
            selectSecurity(index) {
                this.securityIndex = index
            },
            businessSelect(index){
                this.businessIndex = index
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
    .app-page {
        @include page-style;

        .business {
            width: 100%;
            height: 1000px;
            background-color: #ffffff;

            .center {
                width: 1300px;
                margin: 0 auto;

                .title {
                    width: 100%;
                    text-align: center;
                    font-size: 34px;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                    padding-top: 80px;
                    padding-bottom: 50px;
                }

                .content {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                    .left {
                        width: 840px;
                        height: 840px;
                        background-image: url("../assets/images/circle0.png");

                        img {

                        }
                    }

                    .middle {
                        height: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }

                    .right {
                        width: 350px;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-between;


                        .item:nth-child(9), .item:nth-child(10) {
                            margin-bottom: 0;
                        }
                        .selected{
                            .text {
                                font-size: 24px;
                                font-weight: 400;
                                color: #004CE5 !important;
                                margin-left: 10px;
                            }
                            .hidden {
                                display: block !important;
                            }
                            .visible {
                                display: none !important;
                            }
                        }
                        .item:hover {
                            .text {
                                font-size: 24px;
                                font-weight: 400;
                                color: #004CE5;
                                margin-left: 10px;
                            }

                            .hidden {
                                display: block;
                            }

                            .visible {
                                display: none;
                            }
                        }

                        .item {
                            width: 50%;
                            cursor: pointer;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            margin-bottom: 68px;

                            .text {
                                font-size: 24px;
                                font-weight: 400;
                                color: rgba(51, 51, 51, 1);
                                margin-left: 10px;
                            }

                            .hidden {
                                display: none;
                            }
                        }

                    }
                }
            }
        }

        .progress {
            width: 100%;
            min-width: 1300px;
            background-color: #f4f5f8;

            .center {
                margin: 0 auto;
                width: 1300px;
                height: 864px;

                .title {
                    width: 100%;
                    text-align: center;
                    font-size: 34px;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                    padding-top: 80px;
                    padding-bottom: 71px;
                }
            }
        }

        .jfbz {
            width: 100%;
            min-width: 1300px;
            background-color: #f4f5f8;
            background-image: url("../assets/images/jfbz2.png");
            @include back-img-center;

            .center {
                margin: 0 auto;
                width: 1300px;
                height: 778px;

                .title {
                    width: 100%;
                    text-align: center;
                    font-size: 34px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 1);
                    padding-top: 80px;
                    padding-bottom: 71px;
                }

                .items {
                    height: 295px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-end;

                    .item:nth-child(2n) {
                        align-self: flex-start;
                    }

                    .item:hover {
                        .bottom {
                            background-color: #004ce5;
                            color: #ffffff;
                        }
                    }

                    .item {
                        cursor: pointer;
                        width: 220px;
                        height: 265px;
                        background: rgba(255, 255, 255, 1);
                        display: flex;
                        flex-direction: column;
                        position: relative;

                        .top {
                            height: 50%;
                            width: 100%;
                            overflow: hidden;

                            img {
                                width: 100%;
                            }
                        }

                        .middle {
                            position: absolute;
                            top: calc(50% - 28px);
                            left: calc(50% - 28px);
                            width: 56px;
                            height: 56px;
                            background: rgba(255, 255, 255, 1);
                            box-shadow: 0px 8px 20px 0px rgba(24, 94, 224, 0.15);
                            border-radius: 50%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .bottom {
                            width: 100%;
                            height: 50%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 24px;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: rgba(51, 51, 51, 1);
                            padding-top: 10px;
                            box-sizing: border-box;
                        }
                    }
                }
            }
        }

        .bottom-box {
            width: 100%;
            min-width: 1300px;
            background-color: #ffffff;
            background-image: url("../assets/images/btm2.png");
            background-repeat: no-repeat;
            background-position: right;

            .center {
                width: 1300px;
                height: 1123px;
                margin:  0 auto;
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                .system-security {
                    height: 683px;
                    background-image: url("../assets/images/xtaq.png");
                    @include back-img-center;
                    min-width: 1300px;
                    box-shadow: 0px 3px 62px 0px rgba(106, 122, 156, 0.3);
                    position: relative;
                    top: -132px;
                    display: flex;
                    align-items: flex-end;
                    flex-direction: column;

                    .center-title {
                        width: 1230px;
                        text-align: center;
                        padding: 60px 0;
                        font-size: 34px;
                        font-weight: 500;
                        color: rgba(51, 51, 51, 1);
                    }

                    .center-center {
                        width: 1230px;
                        height: 441px;
                        margin-right: 70px;
                        border: 1px solid rgba(214, 220, 233, .7);
                        display: flex;
                        flex-direction: row;

                        .left {
                            width: 266px;
                            display: flex;
                            flex-direction: column;
                            padding: 81px 0;
                            justify-content: space-between;
                            align-items: center;

                            .left-item {
                                cursor: pointer;
                                font-size: 20px;
                                font-weight: 400;
                                color: rgba(51, 51, 51, 1);
                                padding-left: 20px;
                                border-left: 4px solid rgba(0, 76, 229, 0);
                            }

                            .selected {
                                border-left: 4px solid #004CE5;
                                color: #004CE5;
                            }
                        }

                        .middle {
                            margin: auto 0;
                            width: 1px;
                            height: 233px;
                            background: rgba(229, 229, 229, 1);
                        }

                        .right {
                            flex-grow: 1;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                            align-items: center;

                            .right-item {
                                width: 25%;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                flex-shrink: 0;

                                .text {
                                    margin-top: 30px;
                                    font-size: 20px;
                                    font-weight: 400;
                                    color: rgba(51, 51, 51, 1);
                                }
                            }
                        }
                    }
                }
                .technology-support{
                    position: relative;
                    top: -40px;
                    width: 1300px;
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
    }

</style>



























