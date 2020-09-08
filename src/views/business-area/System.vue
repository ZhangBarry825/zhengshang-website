<template>
  <div class="business-page">
    <Header :menu="1"></Header>
    <Background :type-index="0"></Background>
    <div class="ability">
      <div class="center">
        <h2 class="title">可开发行业</h2>
        <div class="items">
          <div class="column column1">
            <div class="line line0" @mouseenter="itemHover(0)" @mouseleave="itemHover(-1)">
              <div class="context">
                <div class="left-logo">
                  <img :src="availableBusiness[0].img" alt />
                </div>
                <div class="right-text">{{availableBusiness[0].title}}</div>
              </div>
              <div class="more">
                <img :src="activeIndex==0?more0:more1" alt />
              </div>
            </div>
            <div class="line line1" @mouseenter="itemHover(1)" @mouseleave="itemHover(-1)">
              <div class="context">
                <div class="left-logo">
                  <img :src="availableBusiness[1].img" alt />
                </div>
                <div class="right-text">{{availableBusiness[1].title}}</div>
              </div>
              <div class="more">
                <img :src="activeIndex==1?more0:more1" alt />
              </div>
            </div>
            <div class="line line2" @mouseenter="itemHover(2)" @mouseleave="itemHover(-1)">
              <div class="context">
                <div class="left-logo">
                  <img :src="availableBusiness[2].img" alt />
                </div>
                <div class="right-text">{{availableBusiness[2].title}}</div>
              </div>
              <div class="more">
                <img :src="activeIndex==2?more0:more1" alt />
              </div>
            </div>
          </div>
          <div class="column column2">
            <div class="line line3" @mouseenter="itemHover(3)" @mouseleave="itemHover(-1)">
              <div class="context">
                <div class="left-logo">
                  <img :src="availableBusiness[3].img" alt />
                </div>
                <div class="right-text">{{availableBusiness[3].title}}</div>
              </div>
              <div class="more">
                <img :src="activeIndex==3?more0:more1" alt />
              </div>
            </div>
            <div class="line line4" @mouseenter="itemHover(4)" @mouseleave="itemHover(-1)">
              <div class="context">
                <div class="left-logo">
                  <img :src="availableBusiness[4].img" alt />
                </div>
                <div class="right-text">{{availableBusiness[4].title}}</div>
              </div>
              <div class="more">
                <img :src="activeIndex==4?more0:more1" alt />
              </div>
            </div>
          </div>
          <div class="column column3">
            <div class="line line5" @mouseenter="itemHover(5)" @mouseleave="itemHover(-1)">
              <div class="context">
                <div class="left-logo">
                  <img :src="availableBusiness[5].img" alt />
                </div>
                <div class="right-text">{{availableBusiness[5].title}}</div>
              </div>
              <div class="more">
                <img :src="activeIndex==5?more0:more1" alt />
              </div>
            </div>
            <div class="line line6" @mouseenter="itemHover(6)" @mouseleave="itemHover(-1)">
              <div class="context">
                <div class="left-logo">
                  <img :src="availableBusiness[6].img" alt />
                </div>
                <div class="right-text">{{availableBusiness[6].title}}</div>
              </div>
              <div class="more">
                <img :src="activeIndex==6?more0:more1" alt />
              </div>
            </div>
            <div class="line line7" @mouseenter="itemHover(7)" @mouseleave="itemHover(-1)">
              <div class="context">
                <div class="left-logo">
                  <img :src="availableBusiness[7].img" alt />
                </div>
                <div class="right-text">{{availableBusiness[7].title}}</div>
              </div>
              <div class="more">
                <img :src="activeIndex==7?more0:more1" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="progress" :style="'width:'+(1300+(screenWidth-1300)/2)+'px'">
          <div class="back"></div>
          <div class="bottom">
            <div class="left">
              <div class="left-title">系统开发流程</div>
              <div
                class="left-item"
                :class="'left-item'+index"
                v-for="(item, index) in systemDevelopment_left"
                :key="index"
              >
                <div class="item-title">{{item.title}}</div>
                <div class="item-context" v-html="item.context"></div>
              </div>
            </div>
            <div class="right">
              <div v-for="(item, index) in systemDevelopment_right" :key="index">
                <div class="connect" v-if="index!=0"></div>
                <div class="right-item">
                  <img :src="item.img" alt />
                  <div class="text">{{item.text}}</div>
                </div>
              </div>
              <!-- <div>
                <div class="connect"></div>
                <div class="right-item">
                  <img src="../../assets/images/p2.png" alt />
                  <div class="text">品牌定位规范</div>
                </div>
              </div>
              <div class="connect"></div>
              <div class="right-item">
                <img src="../../assets/images/p3.png" alt />
                <div class="text">功能需求调研</div>
              </div>
              <div class="connect"></div>
              <div class="right-item">
                <img src="../../assets/images/p4.png" alt />
                <div class="text">交互视觉设计</div>
              </div>
              <div class="connect"></div>
              <div class="right-item">
                <img src="../../assets/images/p5.png" alt />
                <div class="text">双端同步开发</div>
              </div>
              <div class="connect"></div>
              <div class="right-item">
                <img src="../../assets/images/p6.png" alt />
                <div class="text">后端并行开发</div>
              </div>
              <div class="connect"></div>
              <div class="right-item last-item">
                <img src="../../assets/images/p7.png" alt />
                <div class="text">测试上线交付使用</div>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-box">
      <div class="center">
        <div class="delivery">
          <h2 class="title">交付标准</h2>
          <div class="items">
            <div class="item" v-for="(item, index) in deliveryStandard" :key="index">
              <div class="logo">
                <img :src="item.logo" alt />
              </div>
              <div class="item-text">{{item.tetx}}</div>
              <img class="hoverImg" :src="item.hoverImg" />
            </div>
            <!-- <div class="item">
              <div class="logo">
                <img src="../../assets/images/d2.png" alt />
              </div>
              <div class="item-text">设计稿源文件</div>
              <img class="hoverImg" src="../../assets/images/df2.png" />
            </div>
            <div class="item">
              <div class="logo">
                <img src="../../assets/images/d3.png" alt />
              </div>
              <div class="item-text">源代码</div>
              <img class="hoverImg" src="../../assets/images/df3.png" />
            </div>
            <div class="item">
              <div class="logo">
                <img src="../../assets/images/d4.png" alt />
              </div>
              <div class="item-text">使用文档</div>
              <img class="hoverImg" src="../../assets/images/df4.png" />
            </div>
            <div class="item">
              <div class="logo">
                <img src="../../assets/images/d5.png" alt />
              </div>
              <div class="item-text">账号信息</div>
              <img class="hoverImg" src="../../assets/images/df5.png" />
            </div>-->
          </div>
        </div>
        <div class="security">
          <h2 class="security-title">系统安全标准</h2>
          <div class="items">
            <div class="item" v-for="(item, index) in systemSafetyStandards" :key="index">
              <img class="back" :src="item.back" />
              <div class="title">
                <img :src="item.img" alt />
                <h2>{{item.title}}</h2>
              </div>
              <div class="li" v-for="(itema, indexa) in item.list" :key="indexa" v-html="itema"></div>
            </div>
          </div>
        </div>
        <div class="support">
          <div class="left">
            <div class="dots">
              <img src="../../assets/images/dots.png" alt />
            </div>
            <div class="left-img-box">
              <img src="../../assets/images/ba.png" alt />
            </div>
          </div>
          <div class="right">
            <div class="support-title">技术支持</div>
            <div class="support-items">
              <div class="support-item" v-for="(item, index) in technicalSupport" :key="index">
                <div class="support-item-title">
                  <img :src="item.img" />
                  <div class="title-text">{{item.title}}</div>
                </div>
                <div class="support-item-context">{{item.context}}</div>
              </div>
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
import Footer from "../../components/Footer";
import Background from "../../components/Background";
import { systemPage } from "../../../public/MockData";

export default {
  name: "System",
  components: {
    Header: Header,
    Footer: Footer,
    Background: Background,
  },
  data () {
    return {
      availableBusiness: systemPage.availableBusiness,
      systemDevelopment_left: systemPage.systemDevelopment_left,
      systemDevelopment_right: systemPage.systemDevelopment_right,
      deliveryStandard: systemPage.deliveryStandard,
      systemSafetyStandards: systemPage.systemSafetyStandards,
      technicalSupport: systemPage.technicalSupport,
      screenWidth: '',
      screenHeight: '',
      activeIndex: -1,
      more0: require('../../assets/images/more0.png'),
      more1: require('../../assets/images/more1.png'),
    }
  },
  methods: {
    itemHover (index) {
      this.activeIndex = index
    }
  },
  mounted () {
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
.business-page {
  @include page-style;

  .ability {
    width: 100%;
    min-width: 1300px;
    margin: 0 auto;
    height: 1380px;
    background: rgba(244, 245, 248, 1);

    .center {
      width: 1300px;
      margin: 0 auto;
      margin-bottom: 50px;

      .title {
        width: 100%;
        font-size: 34px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        text-align: center;
        padding: 68px 0 50px 0;
      }

      .items {
        width: 100%;
        height: 630px;
        background-image: url('../../assets/images/ability.png');
        @include back-img-center;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .column {
          width: 375px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;

          .line {
            cursor: pointer;
            width: 270px;
            height: 156px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 8px 20px 0px rgba(24, 94, 224, 0.15);
            padding: 30px 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .context {
              display: flex;
              justify-content: flex-start;
              padding-left: 20px;
              align-items: center;
              width: 100%;

              .left-logo {
                width: 56px;
                height: 56px;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0px 8px 30px 0px rgba(24, 94, 224, 0.25);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .right-text {
                margin-left: 20px;
                font-size: 24px;
                font-weight: 400;
                color: #333333;
              }
            }

            .more {
              width: 100%;
              display: flex;
              justify-content: flex-end;
            }
          }

          .line0:hover,
          .line1:hover,
          .line2:hover,
          .line3:hover,
          .line4:hover,
          .line5:hover,
          .line6:hover,
          .line7:hover {
            background-color: rgba(0, 76, 229, 1);

            .right-text {
              color: #ffffff;
            }
          }

          .line1 {
            align-self: flex-start;
            margin: 40px 0;
          }

          .line4 {
            margin-top: 40px;
            align-self: flex-start;
          }

          .line5,
          .line7 {
            align-self: flex-start;
          }

          .line6 {
            margin: 40px 0;
          }
        }

        .column1 {
          width: 330px;
        }

        .column2 {
          width: 300px;
        }

        .column3 {
          width: 300px;
        }
      }
    }

    .progress {
      margin-top: 20px;
      height: 1070px;
      background-color: #101533;
      min-width: 1300px;

      position: absolute;

      .back {
        width: 100%;
        height: 420px;
        background-image: url('../../assets/images/progress-back.png');
        @include back-img-center;
      }

      .bottom {
        width: 1300px;
        height: calc(100% - 420px);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 80px 0 30px 97px;
        box-sizing: border-box;
        position: relative;

        .left {
          display: flex;
          flex-direction: column;

          .left-title {
            font-size: 34px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            margin-bottom: 60px;
          }

          .left-item {
            display: flex;
            flex-direction: column;

            .item-title {
              font-size: 24px;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              margin-bottom: 28px;
              margin-top: 50px;
            }

            .item-context {
              font-size: 16px;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              opacity: 0.6;
              @include line-hidden(3);
              white-space: pre-line;
              line-height: 22px;
            }
          }
          .left-item0 {
            .item-title {
              margin-top: 0 !important;
            }
          }
        }

        .right {
          width: 528px;
          height: 766px;
          background: rgba(24, 40, 100, 0.7);
          position: absolute;
          right: 0;
          top: -220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 0;
          box-sizing: border-box;
          justify-content: space-around;

          .right-item {
            width: 240px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .text {
              font-size: 24px;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }
          }
          .right-item:last-child {
            img {
              margin-left: 7px;
              transform: scale(1.3);
            }

            .text {
              margin-left: 70px;
              flex-shrink: 0;
            }
          }

          .last-item {
          }

          .connect {
            margin: -10px 0 10px;
            margin-left: 25px;
            align-self: flex-start;
            width: 1px;
            height: 34px;
            border-left: 1px solid #3b469d;
          }
        }
      }
    }
  }

  .bottom-box {
    margin-top: 331px;
    width: 100%;
    height: 1973px;
    background-image: url('../../assets/images/back-bottom.png');
    @include back-img-center;
    padding-bottom: 50px;

    .center {
      width: 1300px;
      margin: 0 auto;
      padding-top: 173px;

      .delivery {
        width: 100%;

        .title {
          width: 100%;
          font-size: 34px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          text-align: center;
          padding: 80px 0 40px 0;
          margin-bottom: 40px;
        }

        .items {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .item {
            background-color: #ffffff;
            cursor: pointer;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-self: center;
            box-shadow: 0px 3px 30px 0px rgba(106, 122, 156, 0.3);
            width: 220px;
            height: 146px;
            position: relative;

            .item-text {
              display: flex;
              justify-content: center;
              align-self: center;

              font-size: 24px;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
            }

            .logo {
              z-index: 9;
              width: 56px;
              height: 56px;
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 0px 20px 0px rgba(24, 94, 224, 0.15);
              border-radius: 50%;
              position: absolute;
              top: -28px;
              left: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .hoverImg {
              display: none;
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
            }
          }

          .item:hover {
            border-radius: 5px;

            .hoverImg {
              display: block !important;
            }
          }
        }
      }

      .security {
        width: 100%;

        .security-title {
          width: 100%;
          font-size: 34px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          text-align: center;
          padding: 110px 0 50px 0;
          margin-bottom: 20px;
        }

        .items {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .item {
            width: 279px;
            height: 432px;
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(229, 229, 229, 0.3);
            padding: 10px;
            box-sizing: border-box;

            .back {
              width: 100%;
              height: 120px;
            }

            .title {
              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 20px 10px;
              box-sizing: border-box;

              h2 {
                font-size: 24px;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
                margin-left: 10px;
              }
            }

            .li {
              margin: 15px 10px;
              line-height: 1.7;
            }
          }

          .item:hover {
            box-shadow: 0px 3px 50px 0px rgba(106, 122, 156, 0.3);
          }
        }
      }

      .support {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 120px;

        .left {
          width: 405px;
          position: relative;
          .dots {
            width: 600px;
            height: 535px;
            background: rgba(0, 76, 229, 1);
            border-radius: 60px;
            position: absolute;
            left: -330px;
            display: flex;
            justify-content: flex-end;
            padding: 50px 160px;
            box-sizing: border-box;
            img {
              width: 99px;
              height: 174px;
            }
          }
          .left-img-box {
            width: 263px;
            height: 492px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 3px 62px 0px rgba(105, 122, 156, 0.3);
            border-radius: 60px;
            position: absolute;
            bottom: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .right {
          width: 730px;

          .support-title {
            width: 100%;
            font-size: 34px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            text-align: center;
          }

          .support-items {
            width: 100%;
            margin-top: 89px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            .support-item:nth-child(3),
            .support-item:nth-child(4) {
              margin-top: 90px;
            }
            .support-item {
              width: 323px;
              height: 208px;
              background: rgba(255, 255, 255, 1);
              border: 2px solid rgba(225, 229, 239, 0.7);
              padding: 30px 20px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              justify-content: space-around;

              .support-item-title {
                display: flex;
                flex-direction: row;
                align-items: center;
                font-size: 22px;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
                .title-text {
                  margin-left: 15px;
                }
              }
              .support-item-context {
                font-size: 16px;
                font-weight: 400;
                color: rgba(157, 169, 195, 1);
                line-height: 22px;
                @include line-hidden(3);
              }
            }
            .support-item:hover {
              box-shadow: 0px 3px 50px 0px rgba(105, 122, 156, 0.25);
            }
          }
        }
      }
    }
  }
}
</style>
