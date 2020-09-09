<template>
  <div class="home">
    <Header :menu="0"></Header>
    <div class="home-back">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in textList" :key="index">
          <div class="context">
            <div class="line1">{{item.title}}</div>
            <div class="line2">{{item.content}}</div>
            <div class="line3">
              <div class="text"></div>
              <img src="../assets/images/more-white.png" alt />
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!--                <div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--                <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>
    </div>
    <div class="our-service">
      <div class="float-back active-left" :style="'min-width:'+ (1300+halfMargin)+'px'"></div>
      <div class="center">
        <div class="center-title">我们的服务</div>
        <div class="items">
          <div class="item active-item2" v-for="(item,index) in serviceList" :key="index">
            <div class="img" :style="'background-image: url('+item.img+');'"></div>
            <div class="item-title">{{item.title}}</div>
            <div class="item-description">{{item.description}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="solve-methods">
      <div class="center">
        <div class="center-title">行业解决方案</div>
        <div class="items">
          <div :class="'item active-solve'+index" v-for="(item,index) in homeData.solution" v-if="index<3" :key="index" >
            <div class="item-title" :style="'background-image: url('+item.img+')'">
              <div class="title1">{{item.title}}</div>
              <div class="title2">{{item.content}}</div>
            </div>
            <div class="item-context">
              <div class="item-item" v-for="(itema,indexa) in item.config" :key="indexa">
                <div class="item-item-left">
                  <div class="dot"></div>
                </div>
                <div class="item-item-right">
                  <div class="line1">{{itema.key}}</div>
                  <div class="line2">{{itema.value}}</div>
                </div>
              </div>
            </div>
            <div class="more" @click="openDialog">
              <div class="text">了解更多</div>
              <img src="../assets/images/right-blue1.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project-process">
      <div class="center-back " :style="'width: '+(1300+halfMargin)+'px'">
        <div class="center active-left2">
          <div class="center-title">项目服务流程</div>
          <img class="active-item3" src="../assets/images/xmfwlc2.png" alt />
        </div>
      </div>
    </div>
    <div class="our-advantages">
      <div class="center">
        <div class="center-title">我们的优势</div>
        <div class="items">
          <div :class="'item active-top'+index" v-for="(item,index) in ourAdvantages" :key="index">
            <img :src="item.img" alt />
            <div class="text">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="service-customer">
      <div class="center">
        <div class="center-title">服务过的客户</div>
        <div class="content">
          <div class="content-item" v-for="(item,index) in serviceCustomerList" :key="index">
            <div class="line1 active-item1">
              <animate-number
                from="1"
                :to="item.number"
                duration="1500"
                easing="easeOutQuad"
                ref="myNum"
              ></animate-number>
              <div class="symbol">{{item.symbol}}</div>
            </div>
            <div class="line2">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="news-center">
      <div class="center">
        <div class="center-title">新闻中心</div>
        <div class="items">
          <div :class="'item active-news'+index" @click="$router.push({path: '/news-detail?id='+ item.id})" v-for="(item,index) in homeData.news" v-if="index<4" :key="index">
            <div class="left">
              <div class="img" :style="'background-image: url('+item.img+')'"></div>
            </div>
            <div class="right">
              <div class="line1">{{item.title}}</div>
              <div class="line2">{{item.ctime}}</div>
              <div class="line3">{{item.remark}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="partner">
      <div class="center">
        <div class="center-title">合作伙伴</div>
        <div class="items">
          <div
            v-for="(item, index) in homeData.partner"
            :key="index"
            :class="'item active-partner'+index"
            :style="'background-image: url('+item.img+')'"></div>
        </div>
      </div>
    </div>
    <div class="about-us">
      <div class="center">
        <div class="center-title">关于我们</div>
        <div class="center-title-en active-about1">{{'ABOUT US'||aboutus.title}}</div>
        <div class="content">
          <div class="left active-about2" @click="$router.push({path:'/about'})">
            <div class="img" :style="'background-image: url('+aboutus.img+')'"></div>
          </div>
          <div class="right active-about3">
            <div class="text">{{aboutus.content}}</div>
            <div class="more" @click="$router.push({path:'/about'})">
              <img @click="$router.push({path:'/about'})" src="../assets/images/right-blue2.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>

    <link rel='stylesheet' href='http://xuxusb3.cn/assets/css/index/cgwl_online.css'>
    <div class="cgwl-form" id="cgwl-kefu" >
      <i class="cgwl-icon"></i>
      <form class="cgwl-item" action="http://xuxusb3.cn/index/index/home?visiter_id=&visiter_name=&avatar=&business_id=9&groupid=0" method="post" target="_blank" >
        <input type="hidden" name="product" value=''>
        <input type="submit" value='在线咨询'>
      </form>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { homePageData } from "../../public/MockData";
import { homeapi } from '../utils/api'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      timer:'',
      textList: [],
      serviceList: homePageData.serviceList,
      ourAdvantages: homePageData.ourAdvantages,
      serviceCustomerList: homePageData.serviceCustomerList,
      screenWidth: '',
      screenHeight: '',
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination',
        direction: 'horizontal',
        // observer: true,
        // observeParents: true,
      },
      homeData: {},
      aboutus: {}
    }
  },
  computed: {
    halfMargin () {
      let value = (this.screenWidth - 1300) / 2
      if (value <= 0) {
        value = 0
      }
      return value
    },
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  created () {
    this.getCarousel()
  },
  methods: {
    //   获取轮播
    async getCarousel () {
      let { data } = await homeapi()
      this.homeData = data
      this.textList = data.carousel
      this.aboutus = data.aboutus
      //console.log(data, "首页")
    },
    openDialog(){
      this.$dia()
    },
    alertDialog () {
      this.timer =setInterval(() => {
        this.$dia()
      }, 60000)
    }
  },
  mounted () {
    let that = this
    this.swiper.slideTo(1, 1000, false)
    //咨询弹窗 30s
    this.alertDialog()

    that.$ami('.active-item1', 0, 'top', '0%', 1, true, () => {
      //console.log('123')
      that.$refs.myNum[0].start()
      that.$refs.myNum[1].start()
      that.$refs.myNum[2].start()
      that.$refs.myNum[3].start()
    });

    that.$ami('.active-item2',200,'top','10%',0,true)
    that.$ami('.active-left',0,'left','100%',1,true)
    that.$ami('.active-left2',0,'left','10%',1,true)

    setTimeout(()=>{
      that.$ami('.active-solve0',0,'bottom','20%',.2,true)
      that.$ami('.active-solve1',200,'bottom','20%',.2,true)
      that.$ami('.active-solve2',400,'bottom','20%',.2,true)
      that.$ami('.active-right',0,'right','30%',1,true)

      that.$ami('.active-partner0',0,'top','70%',.9,true)
      that.$ami('.active-partner1',100,'top','70%',.9,true)
      that.$ami('.active-partner2',200,'top','70%',.9,true)
      that.$ami('.active-partner3',300,'top','70%',.9,true)
      that.$ami('.active-partner4',400,'top','70%',.9,true)
      that.$ami('.active-partner5',0,'top','70%',.9,true)
      that.$ami('.active-partner6',100,'bottom','70%',.9,true)
      that.$ami('.active-partner7',200,'bottom','70%',.9,true)
      that.$ami('.active-partner8',300,'bottom','70%',.9,true)
      that.$ami('.active-partner9',400,'bottom','70%',.9,true)

      that.$ami('.active-news0',0,'left','10%',1,true)
      that.$ami('.active-news1',0,'right','10%',1,true)
      that.$ami('.active-news2',0,'left','10%',1,true)
      that.$ami('.active-news3',0,'right','10%',1,true)

      that.$ami('.active-top0',0,'top','10%',1,true)
      that.$ami('.active-top1',100,'top','10%',1,true)
      that.$ami('.active-top2',200,'top','10%',1,true)
      that.$ami('.active-top3',300,'top','10%',1,true)
      that.$ami('.active-top4',400,'top','10%',1,true)
      that.$ami('.active-top5',500,'top','10%',1,true)
      that.$ami('.active-top6',600,'top','10%',1,true)
      that.$ami('.active-top7',700,'top','10%',1,true)
    },300)
    that.$ami('.active-about1',300,'top','100%',1,true)
    that.$ami('.active-about2',300,'left','30%',1,true)
    that.$ami('.active-about3',300,'right','30%',1,true)


    // that.$ami('.active-item3',0,'top','10%',.5,true)

    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
      })();
    };

  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style lang="scss" scoped>
.home {
  @include page-style;
  height: 100%;
  background-color: #f4f5f8;
  overflow: hidden;

  .home-back {
    background-image: url('../assets/images/home-back.gif');
    @include back-img-center;
    width: 100%;
    min-width: 1300px;
    height: 1080px;

    .swiper-box {
      position: relative;
      top: 250px;

      .context {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .line1 {
          font-size: 70px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }

        .line2 {
          margin-top: 49px;
          margin-bottom: 115px;
          font-size: 14px;
          color: rgba(255, 255, 255, 1);
          max-width: 600px;
          line-height: 24px;
          text-align: center;
          @include line-hidden(3);
        }

        .line3 {
          width: 164px;
          height: 62px;
          border-radius: 31px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;


          background-color: rgba(254, 130, 56, 1);

          z-index: 1;
          position: relative;
          font-size: inherit;
          font-family: inherit;
          color: white;
          outline: none;
          border: none;
          overflow: hidden;
          transition: color 0.4s ease-in-out;

          img {
            width: 24px;
            height: 9px;
          }
        }
        .line3::before{
          content: '';
          z-index: -1;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1em;
          height: 1em;
          border-radius: 50%;
          background-color: #3cefff;
          transform-origin: center;
          transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
          transition: transform 0.45s ease-in-out;
        }
        .line3:hover {
          cursor: pointer;
          color: #161616;
        }
        .line3:hover::before {
          transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
        }
      }

      .swiper-pagination {
        z-index: 999;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: absolute;
        left: unset !important;
        right: 100px !important;
        width: unset !important;
        top: 50px;
        bottom: unset;

        /deep/ .swiper-pagination-bullet {
          margin: 15px 0 !important;
          width: 10px;
          height: 10px;
          background: #e3e3e3;
        }

        /deep/ .swiper-pagination-bullet-active {
          background: #ffffff;
          width: 12px;
          height: 12px;
        }
      }
    }
  }

  .our-service {
    height: 910px;
    width: 100%;
    margin-top: -130px;
    display: flex;
    justify-content: center;
    position: relative;

    .float-back {
      position: absolute;
      left: 0;
      height: 100%;
      width: 90%;
      background-color: #ffffff;
    }

    .center {
      z-index: 1;
      width: 1300px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80px 0;
      box-sizing: border-box;

      .center-title {
        font-size: 34px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        padding-bottom: 20px;
      }

      .items {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        justify-content: space-around;

        .item {
          cursor: pointer;
          transition: background-color .8s;
          width: 345px;
          height: 367px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px;
          box-sizing: border-box;
          border: 1px solid rgba(0, 0, 0, 0);

          .img {
            width: 126px;
            height: 142px;
            @include back-img-center;
          }

          .item-title {
            margin: 20px 0;
            font-size: 20px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }

          .item-description {
            max-width: 100%;
            font-size: 16px;
            font-weight: 400;
            color: rgba(158, 170, 195, 1);
            @include line-hidden(3);
          }
        }


        .item:hover {
          color: rgba(47,103,241,0.31);
          background-color: rgba(47,103,241,0.31);

          .img{
            transition: all 1.5s;
            transform: rotateY(540deg);
          }
        }
      }
    }
  }

  .solve-methods {
    width: 100%;
    display: flex;
    justify-content: center;

    .center {
      width: 1300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80px 0;
      padding-bottom: 350px;
      box-sizing: border-box;

      .center-title {
        font-size: 34px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }

      .items {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        .item {
          width: 381px;
          height: 528px;
          background: #ffffff;
          margin-top: 80px;
          display: flex;
          flex-direction: column;

          .item-title {
            width: 100%;
            height: 100px;
            @include back-img-center;
            padding: 24px 30px;
            box-sizing: border-box;
            background-image: url('../assets/images/hy1.png');

            .title1 {
              font-size: 24px;
              font-weight: 500;
              color: #ffffff;
            }

            .title2 {
              margin-top: 5px;
              font-size: 14px;
              font-weight: 400;
              color: #ffffff;
              opacity: 0.5;
            }
          }

          .item-context {
            width: 100%;
            display: flex;
            flex-direction: column;

            .item-item {
              width: 100%;
              height: 114px;
              padding: 30px;
              box-sizing: border-box;
              border-right: 4px solid #ffffff;
              display: flex;

              .item-item-left {
                width: 8px;
                height: 8px;

                .dot {
                  margin-top: 7px;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  background-color: #ff8338;
                }
              }

              .item-item-right {
                height: 100%;
                display: flex;
                width: calc(100% - 8px);
                flex-direction: column;
                justify-content: space-between;
                padding-left: 10px;

                .line1 {
                  max-width: 100%;
                  font-size: 20px;
                  font-weight: 400;
                  color: #333333;
                  @include line-hidden(1);
                }

                .line2 {
                  max-width: 100%;
                  font-size: 16px;
                  font-weight: 400;
                  color: #9eaac3;
                  @include line-hidden(1);
                }
              }
            }

            .item-item:hover {
              background-color: #f8faff;
              border-right: 4px solid #ff8338;
            }
          }

          .more {
            cursor: pointer;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            padding: 20px;
            box-sizing: border-box;

            .text {
              font-size: 14px;
              font-weight: 400;
              color: #014ce5;
            }

            img {
              width: 21px;
              height: 7px;
              margin: 0 9px;
            }
          }
        }

        .item:hover {
          box-shadow: 0px 3px 50px 0px rgba(106, 122, 156, 0.2);
        }
      }
    }
  }

  .project-process {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    position: relative;
    height: 671px;

    .center-back {
      height: 658px;
      position: absolute;
      right: 0;
      top: -270px;
      display: flex;
      justify-content: flex-start;
      background-image: url('../assets/images/xmfulc.png');
      @include back-img-center;

      .center {
        width: 1300px;
        padding-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .center-title {
          font-size: 34px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 83px;
        }
      }
    }
  }

  .our-advantages {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 130px 0;
    box-sizing: border-box;
    background-color: #ffffff;

    .center {
      width: 1300px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .center-title {
        font-size: 34px;
        font-weight: 500;
        color: #333333;
        padding-bottom: 71px;
        box-sizing: border-box;
      }

      .items {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

        .item {
          width: 280px;
          height: 255px;
          background: #ffffff;
          box-shadow: 0px 3px 50px 0px rgba(106, 122, 156, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .text {
            margin-top: 45px;
            font-size: 20px;
            font-weight: 400;
            color: #333333;
          }
        }
        .item:hover {
          cursor:pointer;
          color: rgba(47,103,241,0.31);

          img{
            transition: all 1.5s;
            transform: rotateY(540deg);
          }
        }

        .item:nth-child(1),
        .item:nth-child(2),
        .item:nth-child(3),
        .item:nth-child(4) {
          margin-bottom: 61px;
        }
      }
    }
  }

  .service-customer {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    background-image: url('../assets/images/fwkh.png');
    @include back-img-center;

    .center {
      width: 1300px;
      height: 581px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: url('../assets/images/fwkh1.png');
      background-repeat: no-repeat;
      background-position: -170px center;
      background-size: 75%;

      .center-title {
        font-size: 34px;
        font-weight: 500;
        color: #222222;
      }

      .content {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 150px;

        .content-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .line1 {
            font-size: 66px;
            font-weight: bold;
            color: #222222;
            display: flex;
            align-items: flex-end;

            .symbol {
              margin-bottom: 10px;
              font-size: 40px;
            }
          }

          .line2 {
            margin-top: 39px;
            font-size: 20px;
            font-weight: 400;
            color: #333333;
          }
        }
      }
    }
  }

  .news-center {
    width: 100%;
    height: 778px;
    display: flex;
    justify-content: center;
    background-color: #f4f5f8;
    background-image: url('../assets/images/nc.png');
    background-size: 100% 100%;
    padding-top: 77px;
    padding-bottom: 94px;
    box-sizing: border-box;
    overflow: hidden;

    .center {
      width: 1300px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .center-title {
        font-size: 34px;
        font-weight: 500;
        color: #ffffff;
        padding-bottom: 72px;
      }

      .items {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        .item:nth-child(1),
        .item:nth-child(2) {
          margin-bottom: 91px;
        }
        .item:hover{
          .img{
            transform: scale(1.2);
          }
        }
        .item {
          cursor: pointer;
          width: 628px;
          height: 207px;
          background: #ffffff;
          display: flex;
          flex-direction: row;
          box-shadow: 0px 3px 50px 0px rgba(0, 0, 0, 0.2);

          .left {
            width: 200px;
            height: 196px;
            margin-left: 20px;
            box-sizing: border-box;
            overflow: hidden;
            margin-top: -30px;
            .img {
              transition: all 1s;
              width: 200px;
              height: 196px;
              @include back-img-center;
            }
          }

          .right {
            width: calc(100% - 240px);
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: 20px;
            box-sizing: border-box;

            .line1 {
              font-size: 24px;
              font-weight: 400;
              color: #333333;
              @include line-hidden(1);
            }

            .line2 {
              font-size: 14px;
              font-weight: 400;
              color: #9eaac3;
              margin: 15px 0 20px 0;
            }

            .line3 {
              font-size: 14px;
              font-weight: 400;
              color: #333333;
              @include line-hidden(3);
            }
          }
        }
      }
    }
  }

  .partner {
    background-color: #f4f5f8;
    width: 100%;
    height: 490px;
    display: flex;
    justify-content: center;

    .center {
      width: 1300px;
      height: 100%;
      padding: 80px 0;
      box-sizing: border-box;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;

      .center-title {
        font-size: 34px;
        font-weight: 500;
        color: #333333;
      }

      .items {
        margin-top: 60px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 1010px;

        .item {
          width: 200px;
          height: 120px;
          border: 1px solid #dce8fe;
          display: flex;
          justify-content: center;
          align-content: center;
          background-position: center center;
          background-size: 80%;
          background-repeat: no-repeat;


          z-index: 1;
          position: relative;
          font-size: inherit;
          font-family: inherit;
          color: white;
          outline: none;
          overflow: hidden;
          cursor: pointer;
        }
        .item::after {
          content: '';
          z-index: -1;
          background-color: hsla(0, 0%, 100%, 0.2);
          position: absolute;
          top: -50%;
          bottom: -50%;
          width: 1.25em;
          transform: translate3d(-525%, 0, 0) rotate(35deg);
        }
        .item:hover::after {
          transition: transform 0.45s ease-in-out;
          transform: translate3d(200%, 0, 0) rotate(35deg);
        }

      }
    }
  }

  .about-us {
    width: 100%;
    min-width: 1300px;
    display: flex;
    justify-content: center;
    padding: 100px;
    box-sizing: border-box;

    .center {
      width: 1300px;
      position: relative;

      .center-title {
        width: 100%;
        text-align: center;
        font-size: 34px;
        font-weight: 500;
        color: #333333;
        margin-bottom: 165px;
      }

      .center-title-en {
        z-index: 3;
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
          z-index: 2;
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
  }
}
</style>












