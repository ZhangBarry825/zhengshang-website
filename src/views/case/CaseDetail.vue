<template>
  <div class="case-detail-page">
    <Header :menu="2" :need-fixed="true"></Header>
    <div class="content" v-loading="loading">
      <div class="center">
        <div class="content-left">
          <img :src="info.info.content" alt />;
        </div>
        <div class="content-right">
          <div
            class="item-box"
            v-for="(item, index) in info.recommend"
            :key="index"
            @click="switchDetails(item.id)"
          >
            <div class="img" :style="'background-image: url('+item.img+')'"></div>
            <div class="bottom">
              <div class="line1">{{item.title}}</div>
              <div class="line2">{{item.remark}}</div>
            </div>
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
import { detailsapi } from '../../utils/api'
export default {
  name: "CaseDetail",
  components: {
    Header,
    Footer,
  },
  data () {
    return {
      id: '',
      info: {
        info:{
          content:''
        }
      },
      loading: false
    }
  },
  created () {
    this.id = this.$route.query.id
    this.retrieveData()
  },
  methods: {
    async retrieveData () {
      this.loading = true
      let { data } = await detailsapi({ id: this.id })
      this.info = data
      this.loading = false
      console.log(data, "详情")

    },
    switchDetails (id) {
      this.id = id
      this.retrieveData()
    },
  }
}
</script>

<style scoped lang="scss">
.case-detail-page {
  @include page-style;
  background-color: #f4f5f9;
  padding-top: 100px;
  .content {
    margin: 80px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    .center {
      width: 1300px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .content-left {
        width: 858px;
        img {
          width: 100%;
        }
      }
      .content-right {
        width: 381px;
        display: flex;
        flex-direction: column;

        .item-box {
          cursor: pointer;
          width: 381px;
          height: 391px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 60px;
          .img {
            width: 381px;
            height: 258px;
            @include back-img-center;
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
        }
      }
    }
  }
}
</style>
