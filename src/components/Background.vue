<template>
    <div class="background-page " ref="hhh" :class="typeIndex==0?'class0':typeIndex==1?'class1':typeIndex==2?'class2':typeIndex==3?'class3':typeIndex==4?'class4':''">
        <div class="center">
            <div class="left">
                <h2 class="text">{{typeIndex==0?"系统集成":typeIndex==1?"政务云":typeIndex==2?"新闻中心":typeIndex==3?"关于我们":typeIndex==4?"联系我们":""}}</h2>
                <div class="border"></div>
            </div>
            <div class="right"></div>
            <div class="scroller" @click="scrollTo"></div>
        </div>
        <div id="toHere"></div>
    </div>
</template>

<script>
    export default {
        name: "Background",
        props:{
            typeIndex:{
                type:Number,
                default:0
            }
        },
        data(){
            return{
                backImg00:require('../assets/images/xtjc.png'),
            }
        },
        methods:{
            scrollTo(){
                document.getElementById('toHere').scrollIntoView({ block: 'start', behavior: 'smooth' })
            }
        }
    }
</script>

<style scoped lang="scss">
    .class0{
        background-image: url("../assets/images/xtjc.png");
        .center{
            .right{
                width: 838px;
                height: 580px;
                background-image: url("../assets/images/xtjc2.png");
            }
        }
    }
    .class1{
        background-image: url("../assets/images/zwy.png");
        .center{
            .right{
                margin-top: 250px;
                width: 706px;
                height: 679px;
                background-image: url("../assets/images/zwy2.png");
            }
        }
    }
    .background-page{
        @include page-style;
        height: 780px;
        @include back-img-center;
        .center{
            width: 1300px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: relative;
            .left{
                display: flex;
                flex-direction: column;
                .text{
                    font-size:60px;
                    font-weight:800;
                    color:rgba(255,255,255,1);
                }
                .border{
                    width:126px;
                    height:14px;
                    background:rgba(255,255,255,1);
                    margin-top: 60px;
                }
            }
            .right{
                z-index: 9;
                @include back-img-center;
            }
            .scroller{
                z-index: 9;
                cursor: pointer;
                width:46px;
                height:46px;
                background:rgba(0,76,229,1);
                background-image: url("../assets/images/scroll.png");
                @include back-img-center;
                background-size: 26px 15px;
                position: absolute;
                left: 0;
                bottom: -25px;
            }
        }
    }

</style>