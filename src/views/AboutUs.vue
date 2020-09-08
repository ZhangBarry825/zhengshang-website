<template>
  <div class="us-page">
    <Header :menu="4"></Header>
    <Background :type-index="8" :show-scroll="false"></Background>
    <div class="gray">
      <div class="center">
        <div class="data">
          <div class="item">
            <img src="../assets/images/g1.png" alt />
            <div class="text">{{config.first}}</div>
          </div>
          <div class="item">
            <img src="../assets/images/g2.png" alt />
            <div class="text">{{config.second}}</div>
          </div>
          <div class="item">
            <img src="../assets/images/g3.png" alt />
            <div class="text">{{config.third}}</div>
          </div>
        </div>
        <div class="introduction">
          <div class="center-title">关于我们</div>
          <div class="center-title-en">ABOUT US</div>
          <div class="content">
            <div class="left" :style="'background-image: url('+aboutus.img+')'"></div>
            <div class="right">
              <div class="text">{{aboutus.content}}</div>
              <div class="more">
                <img src="../assets/images/right-blue2.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="management-idea">
          <div class="center-title">经营理念</div>
          <div class="content">
            <div class="left">
              <div class="left-item">
                <div class="line1">
                  <div class="img">
                    <img src="../assets/images/jy1.png" alt />
                  </div>
                </div>
                <div class="line2">{{idea[0].key}}</div>
                <div class="line3">{{idea[0].value}}</div>
              </div>
              <div class="left-item">
                <div class="line1">
                  <div class="img">
                    <img src="../assets/images/jy2.png" alt />
                  </div>
                </div>
                <div class="line2">{{idea[1].key}}</div>
                <div class="line3">{{idea[1].value}}</div>
              </div>
            </div>
            <div class="middle">
              <img src="../assets/images/jyln.png" alt />
            </div>
            <div class="right">
              <div class="right-item">
                <div class="line1">
                  <div class="img">
                    <img src="../assets/images/jy3.png" alt />
                  </div>
                </div>
                <div class="line2">{{idea[2].key}}</div>
                <div class="line3">{{idea[2].value}}</div>
              </div>
              <div class="right-item">
                <div class="line1">
                  <div class="img">
                    <img src="../assets/images/jy4.png" alt />
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
              <div class="left-top-left" :style="'background-image: url('+environment.img1+')'"></div>
              <div class="left-top-right">
                <div
                  class="left-top-right-item"
                  :style="'background-image: url('+environment.img2+')'"
                ></div>
                <div
                  class="left-top-right-item"
                  :style="'background-image: url('+environment.img3+')'"
                ></div>
              </div>
            </div>
            <div class="left-down" :style="'background-image: url('+environment.img4+')'"></div>
          </div>
          <div class="right">
            <div class="right-item" :style="'background-image: url('+environment.img5+')'"></div>
            <div class="right-item" :style="'background-image: url('+environment.img6+')'"></div>
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
import { aboutUsapi } from '../utils/api'

export default {
  name: "AboutUs",
  components: {
    Header,
    Footer,
    Background,

  },
  data () {
    return {
      aboutus: {},
      idea: [],
      environment: {},
      config: {}
    }
  },
  created () {
    this.retrieveData()
  },
  methods: {
    async retrieveData () {
      let { data } = await aboutUsapi()
      this.aboutus = data.aboutus
      this.idea = data.idea
      this.environment = data.environment
      this.config = data.config
      console.log(data, "关于我们")
    }
  }
}
</script>

<style scoped lang="scss">
.us-page {
  @include page-style;
  background-color: #f4f5f8;

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
          z-index: 1;
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
            width: 572px;
            height: 461px;
            @include back-img-center;
            position: absolute;
            margin-top: -80px;
            left: 0;
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
