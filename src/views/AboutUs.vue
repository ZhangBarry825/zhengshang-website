<template>
    <div class="us-page">
        <Header :menu="4"></Header>
        <Background :type-index="8" :show-scroll="false"></Background>
        <div class="gray">
            <div class="center">
                <div class="data active-data">
                    <div class="item">
                        <img src="../assets/images/g1.png" alt/>
                        <div class="text">
                            <animate-number
                                    from="1"
                                    :to="config.first"
                                    :key="config.first"
                                    duration="2000"
                                    easing="easeOutQuad"
                                    ref="myNum">
                            </animate-number>
                            年项目开发经验
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/images/g2.png" alt/>
                        <div class="text">
                            <animate-number
                                    from="1"
                                    :to="config.second"
                                    :key="config.second"
                                    duration="2000"
                                    easing="easeOutQuad"
                                    ref="myNum">
                            </animate-number>
                            人技术团队
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/images/g3.png" alt/>
                        <div class="text">
                            <animate-number
                                    from="1"
                                    :to="config.third"
                                    :key="config.third"
                                    duration="2000"
                                    easing="easeOutQuad"
                                    ref="myNum">
                            </animate-number>
                            +合作客户
                        </div>
                    </div>
                </div>
                <div class="introduction">
                    <div class="center-title">关于我们</div>
                    <div class="center-title-en active-about1">ABOUT US</div>
                    <div class="content">
                        <div class="left active-about2" @click="openDialog">
                            <div class="img" :style="'background-image: url('+aboutus.img+')'"></div>
                        </div>
                        <div class="right active-about3">
                            <div class="text">{{aboutus.content}}</div>
                            <div class="more">
                                <img @click="openDialog" src="../assets/images/right-blue2.png" alt/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="management-idea">
                    <div class="center-title">经营理念</div>
                    <div class="content">
                        <div class="left">
                            <div class="left-item active-left">
                                <div class="line1">
                                    <div class="img">
                                        <img src="../assets/images/jy1.png" alt/>
                                    </div>
                                </div>
                                <div class="line2">{{idea[0].key}}</div>
                                <div class="line3">{{idea[0].value}}</div>
                            </div>
                            <div class="left-item active-left">
                                <div class="line1">
                                    <div class="img">
                                        <img src="../assets/images/jy2.png" alt/>
                                    </div>
                                </div>
                                <div class="line2">{{idea[1].key}}</div>
                                <div class="line3">{{idea[1].value}}</div>
                            </div>
                        </div>
                        <div class="middle active-bottom">
                            <img src="../assets/images/jyln.png" alt/>
                        </div>
                        <div class="right">
                            <div class="right-item active-right">
                                <div class="line1">
                                    <div class="img">
                                        <img src="../assets/images/jy3.png" alt/>
                                    </div>
                                </div>
                                <div class="line2">{{idea[2].key}}</div>
                                <div class="line3">{{idea[2].value}}</div>
                            </div>
                            <div class="right-item active-right">
                                <div class="line1">
                                    <div class="img">
                                        <img src="../assets/images/jy4.png" alt/>
                                    </div>
                                </div>
                                <div class="line2">{{idea[3].key}}</div>
                                <div class="line3">{{idea[3].value}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="white">
            <div class="center">
                <div class="center-title">公司环境</div>
                <div class="images">
                    <div class="left">
                        <div class="left-top">
                            <div class="left-top-left active-pic0" :style="'background-image: url('+environment.img1+')'"></div>
                            <div class="left-top-right">
                                <div class="left-top-right-item active-pic1" :style="'background-image: url('+environment.img2+')'"></div>
                                <div class="left-top-right-item active-pic2" :style="'background-image: url('+environment.img3+')'"></div>
                            </div>
                        </div>
                        <div class="left-down active-pic3" :style="'background-image: url('+environment.img4+')'"></div>
                    </div>
                    <div class="right">
                        <div class="right-item active-pic4" :style="'background-image: url('+environment.img5+')'"></div>
                        <div class="right-item active-pic5" :style="'background-image: url('+environment.img6+')'"></div>
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
    import Background from "../components/Background";
    import {aboutUsapi} from '../utils/api'

    export default {
        name: "AboutUs",
        components: {
            Header,
            Footer,
            Background,

        },
        data() {
            return {
                aboutus: {},
                idea: [{key: ''}, {key: ''}, {key: ''}, {key: ''}],
                environment: {},
                config: {
                    first: 0,
                    second: 0,
                    third: 0,
                }
            }
        },
        mounted() {
            this.retrieveData()
            let that = this
            that.$ami('.active-data', 0, 'top', '0%', 1, true, () => {
                //console.log('123')
                //console.log( that.$refs.myNum)
                that.$refs.myNum.start()
            });

            that.$ami('.active-about1',300,'top','100%',1,true)
            that.$ami('.active-about2',300,'left','30%',1,true)
            that.$ami('.active-about3',300,'right','30%',1,true)

            that.$ami('.active-left',300,'left','30%',1,true)
            that.$ami('.active-right',300,'right','30%',1,true)
            that.$ami('.active-bottom',300,'bottom','30%',1,true)

            setTimeout(()=>{
                that.$ami('.active-pic0',0,'left','30%',1,true)
                that.$ami('.active-pic1',0,'top','30%',1,true)
                that.$ami('.active-pic2',0,'bottom','0%',.5,true)
                that.$ami('.active-pic3',0,'bottom','30%',1,true)
                that.$ami('.active-pic4',0,'right','30%',1,true)
                that.$ami('.active-pic5',0,'right','30%',1,true)

            },200)

        },
        methods: {
            openDialog(){
              this.$dia()
            },
           retrieveData() {
                aboutUsapi().then(res=>{
                    let data= res.data
                    this.aboutus = data.aboutus
                    this.idea = data.idea
                    this.environment = data.environment
                    //console.log(data.config,'11111')
                    this.config.first = parseInt(data.config.first)
                    this.config.second = parseInt(data.config.second)
                    this.config.third = parseInt(data.config.third)
                    //console.log(data, "关于我们")
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .us-page {
        @include page-style;
        background-color: #f4f5f8;
        overflow: hidden;

        .gray {
            z-index: 2;
            width: 100%;
            height: 1863px;
            background-color: #f4f5f8;
            background-image: url('../assets/images/gywmb.png');
            @include back-img-center;
            background-size: 100% 60%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .center {
                z-index: 2;
                width: 1300px;

                .data {
                    position: relative;
                    top: -110px;
                    z-index: 2;
                    width: 100%;
                    height: 364px;
                    background: #ffffff;
                    display: flex;
                    justify-content: space-around;

                    .item {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        .text {
                            margin-top: 47px;
                            font-size: 24px;
                            font-weight: 400;
                            color: #333333;
                        }
                    }
                }

                .introduction {
                    position: relative;
                    top: -20px;
                    width: 1300px;

                    .center-title {
                        width: 100%;
                        text-align: center;
                        font-size: 34px;
                        font-weight: 500;
                        color: #333333;
                        margin-bottom: 165px;
                    }

                    .center-title-en {
                        z-index: 4;
                        width: 271px;
                        height: 116px;
                        background: #014ce5;
                        position: absolute;
                        left: 519px;
                        margin-top: -59px;
                        font-size: 34px;
                        font-weight: bold;
                        color: #ffffff;
                        line-height: 58px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        box-sizing: border-box;
                    }

                    .content {
                        width: 100%;
                        min-width: 1300px;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;

                        .left {
                            cursor: pointer;
                            width: 572px;
                            height: 461px;
                            position: absolute;
                            margin-top: -80px;
                            left: 0;
                            overflow: hidden;
                            z-index: 3;
                            .img{
                                transition: all 1s;
                                width: 100%;
                                height: 100%;
                                @include back-img-center;
                            }
                            .img:hover{
                                transform: scale(1.2);
                            }
                        }

                        .right {
                            z-index: 1;
                            width: 829px;
                            height: 491px;
                            background: #ffffff;
                            padding: 115px 49px 0 152px;
                            box-sizing: border-box;

                            .text {
                                font-size: 16px;
                                font-weight: 400;
                                color: #333333;
                                line-height: 38px;
                                white-space: pre-line;
                            }

                            .more {
                                margin-top: 20px;
                                width: 100%;
                                display: flex;
                                justify-content: flex-end;

                                img {
                                    cursor: pointer;
                                    width: 37px;
                                    height: 12px;
                                }
                            }
                        }
                    }
                }

                .management-idea {
                    position: relative;
                    top: -20px;
                    width: 1300px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 100px 0;
                    box-sizing: border-box;

                    .center-title {
                        width: 100%;
                        text-align: center;
                        font-size: 34px;
                        font-weight: 500;
                        color: #333333;
                        margin-bottom: 67px;
                    }

                    .content {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;

                        .left {
                            width: 369px;
                            height: 530px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;

                            .left-item {
                                width: 100%;
                                display: flex;
                                flex-direction: column;

                                .line1 {
                                    width: 100%;
                                    display: flex;
                                    justify-content: flex-end;

                                    .img {
                                        width: 66px;
                                        height: 66px;
                                        background: #ffffff;
                                        box-shadow: 0px 8px 30px 0px rgba(85, 113, 216, 0.15);
                                        border-radius: 50%;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                    }
                                }

                                .line2 {
                                    width: 100%;
                                    text-align: right;
                                    font-size: 24px;
                                    font-weight: 500;
                                    color: #333333;
                                    margin-top: 27px;
                                    margin-bottom: 31px;
                                }

                                .line3 {
                                    width: 100%;
                                    text-align: right;
                                    font-size: 16px;
                                    font-weight: 500;
                                    color: #9eaac3;
                                    line-height: 24px;
                                    @include line-hidden(3);
                                }
                            }
                        }

                        .right {
                            width: 369px;
                            height: 530px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;

                            .right-item {
                                width: 100%;
                                display: flex;
                                flex-direction: column;

                                .line1 {
                                    width: 100%;
                                    display: flex;
                                    justify-content: flex-start;

                                    .img {
                                        width: 66px;
                                        height: 66px;
                                        background: #ffffff;
                                        box-shadow: 0px 8px 30px 0px rgba(85, 113, 216, 0.15);
                                        border-radius: 50%;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                    }
                                }

                                .line2 {
                                    width: 100%;
                                    text-align: left;
                                    font-size: 24px;
                                    font-weight: 500;
                                    color: #333333;
                                    margin-top: 27px;
                                    margin-bottom: 31px;
                                }

                                .line3 {
                                    width: 100%;
                                    text-align: left;
                                    font-size: 16px;
                                    font-weight: 500;
                                    color: #9eaac3;
                                    line-height: 24px;
                                    @include line-hidden(3);
                                }
                            }
                        }
                    }
                }
            }
        }

        .white {
            width: 100%;
            background: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;

            .center {
                width: 1300px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 80px 0;
                box-sizing: border-box;

                .center-title {
                    width: 100%;
                    text-align: center;
                    font-size: 34px;
                    font-weight: 500;
                    color: #333333;
                    margin-bottom: 67px;
                }

                .images {
                    width: 100%;
                    height: 830px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    .left {
                        width: 860px;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        .left-top {
                            width: 100%;
                            height: 510px;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;

                            .left-top-left {
                                width: 426px;
                                height: 100%;
                                @include back-img-center;
                            }

                            .left-top-right {
                                width: 395px;
                                height: 100%;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;

                                .left-top-right-item {
                                    width: 100%;
                                    height: 234px;
                                    justify-content: space-between;
                                }
                            }
                        }

                        .left-down {
                            width: 860px;
                            height: 276px;
                            @include back-img-center;
                        }
                    }

                    .right {
                        width: 395px;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        .right-item {
                            width: 395px;
                            height: 392px;
                            @include back-img-center;
                        }
                    }
                }
            }
        }
    }
</style>
