<template>
    <div class="header-page " :class="{'isFixed':isFixed}" @mouseleave="hideMenus">
        <div class="center">
            <div class="left">
                <img :src="isFixed?logo1:logo" alt="">
            </div>
            <div class="right">
                <div class="item" :class="{'selected':menu==0}" @mouseover="showMenus">
                    <span>首页</span>
                    <div class="border"></div>
                </div>
                <div class="item" :class="{'selected':menu==1}" @mouseover="showMenus">
                    <span>业务领域</span>
                    <div class="border"></div>
                </div>
                <div class="item" :class="{'selected':menu==2}" @mouseover="showMenus">
                    <span>客户案例</span>
                    <div class="border"></div>
                </div>
                <div class="item" :class="{'selected':menu==3}" @mouseover="showMenus">
                    <span>新闻中心</span>
                    <div class="border"></div>
                </div>
                <div class="item" :class="{'selected':menu==4}" >
                    <span>关于我们</span>
                    <div class="border"></div>
                </div>
                <div class="item" :class="{'selected':menu==5}" >
                    <span>联系我们</span>
                    <div class="border"></div>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div v-if="isMenuShow" class="menu-tag">
                <div class="menu-center">
                    <div class="center-left">
                        <div class="item-title">业务领域</div>
                        <div class="lists">
                            <div class="list" v-for="item in businessItems">
                                <div class="list-title">
                                    <div class="dot"></div>
                                    <div class="text">{{item.title}}</div>
                                </div>
                                <div class="list-content">
                                    <div class="list-item" v-for="item2 in item.items">{{item2}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="center-right">
                        <div class="right-top">
                            <div class="right-left">
                                <div class="item-title">客户案例</div>
                                <div class="right-items">
                                    <div class="item" v-for="item in caseList">{{item}}</div>
                                </div>
                            </div>
                            <div class="right-left">
                                <div class="item-title">新闻中心</div>
                                <div class="right-items">
                                    <div class="item" v-for="item in newsList">{{item}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="right-bottom">
                            <img src="../assets/images/dianhua.png" alt="">
                            <div class="number">0371-55150821</div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            menu: {
                type: Number,
                default: -1
            }
        },
        data() {
            return {
                logo: require('../assets/images/logo.png'),
                logo1: require('../assets/images/logo1.png'),
                isFixed: false,
                isMenuShow: false,
                businessItems: [
                    {
                        title: 'APP开发',
                        items: ['社交', '交友', '跑腿', '直播', '教育', '外卖', '团购', '医疗',]
                    },
                    {
                        title: '系统集成',
                        items: ['ERP企业管理系统', '报表管理系统', 'CRM客户管理系统', '日程管理系统', '客户管理系统', '项目管理系统']
                    },
                    {
                        title: '小程序开发',
                        items: ['展示小程序', '平台直播', '商城小程序       ', '相亲交友', '社区团购', '其他']
                    },
                    {
                        title: '政务云',
                        items: ['政府OA办公系统', '档案管理系统', '人事管理系统', '采购管理系统', '流程管理系统', '会议管理系统']
                    },
                    {
                        title: '网站建设',
                        items: ['企业官网', '行业门户     ', '社区论坛', '电商网站']
                    },
                    {
                        title: '物联网',
                        items: ['人工智能', '人脸识别     ', '硬件设备', '语音系统']
                    }
                ],
                caseList: ['APP开发', '小程序开发', '网站建设', '系统集成', '物联网', '政务云'],
                newsList: ['公司新闻', '项目签约', '行业动态', '技术专栏']
            }
        },
        methods: {
            showMenus() {
                this.isMenuShow = true
            },
            hideMenus() {
                this.isMenuShow = false
            },
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
                this.isFixed = scrollTop > 0 ? true : false;  // 如果滚动到顶部了，this.isFixed就为true
                console.log(this.isFixed)
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped lang="scss">
    .isFixed {
        position: fixed !important;
        background-color: #ffffff;
        box-shadow: 0 8px 20px 0 rgba(167, 176, 208, 0.4);
        z-index: 999 !important;
        .center {
            .right {
                .item {
                    span {
                        color: #333333 !important;
                    }
                    .border {
                        background: #014CE5 !important;
                        opacity: 0;
                    }
                }
                .selected{
                    span {
                        color: #014CE5 !important;
                    }
                    .border {
                        opacity: 1;
                    }
                }
            }
        }
    }

    .header-page {
        transition: all .6s;
        position: fixed;
        z-index: 2;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;

        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }

        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
        {
            opacity: 0;
        }

        .center {
            width: 1300px;
            padding: 19px 0;
            margin: 0 auto;
            display: flex;
            flex-direction: revert;
            justify-content: space-between;

            .left {
                img {
                    width: 204px;
                    height: 62px;
                }
            }

            .right {
                width: 70%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;


                .item {
                    cursor: pointer;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    span {
                        font-size: 18px;
                        color: #ffffff;
                        margin: 13px 0;
                    }

                    .border {
                        width: 34px;
                        height: 4px;
                        background: #fff;
                        border-radius: 2px;
                        opacity: 0;
                    }
                }

                .selected {
                    .border {
                        opacity: 1;
                    }
                }
            }
        }

        .menu-tag {
            z-index: 99 !important;
            width: 100%;
            background-color: #ffffff;


            .menu-center {
                width: 1300px;
                margin: 0 auto;
                height: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .center-left {
                    height: 100%;
                    width: 50%;
                    padding-right: 80px;
                    box-sizing: border-box;

                    .item-title {
                        width: 206px;
                        border-bottom: 2px solid #DDDDDD;
                        padding: 29px 0;
                        font-size: 24px;
                        font-weight: bold;
                        color: rgba(51, 51, 51, 1);
                        line-height: 23px;
                        margin-bottom: 24px;
                    }


                    .lists {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        flex-wrap: wrap;

                        .list {
                            width: 45%;
                            display: flex;
                            flex-direction: column;
                            margin-bottom: 29px;

                            .list-title:hover {
                                .text {
                                    color: rgba(24, 94, 224, 1);
                                }
                            }

                            .list-title {
                                width: 100%;
                                display: flex;
                                align-items: center;
                                margin-bottom: 21px;

                                .dot {
                                    width: 8px;
                                    height: 8px;
                                    background: rgba(24, 94, 224, 1);
                                    border-radius: 50%;
                                }

                                .text {
                                    cursor: pointer;
                                    margin-left: 6px;
                                    font-size: 20px;
                                    font-weight: 500;
                                    color: rgba(51, 51, 51, 1);
                                    line-height: 23px;
                                }
                            }

                            .list-content {
                                display: flex;
                                flex-direction: row;
                                justify-content: space-between;
                                flex-wrap: wrap;

                                .list-item {
                                    cursor: pointer;
                                    font-size: 16px;
                                    font-weight: 400;
                                    color: rgba(51, 51, 51, 1);
                                    line-height: 23px;
                                    min-width: 33.3%;
                                    margin-bottom: 15px;
                                    white-space: pre-wrap;
                                }

                                .list-item:hover {
                                    color: rgba(24, 94, 224, 1);
                                }
                            }

                        }
                    }
                }

                .center-right {
                    height: 100%;
                    width: 50%;
                    padding-left: 80px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;

                    .right-top {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;

                        .right-left {
                            .item-title {
                                width: 206px;
                                border-bottom: 2px solid #DDDDDD;
                                padding: 29px 0;
                                font-size: 24px;
                                font-weight: bold;
                                color: rgba(51, 51, 51, 1);
                                line-height: 23px;
                                margin-bottom: 24px;
                            }

                            .right-items {
                                display: flex;
                                flex-direction: column;

                                .item {
                                    width: 50% !important;
                                    cursor: pointer;
                                    font-size: 16px;
                                    font-weight: 400;
                                    color: rgba(51, 51, 51, 1);
                                    line-height: 23px;
                                    margin-bottom: 19px;
                                }

                                .item:hover {
                                    color: rgba(24, 94, 224, 1);
                                }
                            }
                        }
                    }

                    .right-bottom {
                        margin-top: 70px;
                        width: 100%;
                        display: flex;
                        align-items: center;

                        .number {
                            font-size: 46px;
                            font-weight: 500;
                            color: rgba(51, 51, 51, 1);
                            line-height: 60px;
                            margin-left: 57px;
                        }
                    }
                }
            }
        }
    }
</style>