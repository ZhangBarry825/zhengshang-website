<template>
  <div class="news-page">
    <Header :menu="3"></Header>
    <Background :type-index="7" :show-scroll="false"></Background>
    <div class="menu-list">
      <div class="center">
        <van-tabs v-model="activeIndex" @change="menuChange">
          <van-tab
            :title="item.title"
            :index="1111"
            v-for="(item,index) in Acquisition"
            :key="index"
          ></van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="page-box">
      <div class="center">
        <div class="top-items">
          <div
            class="top-item"
            v-for="(item,index) in recommend"
            @click="$router.push({path: '/news-detail',query: {id: item.id}})"
            :style="'background-image: url('+item.img+')'"
            :key="index"
          >
            <div class="gray">
              <div class="line1">{{item.title}}</div>
              <div class="line2">{{item.ctime}}</div>
            </div>
          </div>
        </div>
        <div class="list-items">
          <div
            class="item"
            v-for="(item,index) in newslist"
            :key="index"
            @click="$router.push({path: '/news-detail',query: {id: item.id}})"
          >
            <div class="left" :style="'background-image: url('+item.img+')'"></div>
            <div class="right">
              <div class="line1">{{item.title}}</div>
              <div class="line2">{{item.remark}}</div>
              <div class="line3">{{item.ctime}}</div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            @current-change="handleSizeChange"
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
import { catenewsapi, newslistapi } from '../../utils/api';
export default {
  name: "News",
  components: {
    Header,
    Footer,
    Background,
  },
  data () {
    return {
      Acquisition: [],
      pindex: '',
      page: 1,
      activeIndex: 0,
      newslist: [{ img: '', title: '' }],
      recommend: [{ img: '', title: '' }],
      total: 1
    }
  },
  created () {
    this.typeOfAcquisition()
  },
  methods: {
    //   获取种类
    async typeOfAcquisition () {
      let { data } = await catenewsapi()
      this.Acquisition = data
      this.pindex = data[0].index
      this.getList()
      console.log(data, "新闻种类")
    },
    // 获取列表
    async getList () {
      let { data } = await newslistapi({ limit: 8, page: this.page, pindex: this.pindex })
      if (this.page == 1 && data.rows.length >= 3) {
        this.recommend = []
        this.recommend.push(data.rows[0])
        this.recommend.push(data.rows[1])
        this.recommend.push(data.rows[2])
        data.rows.splice(0, 1);
        data.rows.splice(1, 1);
        data.rows.splice(2, 1);
        this.newslist = data.rows
        console.log(this.newslist, "1111111111")
      } else if (this.page == 1 && data.rows.length > 0 && data.rows.length < 3) {
        this.recommend = data.rows
        data.rows = []
      } else {
        this.newslist = data.rows
      }
      this.total = data.total
      console.log(this.recommend, "获取列表")
      console.log(this.newslist, "获取列表")
    },
    handleSizeChange (val) {
      this.page = val
      this.getList()
      console.log(val)
    },
    menuChange (index, title) {
      console.log(index, title)
      this.recommend = []
      this.newslist = []
      this.pindex = this.Acquisition[index].index
      this.page = 1
      this.getList()
    }
  }
}
</script>

<style scoped lang="scss">
.news-page {
  @include page-style;
  background-color: #f4f5f8;
  .menu-list {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 60px 0 0;

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
  .page-box {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 80px 0;
    .center {
      width: 1300px;
      display: flex;
      flex-direction: column;
      .top-items {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .top-item {
          cursor: pointer;
          width: 381px;
          height: 258px;
          @include back-img-center;
          display: flex;
          align-items: flex-end;
          .gray {
            width: 100%;
            height: 88px;
            background: rgba(16, 21, 51, 0.5);
            padding: 15px 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .line1 {
              font-size: 24px;
              font-weight: 400;
              color: #ffffff;
              @include line-hidden(1);
            }
            .line2 {
              font-size: 14px;
              font-weight: 400;
              color: #ffffff;
              opacity: 0.6;
            }
          }
        }
        .top-item:hover {
          box-shadow: 0px 3px 62px 0px rgba(106, 122, 156, 0.3);
        }
      }
      .list-items {
        margin-top: 60px;
        width: 100%;
        display: flex;
        flex-direction: column;
        .item {
          margin-bottom: 22px;
          cursor: pointer;
          width: 1298px;
          height: 222px;
          background: #ffffff;
          display: flex;
          flex-direction: row;
          padding: 20px;
          box-sizing: border-box;
          .left {
            width: 213px;
            height: 182px;
            @include back-img-center;
          }
          .right {
            width: calc(100% - 213px);
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;
            padding-top: 10px;
            padding-left: 27px;

            .line1 {
              font-size: 24px;
              font-weight: 500;
              color: #333333;
            }
            .line2 {
              font-size: 16px;
              font-weight: 400;
              color: #333333;
              line-height: 26px;
              @include line-hidden(3);
            }
            .line3 {
              font-size: 16px;
              font-weight: 500;
              color: #9eaac3;
            }
          }
        }
        .item:hover {
          box-shadow: 0px 3px 62px 0px rgba(106, 122, 156, 0.3);
          .line1 {
            font-size: 24px;
            font-weight: 500;
            color: rgba(0, 47, 247, 1);
          }
        }
      }

      .pagination {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 50px 0 0 0;
        /deep/ .active {
          background-color: #014ce5;
        }
      }
    }
  }
}
</style>




















