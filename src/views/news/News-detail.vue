<template>
  <div class="news-page">
    <Header :menu="3" :need-fixed="true"></Header>
    <div class="content">
      <div class="center">
        <div class="title">{{info.title}}</div>
        <div class="time">{{info.category}} | {{info.ctime}}</div>
        <div class="article" v-html="info.content"></div>
      </div>
      <div class="more-list">
        <div class="previous" @click="previous" v-if="info.pre">
          <div class="line1">上一篇</div>
          <div class="line2">{{info.pre.title}}</div>
          <div class="line3">{{info.pre.ctime}}</div>
        </div>
        <div class="next" @click="nextdata" v-if="info.next">
          <div class="line1">下一篇</div>
          <div class="line2">{{info.next.title}}</div>
          <div class="line3">{{info.next.ctime}}</div>
        </div>
        <div class="back" @click="$router.push('/news')">
          <div class="text">返回列表</div>
          <img src="../../assets/images/back0.png" alt />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { newsinfoapi } from "../../utils/api";
export default {
  name: "NewsDetail",
  components: {
    Header,
    Footer,
  },
  data () {
    return {
      id: '',
      info: {}
    }
  },
  created () {
    this.id = this.$route.query.id
    this.retrieveData()
  },
  methods: {
    async retrieveData () {
      this.loading = true
      let { data } = await newsinfoapi({ id: this.id })
      this.info = data
      this.loading = false
      console.log(data, "详情")
    },
    previous () {
      this.id = this.info.pre.id
      this.retrieveData()

    },
    nextdata () {
      this.id = this.info.next.id
      this.retrieveData()
    }
  }
}
</script>

<style scoped lang="scss">
.news-page {
  @include page-style;
  background-color: #f4f5f9;
  padding-top: 100px;
  .content {
    width: 100%;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .center {
      background-color: #ffffff;
      width: 1300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 60px 74px;
      box-sizing: border-box;
      .title {
        font-size: 36px;
        font-weight: 500;
        color: #333333;
      }
      .time {
        font-size: 16px;
        font-weight: 400;
        color: #9eaac3;
        white-space: pre-wrap;
        margin: 45px 0;
      }
      .article {
        width: 100%;
      }
    }
    .more-list {
      width: 1300px;
      margin: 0 auto;
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      .previous,
      .next {
        cursor: pointer;
        width: 410px;
        height: 168px;
        background: #ffffff;
        padding: 20px;
        box-sizing: border-box;
        border-left: 3px solid #ff8338;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .line1 {
          font-size: 16px;
          font-weight: 400;
          color: #333333;
        }
        .line2 {
          font-size: 16px;
          font-weight: 400;
          color: #333333;
        }
        .line3 {
          font-size: 14px;
          font-weight: 400;
          color: #9eaac3;
        }
      }
      .next {
        // margin-left: -80px;
      }
      .previous:hover,
      .next:hover {
        box-shadow: 0px 3px 62px 0px rgba(106, 122, 156, 0.3);
        .line2 {
          color: #004ce5;
        }
      }
      .back {
        cursor: pointer;
        display: flex;
        align-items: center;
        align-self: flex-end;
        .text {
          font-size: 16px;
          font-weight: 400;
          color: #9eaac3;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>












