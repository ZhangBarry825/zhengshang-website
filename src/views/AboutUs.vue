<template>
  <div class="us-page">
    <Header :menu="4"></Header>
    <Background :type-index="8" :show-scroll="false"></Background>
    <div class="gray">
      <div class="center">
        <div class="data">
          <div class="item">
            <img src="../assets/images/g1.png" alt />
            <div class="text">7年项目开发经验</div>
          </div>
          <div class="item">
            <img src="../assets/images/g2.png" alt />
            <div class="text">78人技术团队</div>
          </div>
          <div class="item">
            <img src="../assets/images/g3.png" alt />
            <div class="text">3000+合作客户</div>
          </div>
        </div>
        <div class="introduction">
          <div class="center-title">关于我们</div>
          <div class="center-title-en">ABOUT US</div>
          <div class="content">
            <div
              class="left"
              :style="'background-image: url('+require('../assets/images/us-about.png')+')'"
            ></div>
            <div class="right">
              <div class="text">
                郑州正尚网络科技有限公司，位于郑州郑东新区金水东路绿地新都会6号楼。是一家集网站建设、小程序开发、APP开发、OA办公系统、智慧城市服务系统、大数据分析系统、物联网管理平台于一体一站式互联网服务。
                <br />我们是追求品质与力求不断超越自己的团队，每一位成员也是亲密的伙伴，与公司一起成长与发展。我们尊重每次合作的机会，不断精进，团队秉承专注、专业的技术服务思维。视服务质量为企业使命，视客户为企业之本，以服务客户为企业宗旨，以高效而良好的服务为客户切实节约成本、创造价值。
              </div>
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
                <div class="line2">一流服务体验</div>
                <div class="line3">尊重客户，及时响应客户需求，快速解决客户问题，站在客户立场思考和推进工作，深入了解客户需求的变化，提供超出客户预期的产品和服务。</div>
              </div>
              <div class="left-item">
                <div class="line1">
                  <div class="img">
                    <img src="../assets/images/jy2.png" alt />
                  </div>
                </div>
                <div class="line2">诚信沟通合作</div>
                <div class="line3">尊重客户，及时响应客户需求，快速解决客户问题，站在客户立场思考和推进工作，深入了解客户需求的变化，提供超出客户预期的产品和服务。</div>
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
                <div class="line2">专业技术创新</div>
                <div class="line3">尊重客户，及时响应客户需求，快速解决客户问题，站在客户立场思考和推进工作，深入了解客户需求的变化，提供超出客户预期的产品和服务。</div>
              </div>
              <div class="right-item">
                <div class="line1">
                  <div class="img">
                    <img src="../assets/images/jy4.png" alt />
                  </div>
                </div>
                <div class="line2">勇于担当</div>
                <div class="line3">尊重客户，及时响应客户需求，快速解决客户问题，站在客户立场思考和推进工作，深入了解客户需求的变化，提供超出客户预期的产品和服务。</div>
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
              <div
                class="left-top-left"
                :style="'background-image: url('+require('../assets/images/gs1.png')+')'"
              ></div>
              <div class="left-top-right">
                <div
                  class="left-top-right-item"
                  :style="'background-image: url('+require('../assets/images/gs2.png')+')'"
                ></div>
                <div
                  class="left-top-right-item"
                  :style="'background-image: url('+require('../assets/images/gs3.png')+')'"
                ></div>
              </div>
            </div>
            <div
              class="left-down"
              :style="'background-image: url('+require('../assets/images/gs4.png')+')'"
            ></div>
          </div>
          <div class="right">
            <div
              class="right-item"
              :style="'background-image: url('+require('../assets/images/gs5.png')+')'"
            ></div>
            <div
              class="right-item"
              :style="'background-image: url('+require('../assets/images/gs6.png')+')'"
            ></div>
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

export default {
  name: "AboutUs",
  components: {
    Header,
    Footer,
    Background,

  },
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
