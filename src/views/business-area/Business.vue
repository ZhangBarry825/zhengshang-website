<template>
  <div class="business-page">
    <Header :menu="1"></Header>
    <Background :type-index="10" :show-scroll="false"></Background>
    <div class="content">
      <div class="center">
        <div class="left-item">
          <div class="left active-bottom">
            <img :src="datalist[0].img||''" alt />
          </div>
          <div class="right active-right">
            <div class="title">{{datalist[0].title||''}}</div>
            <div class="border"></div>
            <div class="line1">{{datalist[0].remark}}</div>
            <div class="line2">
              <div :class="'text active-right-item'+index" v-for="(item, index) in datalist[0].content" :key="index">{{item}}</div>
            </div>
            <div class="more" @click="$router.push({path:'/business/app-develop'})">
              <div class="text">了解更多</div>
              <img class="more1" src="../../assets/images/more1.png" alt />
              <img class="more0" src="../../assets/images/more0.png" alt />
            </div>
          </div>
        </div>
        <div class="right-item">
          <div class="right">
            <div class="title">{{datalist[1].title||''}}</div>
            <div class="border"></div>
            <div class="line1">{{datalist[1].remark}}</div>
            <div class="line2">
              <div :class="'text active-right-item'+index" v-for="(item, index) in datalist[1].content" :key="index">{{item}}</div>
            </div>
            <div class="more" @click="$router.push({path:'/business/mini-program'})">
              <div class="text">了解更多</div>
              <img class="more1" src="../../assets/images/more1.png" alt />
              <img class="more0" src="../../assets/images/more0.png" alt />
            </div>
          </div>
          <div class="left active-bottom">
            <img :src="datalist[1].img||''" alt />
          </div>
        </div>
        <div class="left-item">
          <div class="left active-bottom">
            <img :src="datalist[2].img||''" alt />
          </div>
          <div class="right">
            <div class="title">{{datalist[2].title||''}}</div>
            <div class="border"></div>
            <div class="line1">{{datalist[2].remark}}</div>
            <div class="line2">
              <div :class="'text active-right-item'+index" v-for="(item, index) in datalist[2].content" :key="index">{{item}}</div>
            </div>
            <div class="more" @click="$router.push({path:'/business/web-construct'})">
              <div class="text">了解更多</div>
              <img class="more1" src="../../assets/images/more1.png" alt />
              <img class="more0" src="../../assets/images/more0.png" alt />
            </div>
          </div>
        </div>
        <div class="right-item">
          <div class="right">
            <div class="title">{{datalist[3].title||''}}</div>
            <div class="border"></div>
            <div class="line1">{{datalist[3].remark}}</div>
            <div class="line2">
              <div :class="'text active-right-item'+index" v-for="(item, index) in datalist[3].content" :key="index">{{item}}</div>
            </div>
            <div class="more" @click="$router.push({path:'/business/system'})">
              <div class="text">了解更多</div>
              <img class="more1" src="../../assets/images/more1.png" alt />
              <img class="more0" src="../../assets/images/more0.png" alt />
            </div>
          </div>
          <div class="left active-bottom">
            <img :src="datalist[3].img||''" alt />
          </div>
        </div>
        <div class="left-item">
          <div class="left active-bottom">
            <img :src="datalist[4].img||''" alt />
          </div>
          <div class="right">
            <div class="title">{{datalist[4].title||''}}</div>
            <div class="border"></div>
            <div class="line1">{{datalist[4].remark}}</div>
            <div class="line2">
              <div :class="'text active-right-item'+index" v-for="(item, index) in datalist[4].content" :key="index">{{item}}</div>
            </div>
            <div class="more" @click="$router.push({path:'/business/internet-things'})">
              <div class="text">了解更多</div>
              <img class="more1" src="../../assets/images/more1.png" alt />
              <img class="more0" src="../../assets/images/more0.png" alt />
            </div>
          </div>
        </div>
        <div class="right-item">
          <div class="right">
            <div class="title">{{datalist[5].title||''}}</div>
            <div class="border"></div>
            <div class="line1">{{datalist[5].remark}}</div>
            <div class="line2">
              <div :class="'text active-right-item'+index" v-for="(item, index) in datalist[5].content" :key="index">{{item}}</div>
            </div>
            <div class="more" @click="$router.push({path:'/business/gov-cloud'})">
              <div class="text">了解更多</div>
              <img class="more1" src="../../assets/images/more1.png" alt />
              <img class="more0" src="../../assets/images/more0.png" alt />
            </div>
          </div>
          <div class="left active-bottom">
            <img :src="datalist[5].img||''" alt />
          </div>
        </div>
      </div>
      <div
        class="left-back"
        :style="'background-image: url('+require('../../assets/images/left-back.png')+') !important'"
      ></div>
      <div
        class="right-back"
        :style="'background-image: url('+require('../../assets/images/right-back.png')+') !important'"
      ></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import { Businessapi } from '../../utils/api'


export default {
  name: "Business",
  components: {
    Header: Header,
    Background: Background,
    Footer
  },
  data () {
    return {
      datalist: [{
        title:''
      },{
        title:''
      },{
        title:''
      },{
        title:''
      },{
        title:''
      },{
        title:''
      }]
    }
  },
  mounted() {
    let that = this
    that.retrieveData()

    that.$ami('.active-bottom',0,'bottom','30%',.5,true)
    // that.$ami('.active-right',300,'right','100%',1,true)

    setTimeout(()=>{
      that.$ami('.active-right-item0',0,'right','30%',1,true)
      that.$ami('.active-right-item1',200,'right','30%',1,true)
      that.$ami('.active-right-item2',300,'right','30%',1,true)

    },200)
  },
  methods: {
    //   获取数据
    async retrieveData () {
      let { data } = await Businessapi()
      //console.log(data,998)
      this.datalist = data.datalist
      //console.log(data, "业务领域")
    },
  }

}
</script>

<style scoped lang="scss">
.business-page {
  overflow: hidden;
  @include page-style;
  background-color: #ffffff;
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    .center {
      z-index: 2;
      width: 1300px;
      display: flex;
      flex-direction: column;
      .left-item {
        margin: 100px 0;
        display: flex;
        justify-content: space-between;
        .left {
          width: 478px;
          height: 405px;
          img {
            width: 478px;
            height: 405px;
          }
        }
        .right {
          max-width: 607px;
          justify-content: space-around;
          display: flex;
          flex-direction: column;
          .title {
            font-size: 34px;
            font-weight: 500;
            color: #343434;
          }
          .border {
            width: 65px;
            height: 6px;
            background: #024ce5;
            margin-bottom: 32px;
            margin-top: 16px;
          }
          .line1 {
            font-size: 14px;
            font-weight: 400;
            color: #9eaac4;
          }
          .line2 {
            display: flex;
            flex-direction: column;
            .text {
              margin: 20px 0;
              font-size: 20px;
              font-weight: 400;
              color: #343434;
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
      .right-item {
        margin: 100px 0;
        display: flex;
        justify-content: space-between;
        .left {
          width: 478px;
          height: 405px;
          img {
            width: 478px;
            height: 405px;
          }
        }
        .right {
          max-width: 607px;
          justify-content: space-around;
          display: flex;
          flex-direction: column;
          .title {
            font-size: 34px;
            font-weight: 500;
            color: #343434;
          }
          .border {
            width: 65px;
            height: 6px;
            background: #024ce5;
            margin-bottom: 32px;
            margin-top: 16px;
          }
          .line1 {
            font-size: 14px;
            font-weight: 400;
            color: #9eaac4;
          }
          .line2 {
            display: flex;
            flex-direction: column;
            .text {
              margin: 20px 0;
              font-size: 20px;
              font-weight: 400;
              color: #343434;
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
    .left-back {
      position: absolute;
      left: 0;
      bottom: 685px;
      width: 878px;
      height: 1245px;
      @include back-img-center;
      background-position: right;
      z-index: 1;
    }
    .right-back {
      width: 549px;
      height: 751px;
      @include back-img-center;
      background-position: left;
      position: absolute;
      right: 0;
      top: 503px;
      z-index: 1;
    }
  }
}
</style>





















