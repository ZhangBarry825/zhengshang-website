<template>
    <div class="app-page">
        <Header :menu="1"></Header>
        <Background :type-index="4"></Background>
        <div class="business">
            <div class="center">
                <div class="title">可开发行业</div>
                <div class="content">
                    <div class="left">
                        <img :src="businessList[businessIndex].img" alt="">
                    </div>
                    <div class="middle">
                        <img src="../../assets/images/l.png" alt="">
                    </div>
                    <div class="right">
                        <div class="item active-item" v-for="(item,index) in businessList" :class="businessIndex==index?'selected':''" @mouseenter="businessSelect(index)">
                            <img class="visible" :src="item.img1" alt="">
                            <img class="hidden" :src="item.img0" alt="">
                            <div class="text">{{item.title}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="progress">
            <div class="center">
                <div class="title">APP开发流程</div>
                <img :src="appDevProgress" alt="">
            </div>
        </div>
        <div class="jfbz">
            <div class="center">
                <div class="title">交付标准</div>
                <div class="items">
                    <div :class="'item active-jf'+index" v-for="(item,index) in payStandard">
                        <div class="top">
                            <img :src="item.backImg" alt="">
                        </div>
                        <div class="middle">
                            <img :src="item.logo" alt="">
                        </div>
                        <div class="bottom">{{item.title}}</div>
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
                            <div class="left-item" v-for="(item,index) in systemSecurityList" :class="securityIndex==index?'selected':''" @click="selectSecurity(index)">
                                {{item.title}}
                            </div>
                        </div>
                        <div class="middle"></div>
                        <div class="right">
                            <div v-for="(item,index) in systemSecurityList[securityIndex].children" class="right-item">
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
                        <div class="item" v-for="item in technologySupportList">
                            <div class="img"><img :src="item.img" class="item-img" alt=""></div>
                            <div class="item-title">{{item.title}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../../components/Header";
    import Background from "../../components/Background";    import Footer from "../../components/Footer";
    import {appPage} from "../../../public/MockData";


    export default {
        name: "Application",
        components: {
            Header: Header,
            Background: Background,
            Footer
        },
        data() {
            return {
                businessList:appPage.businessList,
                appDevProgress:appPage.appDevProgress,
                payStandard:appPage.payStandard,
                systemSecurityList:appPage.systemSecurityList,
                technologySupportList:appPage.technologySupportList,
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
            let that = this
            that.$ami('.active-item',200,'right','50%',.8,true)

            setTimeout(()=>{
                that.$ami('.active-jf0',0,'top','50%',.8,true)
                that.$ami('.active-jf1',0,'bottom','50%',.8,true)
                that.$ami('.active-jf2',0,'top','50%',.8,true)
                that.$ami('.active-jf3',0,'bottom','50%',.8,true)
                that.$ami('.active-jf4',0,'top','50%',.8,true)
            },200)

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
                        background-image: url("../../assets/images/circle0.png");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                        img {

                        }
                    }

                    .middle {
                        height: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-right: 25px;
                    }

                    .right {
                        width: 320px;
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
                        .item:nth-child(2n){
                            justify-content: flex-end;
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
            background-image: url("../../assets/images/jfbz2.png");
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
                        .top{
                            img{
                                transform: scale(1.2);
                            }
                        }
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
                                transition: all .5s;
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
                            transition: all .5s;
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
            background-image: url("../../assets/images/btm2.png");
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
                    background-image: url("../../assets/images/xtaq.png");
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
                                cursor: pointer;
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
                            .right-item:hover{
                                img{
                                    transition: all 1.5s;
                                    transform: rotateY(540deg);
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
                            cursor: pointer;
                            width: 287px;
                            display: flex;
                            flex-direction: column;
                            .img{
                                width:287px;
                                height:201px;
                                overflow: hidden;
                                .item-img{
                                    transition: all 1s;
                                    width:100%;
                                    height:100%;
                                }
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
                        .item:hover{
                            .item-img{
                                transform: scale(1.2);
                            }
                        }
                    }
                }
            }

        }
    }

</style>



























