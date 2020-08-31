<template>
    <div class="contact-page">
        <Header :menu="5"></Header>
        <Background :type-index="9" :show-scroll="false"></Background>
        <div class="map-box">

            <div class="back-white" :style="'width: '+(1300+marginWidth)+'px'"></div>
            <div class="center">
                <div class="left">
                    <div class="blue"></div>
                    <div class="map"></div>
                </div>
                <div class="right"></div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import Background from "../components/Background";
    export default {
       name: "Contact",
        components: {
            Header,
            Footer,
            Background,
        },
        data(){
          return{
              screenWidth: '',
              screenHeight: '',
          }
        },
        computed:{
            marginWidth(){
                return ((this.screenWidth-1300)/2)>0?((this.screenWidth-1300)*3/4):0
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
.contact-page{
    @include page-style;
    background-color: #f4f5f8;

    .map-box{
        width: 100%;
        height: 777px;
        display: flex;
        justify-content: center;
        position: relative;
        .back-white{
            background-color: #ffffff;
            right: 0;
            position: absolute;
            height: 777px ;
            justify-self: flex-end;
        }
        .center{
            width: 1300px;
            display: flex;
            justify-content: space-between;
            border: 1px solid red;
            z-index: 1;
            .left{
                width: 582px;
                position: relative;
                .blue{
                    width: 220px;
                    height: 512px;
                    background: #024CE5;
                }
                .map{
                    position: absolute;
                    width: 582px;
                    height: 512px;
                    top: 50px;
                    left: 46px;
                }
            }
            .right{
                width: 510px;
                display: flex;
                flex-direction: column;

            }
        }
    }

}
</style>













