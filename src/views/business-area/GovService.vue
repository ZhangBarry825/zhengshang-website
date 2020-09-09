<template>
  <div class="gov-page">
    <Header :menu="1"></Header>
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in textList" :key="index">
          <div class="context" :style="'background-image: url('+item.img+')'">
            <div class="context-center">
              <div class="line1">{{item.title}}</div>
              <div class="line2">{{item.content}}</div>
              <div class="line3" @click="openDialog">立即咨询</div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!--                <div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--                <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>
    </div>
    <div class="service-area">
      <div class="center">
        <div class="center-title">服务领域</div>
        <div class="items">
          <div :class="'item active-ser'+index" v-for="(item,index) in areaList" :key="index">
            <div class="line1">
              <img :src="item.url" alt />
            </div>
            <div class="line2">{{item.title}}</div>
            <div class="line3">{{item.description}}</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="solve-methods"
      :style="'background-image: url('+require('../../assets/images/jjfa.png')+')'"
    >
      <div class="center">
        <div class="center-title">行业解决方案</div>
        <div class="center-menus">
          <van-tabs v-model="activeIndex" @change="menuChange">
            <van-tab :title="item.title" v-for="(item,index) in tabList" :key="index"></van-tab>
          </van-tabs>
        </div>
        <div class="items">
          <div class="item" v-for="(item,index) in solveMethodsList" :key="index">
            <div class="line1">
              <img class="blue" :src="item.src0" alt />
              <img class="white" :src="item.src1" alt />
              <div class="text">{{item.title}}</div>
            </div>
            <div class="line2">{{item.description}}</div>
            <div class="line3" @click="openDialog">
              <div class="text">了解更多</div>
              <img class="blue" src="../../assets/images/r-b.png" alt />
              <img class="white" src="../../assets/images/r-w.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="function">
      <div class="center">
        <div class="center-title">智慧的政务功能方案</div>
        <div class="items">
          <div :class="'item active-fun'+index" v-for="(item,index) in functionList" :key="index">
            <div class="line1">
              <div class="img">
                <img :src="item.src" alt />
              </div>
            </div>
            <div class="line2">{{item.title}}</div>
            <div class="line3">{{item.description}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="special-method">
      <div class="center">
        <div class="center-title">方案特点及架构</div>
        <div class="items">
          <div :class="'item active-spe'+index" v-for="(item,index) in specialList" :key="index">
            <div class="line1">
              <img :src="item.logo" alt class="img" />
              <div class="text">{{item.title}}</div>
            </div>
            <div class="line2">{{item.description}}</div>
          </div>
        </div>
        <div class="center-title2">整体架构图</div>
        <div
          class="all-system-img"
          :style="'background-image: url('+require('../../assets/images/as.png')+')'"
        ></div>
      </div>
    </div>
    <div class="gray"></div>
    <div class="service-case">
      <div class="center">
        <div class="center-title">服务案例</div>
        <div class="items">
          <div
            class="item"
            v-for="(item,index) in serviceCaseList"
            :key="index"
            :style="'background-image: url('+item.src+')'"
          >
            <div class="back-gray">
              <div class="line1">{{item.title}}</div>
              <div class="line2">{{item.description}}</div>
            </div>
          </div>
        </div>
        <div class="more" @click="openDialog">
          <div class="text">了解更多</div>
          <img class="more1" src="../../assets/images/more1.png" alt />
          <img class="more0" src="../../assets/images/more0.png" alt />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import { govCloud } from "../../../public/MockData";
import { cloudapi } from "../../utils/api";

export default {
  name: "GovService",
  components: {
    Header: Header,
    Background: Background,
    Footer
  },
  data () {
    return {
      solveMethodsList: govCloud.solveMethodsList,
      functionList: govCloud.functionList,
      serviceCaseList: govCloud.serviceCaseList,
      specialList: govCloud.specialList,
      textList: govCloud.textList,
      areaList: govCloud.areaList,
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination',
        direction: 'horizontal',
        // observer: true,
        // observeParents: true,
      },
      activeIndex: 0,
      tabList: govCloud.tabList
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    openDialog(){
      this.$dia()
    },
    async getCarousel () {
      let { data } = await cloudapi()
      this.textList = data
      //console.log(data, "0001")
    },
    menuChange (name, title) {
      // console.log(name,title)
    }
  },
  mounted () {
    this.swiper.slideTo(1, 1000, false)
    this.getCarousel()

    let that = this
    that.$ami('.active-ser0',0,'top','10%',0,true)
    that.$ami('.active-ser1',100,'top','10%',0,true)
    that.$ami('.active-ser2',200,'top','10%',0,true)
    that.$ami('.active-ser3',300,'top','10%',0,true)

    that.$ami('.active-fun0',0,'top','10%',.8,true)
    that.$ami('.active-fun1',100,'top','10%',.8,true)
    that.$ami('.active-fun2',200,'top','10%',.8,true)
    that.$ami('.active-fun3',300,'top','10%',.8,true)
    that.$ami('.active-fun4',400,'top','10%',.8,true)
    that.$ami('.active-fun5',500,'top','10%',.8,true)
    that.$ami('.active-fun6',600,'top','10%',.8,true)
    that.$ami('.active-fun7',700,'top','10%',.8,true)

    that.$ami('.active-spe0',0,'left','10%',.8,true)
    that.$ami('.active-spe1',0,'right','10%',.8,true)
    that.$ami('.active-spe2',0,'left','10%',.8,true)
    that.$ami('.active-spe3',0,'right','10%',.8,true)



  }
}
</script>

<style scoped lang="scss">
.gov-page {
  @include page-style;
  background-color: #f7f8fa;

  .swiper {
    width: 100%;
    min-width: 1300px;
    height: 780px;

    .context {
      height: 780px;
      width: 100%;
      @include back-img-center;
      display: flex;
      justify-content: center;

      .context-center {
        width: 1300px;
        height: 780px;
        display: flex;
        flex-direction: column;
        margin-top: 217px;

        .line1 {
          font-size: 50px;
          font-weight: bold;
          color: #ffffff;
        }

        .line2 {
          width: 620px;
          font-size: 18px;
          font-weight: 400;
          color: #ffffff;
          margin-top: 80px;
          margin-bottom: 90px;
          line-height: 32px;
        }

        .line3 {
          cursor: pointer;
          width: 164px;
          height: 62px;
          border: 1px solid #ffffff;
          border-radius: 32px;
          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 20px;
          font-weight: 400;
          color: #ffffff;
        }
      }
    }

    /deep/ .swiper-pagination {
      bottom: 40px;

      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        margin: 0 15px;
      }

      .swiper-pagination-bullet-active {
        width: 12px;
        height: 12px;
        background: #ffffff;
        border-radius: 50%;
      }
    }
  }

  .service-area {
    width: 100%;
    display: flex;
    justify-content: center;

    .center {
      width: 1300px;
      padding-bottom: 100px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      .center-title {
        padding: 80px 0;
        font-size: 34px;
        font-weight: 500;
        width: 100%;
        text-align: center;
        color: #343434;
      }

      .items {
        width: 1300px;
        display: flex;
        justify-content: space-between;

        .item {
          width: 310px;
          height: 392px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          padding: 50px 30px;
          box-sizing: border-box;

          .line1 {
          }

          .line2 {
            font-size: 24px;
            font-weight: 500;
            color: #343434;
            margin-top: 51px;
            margin-bottom: 41px;
          }

          .line3 {
            font-size: 16px;
            font-weight: 400;
            color: #9eaac4;
            @include line-hidden(5);
          }
        }
      }
    }
  }

  .solve-methods {
    width: 100%;
    display: flex;
    justify-content: center;
    @include back-img-center;

    .center {
      width: 1300px;
      padding-bottom: 100px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      .center-title {
        padding: 80px 0;
        font-size: 34px;
        font-weight: 500;
        width: 100%;
        text-align: center;
        color: #ffffff;
      }

      .center-menus {
        width: 100%;

        /deep/ .van-tabs {
          .van-tabs__wrap {
            border-bottom: 1px solid #d6dce9;
            height: 55px;

            .van-tabs__nav {
              background-color: rgba(0, 0, 0, 0) !important;
            }

            .van-tab__text {
              font-size: 24px;
              font-weight: 400;
              overflow: visible;
            }

            .van-tab {
              margin-bottom: 30px;
              color: #ffffff;
            }

            .van-tab--active {
              color: #ffffff;
            }

            .van-tabs__line {
              background-color: #ffffff;
            }
          }
        }
      }

      .items {
        width: 1300px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding-top: 60px;
        box-sizing: border-box;

        .item:nth-child(1),
        .item:nth-child(2),
        .item:nth-child(3) {
          margin-bottom: 80px;
        }

        .item:hover {
          background-color: #004ce5;

          .line1 {
            img {
              margin-right: 15px;
            }

            .text {
              font-size: 20px;
              font-weight: 400;
              color: #ffffff;
            }

            .blue {
              display: none;
            }

            .white {
              display: block;
            }
          }

          .line2 {
            color: #ffffff;
          }

          .line3 {
            .text {
              color: #ffffff;
            }

            .blue {
              display: none;
            }

            .white {
              display: block;
            }
          }
        }

        .item {
          transition: all .5s;
          width: 370px;
          height: 278px;
          background: #ffffff;
          padding: 40px 30px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .line1 {
            width: 100%;
            display: flex;
            align-items: center;

            img {
              margin-right: 15px;
            }

            .text {
              font-size: 20px;
              font-weight: 400;
              color: #343434;
            }

            .blue {
              display: block;
            }

            .white {
              display: none;
            }
          }

          .line2 {
            font-size: 16px;
            font-weight: 400;
            color: #9eaac4;
            @include line-hidden(3);
          }

          .line3 {
            display: flex;
            flex-direction: row;
            align-items: center;
            cursor: pointer;

            .text {
              font-size: 14px;
              font-weight: 400;
              color: #024ce5;
            }

            img {
              margin-left: 9px;
            }

            .blue {
              display: block;
            }

            .white {
              display: none;
            }
          }
        }

        .item:nth-child(2),
        .item:nth-child(5) {
          margin: 0 calc(50% - 555px);
        }
      }
    }
  }

  .function {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;

    .center {
      width: 1300px;
      padding-bottom: 100px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      .center-title {
        padding: 80px 0;
        padding-bottom: 70px;
        font-size: 34px;
        font-weight: 500;
        width: 100%;
        text-align: center;
        color: #333333;
      }

      .items {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;

        .item {
          cursor: pointer;
          width: 310px;
          height: 352px;
          display: flex;
          flex-direction: column;
          border: 1px solid #ffffff;
          padding: 40px 30px;
          box-sizing: border-box;

          .line1 {
            width: 84px;
            height: 84px;
            box-shadow: 0px 3px 30px 0px rgba(105, 122, 156, 0.2);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .line2 {
            margin: 40px 0;
            font-size: 24px;
            font-weight: 500;
            color: #333333;
          }

          .line3 {
            font-size: 16px;
            font-weight: 400;
            color: #9da9c3;
            @include line-hidden(3);
            line-height: 26px;
          }
        }

        .item:nth-child(-n + 4) {
          margin-bottom: 20px;
        }

        .item:hover {
          border: 1px solid #004be5;
        }
      }
    }
  }

  .special-method {
    width: 100%;
    height: 1106px;
    display: flex;
    justify-content: center;
    background-color: white;
    background-image: url('../../assets/images/special.png');
    @include back-img-center;

    .center {
      width: 1300px;
      padding-bottom: 100px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      position: relative;
      .center-title {
        padding: 80px 0;
        font-size: 34px;
        font-weight: 500;
        width: 100%;
        text-align: center;
        color: #ffffff;
      }
      .items {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        .item {
          width: 628px;
          height: 207px;
          background: rgba(6, 25, 73, 0.7);
          display: flex;
          flex-direction: column;
          padding: 36px 41px;
          box-sizing: border-box;
          .line1 {
            display: flex;
            align-items: center;
            .text {
              margin-left: 20px;
              font-size: 24px;
              font-weight: 400;
              color: #ffffff;
            }
          }
          .line2 {
            margin-top: 40px;
            font-size: 14px;
            font-weight: 400;
            color: #ffffff;
            line-height: 24px;
            opacity: 0.7;
            @include line-hidden(2);
          }
        }
        .item:nth-child(2n) {
          margin-left: 44px;
        }
        .item:nth-child(-n + 2) {
          margin-bottom: 40px;
        }
      }
      .center-title2 {
        padding: 80px 0;
        font-size: 28px;
        font-weight: 500;
        width: 100%;
        text-align: center;
        color: #ffffff;
      }
      .all-system-img {
        position: absolute;
        width: 1300px;
        height: 663px;
        @include back-img-center;
        bottom: -369px;
        background-color: white;
      }
    }
  }
  .gray {
    width: 100%;
    height: 465px;
    background-color: #f7f8fa;
  }
  .service-case {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;

    .center {
      width: 1300px;
      padding-bottom: 100px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;

      .center-title {
        padding: 80px 0;
        padding-bottom: 70px;
        font-size: 34px;
        font-weight: 500;
        width: 100%;
        text-align: center;
        color: #333333;
      }
      .items {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .item {
          width: 586px;
          height: 323px;
          position: relative;
          .back-gray {
            padding: 70px 43px;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: rgba(2, 7, 20, 0.7);
            display: flex;
            flex-direction: column;
            align-items: center;
            .line1 {
              font-size: 24px;
              font-weight: 400;
              color: #fefefe;
            }
            .line2 {
              margin-top: 50px;
              font-size: 16px;
              font-weight: 400;
              color: #fefefe;
              line-height: 34px;
              @include line-hidden(3);
            }
          }
        }
      }
      .more {
        margin-top: 53px;
        width: 164px;
        height: 56px;
        border: 2px solid #004ce5;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .text {
          transition: all .5s;
          font-size: 16px;
          font-weight: 400;
          color: #004ce5;
        }
        img {
          transition: all .5s;
          margin-left: 10px;
          width: 26px;
          height: 9px;
        }
        .more1{
          display: block;
        }
        .more0{
          display: none;
        }

        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        outline: none;
        overflow: hidden;
        transition: color 0.4s ease-in-out;
      }
      .more::before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background-color: #004ce5;
        transform-origin: center;
        transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
        transition: transform 0.45s ease-in-out;
      }
      .more:hover {
        cursor: pointer;
        .text{
          color: #ffffff;
        }
        .more1{
          display: none;
        }
        .more0{
          display: block;
        }
      }
      .more:hover::before {
        transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
      }
    }
  }
}
</style>

















