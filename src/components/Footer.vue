<template>
  <div class="footer-page">
    <div class="center">
      <div class="foo-line1">
        <img src="../assets/images/logo.png" alt />
      </div>
      <div class="foo-line2">
        <div class="column1">
          <div class="line">QQ邮箱：{{pageData.qq}}</div>
          <div class="line">联系电话：{{pageData.tel}}</div>
          <div class="line">总部：{{companys[0].name}}</div>
          <div class="line">办公地址：{{companys[0].place}}</div>
        </div>
        <div class="column2">
          <div>
            <div class="line">分部：{{companys[1].name}}</div>
            <div class="line">办公地址：{{companys[1].place}}</div>
          </div>
          <div>
            <div class="line">分部：{{companys[2].name}}</div>
            <div class="line">办公地址：{{companys[2].place}}</div>
          </div>
        </div>
        <div class="column3">
          <div class="line">{{pageData.copyright}}</div>
          <div class="line">{{pageData.icp}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bottomIn } from '../utils/api'
export default {
  name: "Footer",
  data () {
    return {
      pageData: {
        qq:'',
        icp:'',
        tel:''
      },
      companys: [{
        name:''
      },{
        name:''
      },{
        name:''
      }]
    }
  },
  created () {
    this.receiveData()
  },
  methods: {
    async receiveData () {
      let { data } = await bottomIn()
      this.pageData = data
      this.companys = data.companys
      //console.log(data)
    },
  },
}
</script>

<style scoped lang="scss">
.footer-page {
  @include page-style;
  height: 352px;
  background: #131726;
  padding: 50px 0 64px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  .center {
    width: 1300px;
    display: flex;
    flex-direction: column;

    .line {
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      opacity: 0.7;
      margin: 10px 0;
      line-height: 1.5;
    }

    .foo-line1 {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      padding-bottom: 50px;

      img {
        width: 134px;
        height: 41px;
      }
    }

    .foo-line2 {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .column1,
      .column2 {
        .line:nth-child(3) {
          margin-top: 30px;
        }
      }
      .column3 {
        width: 220px;
        .line:nth-child(2) {
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
