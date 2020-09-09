<template>
  <div class="case-page">
    <Header :menu="2"></Header>
    <Background :type-index="6" :show-scroll="false"></Background>
    <div class="menu-list">
      <div class="center">
        <van-tabs v-model="activeIndex" @change="menuChange">
          <van-tab :title="item.title" :index="1111" v-for="(item,index) in tabList" :key="index"></van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="items-box">
      <div class="center">
        <van-grid :gutter="0" column-num="3" square :border="false" v-loading="loading">
          <van-grid-item
            v-for="(item,index) in datalist"
            :key="index"
            @click="$router.push({path: '/case-detail',query: {id: item.id}})">
            <div class="item-box">
              <div class="img-box"><div class="img" :style="'background-image: url('+item.img+')'"></div></div>
              <div class="bottom">
                <div class="line1">{{item.title}}</div>
                <div class="line2">{{item.remark}}</div>
              </div>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            @current-change="handleSizeChange"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Background from "../../components/Background";
import { Caseapi, categorysapi } from '../../utils/api'

export default {
  name: "Case",
  components: {
    Header,
    Footer,
    Background,
  },
  data () {
    return {
      activeIndex: 0,
      tabList: [],
      pindex: '',
      page: 1,
      datalist: [],
      total: 0,
      loading: false
    }
  },
  created () {
    this.typeOfAcquisition()
  },
  methods: {
    asdasd () {
      console.log("0000000")
    },
    //   获取数据列表
    async retrieveData () {
      this.loading = true
      let { data } = await Caseapi({
        pindex: this.pindex,
        page: this.page,
        limit: 9
      })
      this.datalist = data.rows
      this.total = data.total
      this.loading = false
      console.log(data, '客户案例')
    },
    // 获取种类
    async typeOfAcquisition () {
      let { data } = await categorysapi()
      this.pindex = data[0].index
      this.tabList = data
      this.retrieveData()
      console.log(data, '获取种类')
    },
    handleSizeChange (val) {
      this.page = val
      this.retrieveData()
      console.log(val)
    },
    menuChange (index, title) {
      console.log(index, title)
      this.pindex = this.tabList[index].index
      this.page = 1
      this.retrieveData()
    }
  }
}
</script>

<style scoped lang="scss">
.case-page {
  @include page-style;
  background-color: #f4f5f8;

  .menu-list {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 60px 0;

    .center {
      width: 1300px;
      /deep/ .van-tabs {
        .van-tabs__wrap {
          border-bottom: 1px solid #d6dce9;
          height: 55px;
          .van-tabs__nav {
            background-color: #f4f5f8 !important;
          }
          .van-tab__text {
            font-size: 24px;
            font-weight: 400;
            overflow: visible;
          }
          .van-tab {
            margin-bottom: 30px;
          }
          .van-tab--active {
            color: #014ce5;
          }
          .van-tabs__line {
            background-color: #014ce5;
          }
        }
      }
    }
  }
  .items-box {
    width: 100%;
    display: flex;
    justify-content: center;
    .center {
      width: 1300px;
      /deep/ .van-grid-item__content {
        background-color: #f4f5f8;
        padding: 0;
        .item-box {
          cursor: pointer;
          width: 381px;
          height: 391px;
          background: #ffffff;
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          .img-box{
            width: 381px;
            height: 258px;
            overflow: hidden;
            .img {
              transition: all 1s;
              width: 381px;
              height: 258px;
              @include back-img-center;
            }
          }
          .bottom {
            width: 100%;
            height: calc(100% - 258px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .line1 {
              font-size: 24px;
              font-weight: 400;
              color: #333333;
            }
            .line2 {
              font-size: 16px;
              margin-top: 20px;
              font-weight: 400;
              color: #9eaac3;
            }
          }
        }
        .item-box:hover {
          box-shadow: 0px 3px 30px 0px rgba(106, 122, 156, 0.3);
          .img{
            transform: scale(1.1);
          }
        }
      }
      .pagination {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 50px 0 80px 0;
        /deep/ .active {
          background-color: #014ce5;
        }
      }
    }
  }
}
</style>
