<template>
  <div class="mini-program">
    <Header :menu="1"></Header>
    <Background :type-index="3"></Background>
    <div class="center">
      <div class="business">
        <div class="title">可开发行业</div>
        <div class="content">
          <div class="left">
            <div class="left-title">{{textList[selectedIndex].title}}</div>
            <div class="left-item" v-for="item in textList[selectedIndex].itemList">
              <div class="line1">{{item.title}}</div>
              <div class="line2">{{item.context}}</div>
            </div>
            <div class="more" @click="openDialog">
              <div class="text">了解更多</div>
              <img class="more1" src="../../assets/images/more1.png" alt />
              <img class="more0" src="../../assets/images/more0.png" alt />
            </div>
          </div>
          <div class="right">
            <img class="active-item0" src="../../assets/images/circle.png" alt="">
            <div class="item item0 active-item4" :class="selectedIndex==3?'selected':''" @mouseenter="selectChange(3)">
              <img class="visible" src="../../assets/images/kk0.png" alt="">
              <img class="hidden" src="../../assets/images/kkh0.png" alt="">
              <div class="text">社交</div>
            </div>
            <div class="item item1 active-item1" :class="selectedIndex==0?'selected':''" @mouseenter="selectChange(0)">
              <img class="visible" src="../../assets/images/kk1.png" alt="">
              <img class="hidden" src="../../assets/images/kkh1.png" alt="">
              <div class="text">直播</div>
            </div>
            <div class="item item2 active-item3" :class="selectedIndex==2?'selected':''" @mouseenter="selectChange(2)">
              <img class="visible" src="../../assets/images/kk2.png" alt="">
              <img class="hidden" src="../../assets/images/kkh2.png" alt="">
              <div class="text">教育</div>
            </div>
            <div class="item item3 active-item2" :class="selectedIndex==1?'selected':''" @mouseenter="selectChange(1)">
              <img class="visible" src="../../assets/images/kk3.png" alt="">
              <img class="hidden" src="../../assets/images/kkh3.png" alt="">
              <div class="text">医疗</div>
            </div>
            <div class="item item4 active-item9" :class="selectedIndex==8?'selected':''" @mouseenter="selectChange(8)">
              <img class="visible" src="../../assets/images/kk4.png" alt="">
              <img class="hidden" src="../../assets/images/kkh4.png" alt="">
              <div class="text">健身</div>
            </div>
            <div class="item item5 active-item8" :class="selectedIndex==7?'selected':''" @mouseenter="selectChange(7)">
              <img class="visible" src="../../assets/images/kk5.png" alt="">
              <img class="hidden" src="../../assets/images/kkh5.png" alt="">
              <div class="text">团购</div>
            </div>
            <div class="item item6 active-item7" :class="selectedIndex==6?'selected':''" @mouseenter="selectChange(6)">
              <img class="visible" src="../../assets/images/kk6.png" alt="">
              <img class="hidden" src="../../assets/images/kkh6.png" alt="">
              <div class="text">外卖</div>
            </div>
            <div class="item item7 active-item6" :class="selectedIndex==5?'selected':''" @mouseenter="selectChange(5)">
              <img class="visible" src="../../assets/images/kk7.png" alt="">
              <img class="hidden" src="../../assets/images/kkh7.png" alt="">
              <div class="text">跑腿</div>
            </div>
            <div class="item item8 active-item5" :class="selectedIndex==4?'selected':''" @mouseenter="selectChange(4)">
              <img class="visible" src="../../assets/images/kk8.png" alt="">
              <img class="hidden" src="../../assets/images/kkh8.png" alt="">
              <div class="text">交友</div>
            </div>
          </div>
        </div>
      </div>
      <div class="progress">
        <div class="title">小程序开发流程</div>
        <div class="content">
          <div class="left active-left">
            <img src="../../assets/images/pro00.png" alt="">
          </div>
          <div class="right">
            <div class="items">
              <div class="item " id="item1" :class="progressIndex==1?'selected':''"
                   @click="selectProgress(1)">
                <div class="line1">
                  <div class="text">行业数据分析</div>
                  <div class="num">01</div>
                </div>
                <div class="line2">
                  甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队
                </div>
              </div>
              <div class="item" id="item2" :class="progressIndex==2?'selected':''"
                   @click="selectProgress(2)">
                <div class="line1">
                  <div class="text">品牌定位规范</div>
                  <div class="num">02</div>
                </div>
                <div class="line2">
                  甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队
                </div>
              </div>
              <div class="item" id="item3" :class="progressIndex==3?'selected':''"
                   @click="selectProgress(3)">
                <div class="line1">
                  <div class="text">功能需求调研</div>
                  <div class="num">03</div>
                </div>
                <div class="line2">
                  甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队
                </div>
              </div>
              <div class="item" id="item4" :class="progressIndex==4?'selected':''"
                   @click="selectProgress(4)">
                <div class="line1">
                  <div class="text">交互视觉设计</div>
                  <div class="num">04</div>
                </div>
                <div class="line2">
                  甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队
                </div>
              </div>
              <div class="item" id="item5" :class="progressIndex==5?'selected':''"
                   @click="selectProgress(5)">
                <div class="line1">
                  <div class="text">交互视觉设计</div>
                  <div class="num">05</div>
                </div>
                <div class="line2">
                  甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队
                </div>
              </div>
              <div class="item" id="item6" :class="progressIndex==6?'selected':''"
                   @click="selectProgress(6)">
                <div class="line1">
                  <div class="text">交互视觉设计</div>
                  <div class="num">06</div>
                </div>
                <div class="line2">
                  甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队
                </div>
              </div>
              <div class="item" id="item7" :class="progressIndex==7?'selected':''"
                   @click="selectProgress(7)">
                <div class="line1">
                  <div class="text">交互视觉设计</div>
                  <div class="num">07</div>
                </div>
                <div class="line2">
                  甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队
                </div>
              </div>
            </div>
            <div class="pagination">
              <div class="right">
                <img v-if="progressPage==0" src="../../assets/images/left-gray.png" alt="">
                <img v-else src="../../assets/images/left-blue.png" @click="changePage(-1)">
                <img v-if="progressPage==1" src="../../assets/images/right-gray.png" alt="">
                <img v-else src="../../assets/images/right-blue.png" @click="changePage(1)">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="delivery-standard">
      <div class="deliver-center">
        <div class="deliver-title">交付标准</div>
        <div class="items">
          <div class="item active-del1">
            <div class="circle">
              <img src="../../assets/images/q1.png" alt="">
            </div>
            <div class="text">产品文档</div>
          </div>
          <div class="item active-del2">
            <div class="circle">
              <img src="../../assets/images/q2.png" alt="">
            </div>
            <div class="text">设计稿源文件</div>
          </div>
          <div class="item active-del3">
            <div class="circle">
              <img src="../../assets/images/q3.png" alt="">
            </div>
            <div class="text">源代码</div>
          </div>
          <div class="item active-del4">
            <div class="circle">
              <img src="../../assets/images/q4.png" alt="">
            </div>
            <div class="text">使用文档</div>
          </div>
          <div class="item active-del5">
            <div class="circle">
              <img src="../../assets/images/q5.png" alt="">
            </div>
            <div class="text">账号信息</div>
          </div>
        </div>
      </div>
    </div>
    <div class="system-standard">
      <div class="system-center">
        <div class="title">系统安全标准</div>
        <div class="items">
          <div class="item">
            <div class="item-title">源代码安全</div>
            <div class="li">
              <img src="../../assets/images/ss1.png" alt="">
              <div class="text">防SQL注入</div>
            </div>
            <div class="li">
              <img src="../../assets/images/ss3.png" alt="">
              <div class="text">过滤拦截机制</div>
            </div>
            <div class="li">
              <img src="../../assets/images/ss4.png" alt="">
              <div class="text">并发安全机制</div>
            </div>
            <div class="li">
              <img src="../../assets/images/ss1.png" alt="">
              <div class="text">
                加密(MDS、RSA、<br>
                DES)
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-title">程序安全</div>
            <div class="li">
              <img src="../../assets/images/ss5.png" alt="">
              <div class="text">身份认证机制</div>
            </div>
            <div class="li">
              <img src="../../assets/images/ss6.png" alt="">
              <div class="text">权限控制</div>
            </div>
            <div class="li">
              <img src="../../assets/images/ss7.png" alt="">
              <div class="text">渗透测试</div>
            </div>
            <div class="li">
              <img src="../../assets/images/ss8.png" alt="">
              <div class="text">日志追踪</div>
            </div>
          </div>
          <div class="item">
            <div class="item-title">数据库安全</div>
            <div class="li">
              <img src="../../assets/images/ss9.png" alt="">
              <div class="text">双机容错</div>
            </div>
            <div class="li">
              <img src="../../assets/images/ss10.png" alt="">
              <div class="text">数据备份</div>
            </div>
            <div class="li">
              <img src="../../assets/images/ss11.png" alt="">
              <div class="text">灾难恢复</div>
            </div>
            <div class="li">
              <img src="../../assets/images/ss12.png" alt="">
              <div class="text">
                数据存储(基于RAID<br>
                的存储技术)
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-title">服务器安全</div>
            <div class="li">
              <img src="../../assets/images/ss13.png" alt="">
              <div class="text">防火墙</div>
            </div>
            <div class="li">
              <img src="../../assets/images/ss14.png" alt="">
              <div class="text">入侵检测</div>
            </div>
            <div class="li">
              <img src="../../assets/images/ss15.png" alt="">
              <div class="text">漏洞扫描</div>
            </div>
            <div class="li">
              <img src="../../assets/images/ss16.png" alt="">
              <div class="text">物理隔离</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="technology-support">
      <div class="title">
        技术支持
      </div>
      <div class="items">
        <div class="item">
          <div class="img">
            <img src="../../assets/images/j1.png" class="item-img" alt="">
          </div>
          <div class="item-title">程序使用培训</div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../assets/images/j2.png" class="item-img" alt="">
          </div>
          <div class="item-title">项目问题咨询</div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../assets/images/j3.png" class="item-img" alt="">
          </div>
          <div class="item-title">项目部署及维护</div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../assets/images/j4.png" class="item-img" alt="">
          </div>
          <div class="item-title">后期功能升级和修改</div>
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


  export default {
    name: "MiniProgram",
    components: {
      Header: Header,
      Background: Background,
      Footer
    },
    data() {
      return {
        progressIndex: 0,
        selectedIndex:0,
        progressPage:0,
        textList:[
          {
            title:'直播类小程序',
            itemList:[
              {
                title:'多渠道预热，蓄水前置流量',
                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
              },
              {
                title:'全场景推广，快速引流获客',
                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
              },
              {
                title:'边看边买，导购在线推荐',
                context:'在线演示增强信任，OMG热搜式销货，提高转化'
              }
            ]
          },
          {
            title:'医疗类小程序',
            itemList:[
              {
                title:'多渠道预热，蓄水前置流量',
                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
              },
              {
                title:'全场景推广，快速引流获客',
                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
              },
              {
                title:'边看边买，导购在线推荐',
                context:'在线演示增强信任，OMG热搜式销货，提高转化'
              }
            ]
          },
          {
            title:'教育类小程序',
            itemList:[
              {
                title:'多渠道预热，蓄水前置流量',
                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
              },
              {
                title:'全场景推广，快速引流获客',
                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
              },
              {
                title:'边看边买，导购在线推荐',
                context:'在线演示增强信任，OMG热搜式销货，提高转化'
              }
            ]
          },
          {
            title:'社交类小程序',
            itemList:[
              {
                title:'多渠道预热，蓄水前置流量',
                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
              },
              {
                title:'全场景推广，快速引流获客',
                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
              },
              {
                title:'边看边买，导购在线推荐',
                context:'在线演示增强信任，OMG热搜式销货，提高转化'
              }
            ]
          },
          {
            title:'交友类小程序',
            itemList:[
              {
                title:'多渠道预热，蓄水前置流量',
                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
              },
              {
                title:'全场景推广，快速引流获客',
                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
              },
              {
                title:'边看边买，导购在线推荐',
                context:'在线演示增强信任，OMG热搜式销货，提高转化'
              }
            ]
          },
          {
            title:'跑腿类小程序',
            itemList:[
              {
                title:'多渠道预热，蓄水前置流量',
                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
              },
              {
                title:'全场景推广，快速引流获客',
                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
              },
              {
                title:'边看边买，导购在线推荐',
                context:'在线演示增强信任，OMG热搜式销货，提高转化'
              }
            ]
          },
          {
            title:'外卖类小程序',
            itemList:[
              {
                title:'多渠道预热，蓄水前置流量',
                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
              },
              {
                title:'全场景推广，快速引流获客',
                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
              },
              {
                title:'边看边买，导购在线推荐',
                context:'在线演示增强信任，OMG热搜式销货，提高转化'
              }
            ]
          },
          {
            title:'团购类小程序',
            itemList:[
              {
                title:'多渠道预热，蓄水前置流量',
                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
              },
              {
                title:'全场景推广，快速引流获客',
                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
              },
              {
                title:'边看边买，导购在线推荐',
                context:'在线演示增强信任，OMG热搜式销货，提高转化'
              }
            ]
          },
          {
            title:'健身类小程序',
            itemList:[
              {
                title:'多渠道预热，蓄水前置流量',
                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
              },
              {
                title:'全场景推广，快速引流获客',
                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
              },
              {
                title:'边看边买，导购在线推荐',
                context:'在线演示增强信任，OMG热搜式销货，提高转化'
              }
            ]
          },
        ]
      }
    },
    methods: {
      openDialog(){
        this.$dia()
      },
      changePage(index){
        this.progressPage+=index
        if(this.progressPage==1){
          this.progressList=[
            {
              num:'05',
              title:'品牌定位规范',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
            {
              num:'06',
              title:'交互视觉设计',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
            {
              num:'07',
              title:'行业数据分析',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
          ]
        }else {
          this.progressList=[
            {
              num:'01',
              title:'行业数据分析',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
            {
              num:'02',
              title:'品牌定位规范',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
            {
              num:'03',
              title:'交互视觉设计',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
            {
              num:'04',
              title:'行业数据分析',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
          ]
        }
      },
      selectChange(index){
        this.selectedIndex=index
      },
      selectProgress(index) {
        this.progressIndex = index
        // switch (index) {
        //     case 1:
        //         break;
        //     case 2:
        //         document.getElementById('item1').scrollIntoView({block: 'start', behavior: 'smooth'})
        //         break;
        //     case 3:
        //         document.getElementById('item2').scrollIntoView({block: 'start', behavior: 'smooth'})
        //         break;
        //     case 4:
        //         document.getElementById('item3').scrollIntoView({block: 'start', behavior: 'smooth'})
        //         break;
        //     case 5:
        //         document.getElementById('item4').scrollIntoView({block: 'start', behavior: 'smooth'})
        //         break;
        //     case 6:
        //         document.getElementById('item5').scrollIntoView({block: 'start', behavior: 'smooth'})
        //         break;
        //     case 7:
        //         break;
        //
        // }

      }
    },
    mounted() {
      let that = this
      that.$ami('.active-left',200,'left','30%',.5,true)
      that.$ami('.active-del1',0,'top','30%',1,true)
      that.$ami('.active-del2',100,'top','30%',1,true)
      that.$ami('.active-del3',200,'top','30%',1,true)
      that.$ami('.active-del4',300,'top','30%',1,true)
      that.$ami('.active-del5',400,'top','30%',1,true)

    }
  }
</script>

<style scoped lang="scss">
  .mini-program {
    @include page-style;

    .center {
      width: 1300px;
      margin: 0 auto;

      .business {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 150px;
        box-sizing: border-box;

        .title {
          width: 100%;
          font-size: 34px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          text-align: center;
          margin: 80px 0;
        }

        .content {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .left {
            display: flex;
            flex-direction: column;

            .left-title {
              font-size: 28px;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              border-left: 4px solid #004BE5;
              padding-left: 15px;
              margin-bottom: 72px;
            }

            .left-item {
              display: flex;
              flex-direction: column;

              .line1 {
                font-size: 20px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                margin-bottom: 23px;
              }

              .line2 {
                font-size: 16px;
                font-weight: 400;
                color: #9DA9C3;
                line-height: 26px;
                margin-bottom: 49px;
              }
            }

            .more {
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

          .right {
            width: 542px;
            height: 542px;
            position: relative;
            margin-right: 70px;

            .item {
              cursor: pointer;
              position: absolute;
              width: 110px;
              height: 110px;
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 3px 25px 0px rgba(101, 110, 158, 0.2);
              border-radius: 50%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              .text {
                margin-top: 7px;
                font-size: 16px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
              }

              .visible {

              }

              .hidden {
                display: none;
              }
            }
            .selected{
              background: rgba(0, 76, 229, 1);
              box-shadow: 0px 3px 25px 0px rgba(101, 110, 158, 0.2);

              .text {
                color: #ffffff;
              }

              .visible {
                display: none;
              }

              .hidden {
                display: block;
              }
            }

            .item:hover {
              background: rgba(0, 76, 229, 1);
              box-shadow: 0px 3px 25px 0px rgba(101, 110, 158, 0.2);

              .text {
                color: #ffffff;
              }

              .visible {
                display: none;
              }

              .hidden {
                display: block;
              }
            }

            .item1 { //直播
              left: -30px;
              bottom: 95px;
            }

            .item2 { //教育
              left: 40px;
              top: 0px;
            }

            .item3 { //医疗
              left: -50px;
              top: 160px;
            }

            .item4 { //健身
              left: 110px;
              bottom: -40px;
            }

            .item5 { //团购
              left: 300px;
              bottom: -50px;
            }

            .item6 { //外卖
              right: -10px;
              bottom: 60px;
            }

            .item7 { //跑腿
              right: -60px;
              bottom: 230px;
            }

            .item8 { //交友
              right: 10px;
              top: 30px;
            }

            .item0 { //社交
              right: 200px;
              top: -60px;
            }
          }
        }
      }

      .progress {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 50px;
        .title {
          width: 100%;
          text-align: center;
          font-size: 34px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 80px;
        }

        .content {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .left {
            img {
              width: 672px;
              height: 603px;
            }
          }

          .right {
            display: flex;
            flex-direction: column;

            .items::-webkit-scrollbar {
              display: none;
            }


            .items {
              -ms-scroll-chaining: chained;
              -ms-overflow-style: none;
              -ms-content-zooming: zoom;
              -ms-scroll-rails: none;
              -ms-content-zoom-limit-min: 100%;
              -ms-content-zoom-limit-max: 500%;
              -ms-scroll-snap-type: proximity;
              -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
              -ms-overflow-style: none;

              width: 435px;
              height: 603px;
              overflow: scroll;

              .item:first-child {
                .line1 {
                  padding-top: 0;
                }
              }

              .item {
                cursor: pointer;
                width: 100%;
                border-right: 5px solid #E5EBF7;
                padding-right: 20px;
                box-sizing: border-box;

                .line1 {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-end;
                  margin-bottom: 20px;
                  padding-top: 35px;

                  .text {
                    font-size: 24px;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                    padding: 10px 0;
                  }

                  .num {
                    font-size: 36px;
                    font-weight: 400;
                    color: #333333;
                    margin-left: 19px;
                  }
                }

                .line2 {
                  font-size: 16px;
                  font-weight: 400;
                  color: rgba(157, 169, 195, 1);
                  line-height: 26px;
                  text-align: right;
                }
              }

              .item:hover{
                border-right: 5px solid #FF8337;
              }
              .selected {
                border-right: 5px solid #FF8337;

                .line1 {
                  .num {
                    color: #004CE5;
                  }
                }
              }
            }

            .pagination {
              width: 100%;
              display: flex;
              justify-content: flex-end;
              padding: 40px 0;

              .right {
                display: flex;
                flex-direction: row;

                img {
                  cursor: pointer;
                  width: 12px;
                  height: 22px;
                }

                img:first-child {
                  margin-right: 47px;
                }
              }
            }
          }
        }
      }
    }

    .delivery-standard {
      background-image: url("../../assets/images/jfbz.png");
      @include back-img-center;
      width: 100%;
      min-width: 1300px;
      height: 778px;

      .deliver-center {
        width: 1300px;
        margin: 0 auto;

        .deliver-title {
          font-size: 34px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          width: 100%;
          text-align: center;
          padding: 80px 0;
        }

        .items {
          flex-direction: row;
          display: flex;
          justify-content: space-between;

          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
            height: 256px;
            background: rgba(23, 40, 100, 0.7);
            justify-content: center;

            .circle {
              width: 94px;
              height: 94px;
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 8px 20px 0px rgba(24, 94, 223, 0.15);
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .text {
              margin-top: 39px;
              width: 100%;
              text-align: center;
              font-size: 24px;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }

    .system-standard {
      position: relative;
      top: -70px;
      height: 600px;
      width: 100%;
      min-width: 1300px;
      background-image: url("../../assets/images/sysback.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 0 120%;
      .system-center {
        width: 1300px;
        margin: 0 auto;
        .title{
          font-size:34px;
          text-align: center;
          font-weight:500;
          color:rgba(51,51,51,1);
          margin-bottom: 80px;
        }
        .items{
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .item:hover{
            box-shadow: 0px 3px 50px 0px rgba(105, 122, 156, 0.25);
          }
          .item{
            width:269px;
            height:392px;
            background-color: #ffffff;
            background-image: url("../../assets/images/item.png");
            padding: 28px 20px;
            box-sizing: border-box;
            .item-title{
              font-size:24px;
              font-weight:500;
              color:rgba(255,255,255,1);
              margin-bottom: 64px;
            }
            .li:last-child{
              margin-bottom: 0;
            }
            .li{
              margin-bottom: 30px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              .text{
                font-size:18px;
                font-weight:400;
                color:rgba(51,51,51,1);
                margin-left: 10px;
                line-height: 1.5;
              }
            }
          }
        }
      }
    }

    .technology-support{
      width: 1300px;
      margin: 0 auto;
      padding-bottom: 50px;
      .title {
        width: 100%;
        font-size:34px;
        color:rgba(51,51,51,1);
        text-align: center;
        margin-bottom: 60px;
      }
      .items{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .item{
          width: 287px;
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;
          .img{
            overflow: hidden;
            width:287px;
            height:201px;
            .item-img{
              transition: all 1s;
              width:100%;
              height:100%;
            }
          }
          .item-title{
            width: 100%;
            text-align: center;
            font-size:24px;
            font-weight:500;
            color:rgba(51,51,51,1);
            margin: 30px 0;
          }
        }
        .item:hover{
          cursor: pointer;
          .item-img{
            transform: scale(1.2);
          }
        }
      }
    }
  }
</style>















