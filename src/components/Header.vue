<template>
    <div class="header-page">
        <div class="center">
            <div class="left">
                <img src="../assets/images/logo.png" alt="">
            </div>
            <div class="right">
                <div class="item">
                    <span>首页</span>
                    <div class="border" v-if="menu==0"></div>
                </div>
                <div class="item">
                    <span>业务领域</span>
                    <div class="border" v-if="menu==1"></div>
                </div>
                <div class="item">
                    <span>客户案例</span>
                    <div class="border" v-if="menu==2"></div>
                </div>
                <div class="item">
                    <span>新闻中心</span>
                    <div class="border" v-if="menu==3"></div>
                </div>
                <div class="item">
                    <span>关于我们</span>
                    <div class="border" v-if="menu==4"></div>
                </div>
                <div class="item">
                    <span>联系我们</span>
                    <div class="border" v-if="menu==5"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props:{
            menu:{
                type:Number,
                default:-1
            }
        }
    }
</script>

<style scoped lang="scss">
.header-page{
    z-index: 2;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    .center{
        width: 1300px;
        padding: 19px 0;
        margin: 0 auto;
        display: flex;
        flex-direction: revert;
        justify-content: space-between;
        .left{
            img{
                width:204px;
                height:62px;
            }
        }
        .right{
            width: 70%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            .item{
                cursor: pointer;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                span{
                    font-size:18px;
                    color: #ffffff;
                    margin: 13px 0;
                }
                .border{
                    width:34px;
                    height:4px;
                    background:#fff;
                    border-radius:2px;

                }
            }
        }
    }
}
</style>