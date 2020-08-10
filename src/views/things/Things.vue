<template>
  <div class="Things">
    <div class="intry-ban">
      <div class="intry"></div>
      <div class="sailing">
        <h3>可开发行业</h3>
        <div class="content">
          <div v-for="(itema, indexa) in Contents" :key="indexa">
            <div
              class="item"
              :class="activ==item.id?'activ':''"
              v-for="(item, index) in itema"
              :key="index"
              @click="toggleClick(item.id)"
              @mouseenter="enter(item.id)"
            >
              <!-- :class="activ==item.id?'activ':''" -->

              <p>
                <img
                  :src="activ==item.id?item.asrc:item.src"
                  :style="'width:'+item.width+';'+'height:'+item.height+';'"
                  alt
                />
              </p>
              <p>{{item.name}}</p>
              <p v-if="activ==item.id">
                <span>了解更多</span>
                <span>
                  <img src="../../assets/images/more-white.png" alt />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="system">
      <h3>系统开发流程</h3>
      <div class="content">
        <div class="item" v-for="(item, index) in system" :key="index">
          <p>{{item.id}}</p>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="deliver">
      <div class="content">
        <h3>交付标准</h3>
        <div class="product">
          <div class="item">
            <p>
              <img src="../../assets/images/Things/item1.png" alt />
            </p>
            <p>
              <img src="../../assets/images/Things/itea1.png" alt />
            </p>
            <p>产品文档</p>
          </div>
          <div class="item">
            <p>
              <img src="../../assets/images/Things/item2.png" alt />
            </p>
            <p>
              <img src="../../assets/images/Things/itea2.png" alt />
            </p>
            <p>产品文档</p>
          </div>
          <div class="item">
            <p>
              <img src="../../assets/images/Things/item3.png" alt />
            </p>
            <p>
              <img src="../../assets/images/Things/itea3.png" alt />
            </p>
            <p>产品文档</p>
          </div>
          <div class="item">
            <p>
              <img src="../../assets/images/Things/item4.png" alt />
            </p>
            <p>
              <img src="../../assets/images/Things/itea4.png" alt />
            </p>
            <p>产品文档</p>
          </div>
          <div class="item">
            <p>
              <img src="../../assets/images/Things/item5.png" alt />
            </p>
            <p>
              <img src="../../assets/images/Things/itea5.png" alt />
            </p>
            <p>产品文档</p>
          </div>
        </div>
        <div class="safety">
          <div class="code"></div>
          <div class="standard">
            <h3>系统安全标准</h3>
            <p>
              <img src="../../assets/images/Things/biaod.png" alt />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Contents, system } from './Contents'
export default {
  name: 'Things',

  data () {
    return {
      Contents,
      activ: 1,
      system
    }
  },
  //生命周期函数
  created () {
  },
  //方法
  methods: {
    enter (index) {
      this.activ = index
      console.log("一如")
    },
    toggleClick (index) {
      console.log("一如")
      this.activ = index
    },
  },
  //组件
  components: {
  }
}
</script>

<style lang='scss' scoped>
.Things {
  background-color: #f4f5f8;
  width: 100%;
  padding: 0 0 20px;
  min-width: 1300px;
  .intry-ban {
    // width: 1800px;
    // min-width: 1800px;
    height: 752px;
    padding: 30px 0;
    // background-color: #ffffff;
    position: relative;
    right: 0;
    z-index: 999;
    .intry {
      width: 1800px;
      height: 752px;
      background-color: rgb(255, 255, 255);
      position: absolute;
      right: 0;
      // z-index: ;
    }
    .sailing {
      position: relative;
      // z-index: 9999;
      width: 1468px;
      min-width: 1468px;
      //   height: 500px;
      background-color: #fff;
      margin: 0 auto;
      padding: 82px 0 111.5px;
      box-sizing: border-box;
      > h3 {
        font-size: 34px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        text-align: center;
        margin-bottom: 60px;
      }
      .content {
        margin: 0 auto;
        > div:nth-child(1),
        > div:nth-child(2) {
          width: 100%;
          border-bottom: 1px solid #e6ecf8;
          display: flex;
          justify-content: center;
          .item {
            width: 258px;
            height: 218px;
            border-right: 1px solid #e6ecf8;
            padding: 40px 30px 29px 40px;
            box-sizing: border-box;
            p:nth-child(1) {
              width: 50px;
              height: 35px;
              display: flex;
              align-items: center;
              justify-content: center;
              > img {
                width: 100%;
                height: 100%;
              }
            }
            > p:nth-child(2) {
              font-size: 20px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
              margin-top: 32px;
            }
            > p:nth-child(3) {
              display: flex;
              justify-content: flex-end;
              align-items: flex-end;
              margin-top: 40px;
              font-size: 14px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              > span:nth-child(2) {
                margin-left: 9px;
              }
            }
          }

          .item.activ {
            background: rgba(0, 76, 229, 1);
            p:nth-child(1) {
              width: 36px;
              height: 35px;
              > img {
                width: 100%;
                height: 100%;
              }
            }
            > p:nth-child(2) {
              font-size: 20px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(254, 254, 254, 1);
              margin-top: 32px;
            }
            > p:nth-child(3) {
              display: flex;
              justify-content: flex-end;
              align-items: flex-end;
              margin-top: 40px;
              font-size: 14px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              > span:nth-child(2) {
                margin-left: 9px;
              }
            }
          }
          .item:nth-child(5) {
            border-right: 0 solid #e6ecf8;
          }
        }
        > div:nth-child(2) {
          border: 0;
        }
      }
    }
  }
  .system {
    position: relative;
    top: -120px;
    width: 1800px;
    height: 736px;
    background-color: #101533;
    background-image: url('../../assets/images/Things/beijin.png');
    background-repeat: no-repeat;
    background-position: center;
    padding: 150px 0 0;
    box-sizing: border-box;
    z-index: 9;
    > h3 {
      text-align: center;
      font-size: 34px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
    .content {
      z-index: 9;
      width: 1300px;
      margin: 0 auto;
      // background-color: #fff;
      height: 400px;
      background-image: url('../../assets/images/Things/liecheng.png');
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
      > div {
        > p:nth-child(1) {
          font-size: 24px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: rgba(24, 94, 224, 1);
          text-align: center;
        }
        > p:nth-child(2) {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
      .item:nth-child(1) {
        position: absolute;
        left: 30px;
        top: 270px;
      }
      .item:nth-child(2) {
        position: absolute;
        left: 215px;
        top: 197px;
      }
      .item:nth-child(3) {
        position: absolute;
        left: 398px;
        top: 314px;
      }
      .item:nth-child(4) {
        position: absolute;
        left: 602px;
        top: 266px;
      }
      .item:nth-child(5) {
        position: absolute;
        right: 400px;
        top: 313px;
      }
      .item:nth-child(6) {
        position: absolute;
        right: 231px;
        top: 189px;
      }
      .item:nth-child(7) {
        position: absolute;
        right: 12px;
        top: 258px;
      }
    }
  }
  .deliver {
    width: 100%;
    position: relative;
    background-image: url('../../assets/images/Things/xin.png');
    background-repeat: no-repeat;
    background-position: right;
    top: -756px;
    left: 0;
    // background-color: rgb(167, 30, 30);
    height: 3000px;
    // z-index: 99;
    .content {
      position: absolute;
      height: 120px;
      left: 0;
      top: 750px;
      width: 100%;
      > h3 {
        text-align: center;
        font-size: 34px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      .product {
        width: 1300px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-top: 88px;
        .item {
          width: 220px;
          position: relative;
          > p:nth-child(1) {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: -28px;
            left: 20px;
            > img {
              width: 24px;
              height: 26px;
            }
          }
          > p:nth-child(2) {
            width: 220px;
            height: 146px;
            > img {
              width: 220px;
              height: 146px;
            }
          }
          > p:nth-child(3) {
            font-size: 24px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            text-align: center;
            margin-top: 29px;
          }
        }
      }
      .safety {
        display: flex;
        margin-top: 120px;
        .code {
          width: 829px;
          height: 614px;
          background: rgba(255, 255, 255, 1);
        }
        .standard {
          width: 559px;
          margin-left: 188px;
          > h3 {
            font-size: 34px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            text-align: center;
          }
          > p {
            width: 559px;
            height: 352px;
            margin-top: 154px;
            > img {
              width: 559px;
              height: 352px;
            }
          }
        }
      }
    }
  }
}
</style>
