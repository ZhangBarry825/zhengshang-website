<template>
  <div class="contact-page">
    <Header :menu="5"></Header>
    <Background :type-index="9" :show-scroll="false"></Background>
    <div class="map-box">
      <div class="back-white" :style="'width: '+(1300+marginWidth)+'px'"></div>
      <div class="center">
        <div class="left">
          <div class="blue"></div>
          <div class="map">
            <baidu-map
              :center="center"
              :zoom="zoom"
              @ready="handler"
              style=" width: 582px;height: 512px;"
              @click="getClickInfo"
              :scroll-wheel-zoom="true"
            ></baidu-map>
          </div>
        </div>
        <div class="right">
          <div class="right-title">项目需求</div>
          <div class="border"></div>
          <el-form
            label-position="right"
            label-width="0"
            :model="formData"
            :rules="rules"
            ref="ruleForm"
          >
            <el-form-item prop="name">
              <el-input v-model="formData.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input v-model="formData.phone" placeholder="请输入电话"></el-input>
            </el-form-item>
            <el-form-item prop="description">
              <el-input
                type="textarea"
                :rows="5"
                v-model="formData.description"
                placeholder="请输入简单需求（如网站建设、APP开发、软件开发、小程序开发等）"
              ></el-input>
            </el-form-item>
          </el-form>
          <div class="button" @click="submitForm('ruleForm')">免费获取项目方案和报价</div>
        </div>
      </div>
    </div>
    <div class="information">
      <div class="center">
        <div class="item">
          <div class="item-left">
            <img src="../assets/images/address.png" alt />
          </div>
          <div class="item-right">
            <div class="line1">地址</div>
            <div class="line2">{{Address.companys[0].place}}</div>
          </div>
        </div>
        <div class="item">
          <div class="item-left">
            <img src="../assets/images/email.png" alt />
          </div>
          <div class="item-right">
            <div class="line1">邮箱</div>
            <div class="line2">{{Address.qq}}</div>
          </div>
        </div>
        <div class="item">
          <div class="item-left">
            <img src="../assets/images/address.png" alt />
          </div>
          <div class="item-right">
            <div class="line1">电话</div>
            <div class="line2">{{Address.tel}}</div>
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
import { saveapi, bottomIn } from '../utils/api';
export default {
  name: "Contact",
  components: {
    Header,
    Footer,
    Background,
  },
  data () {
    var validatePhone = (rule, value, callback) => {
      if (!(/^1[3456789]\d{9}$/.test(value))) {
        callback(new Error('请输入正确的电话号码'));
      } else {
        callback();
      }
    };
    return {
      screenWidth: '',
      screenHeight: '',
      center: { lng: 113.774507, lat: 34.776789 },
      zoom: 19,
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入需求内容', trigger: 'blur' },
        ],
      },
      formData: {
        name: '',
        phone: '',
        description: ''
      },
      Address: {
        companys:[
          {
            place:'',
            qq:'',
            tel:''
          },
          {
            place:'',
            qq:'',
            tel:''
          },
          {
            place:'',
            qq:'',
            tel:''
          }
        ]
      }
    }
  },
  computed: {
    marginWidth () {
      return ((this.screenWidth - 1300) / 2) > 0 ? ((this.screenWidth - 1300) * 3 / 4) : 0
    }
  },
  created () {
    this.getAddress()
  },
  methods: {
    async getAddress () {
      let { data } = await bottomIn()
      console.log(data, "01001")
      this.Address = data
    },
    submitForm (formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          saveapi({ name: this.formData.name, mobile: this.formData.phone, remark: this.formData.description }).then(res => {
            if(res.code==1){
              that.$message({
                message:'提交成功',
                type:'success'
              })
            }else {
              that.$message('提交错误')
            }

            console.log(res)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handler ({ BMap, map }) {
      var point = new BMap.Point(this.center.lng, this.center.lat)
      map.centerAndZoom(point, this.zoom)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中

    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
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
.contact-page {
  @include page-style;
  background-color: #f4f5f8;

  .map-box {
    width: 100%;
    min-height: 777px;
    display: flex;
    justify-content: center;
    position: relative;
    .back-white {
      background-color: #ffffff;
      right: 0;
      position: absolute;
      min-height: 100%;
      justify-self: flex-end;
    }
    .center {
      padding: 100px 0;
      box-sizing: border-box;
      width: 1300px;
      display: flex;
      justify-content: space-between;
      z-index: 1;
      .left {
        width: 582px;
        position: relative;
        .blue {
          width: 220px;
          height: 512px;
          background: #024ce5;
        }
        .map {
          position: absolute;
          width: 582px;
          height: 512px;
          top: 50px;
          left: 46px;
        }
      }
      .right {
        width: 510px;
        display: flex;
        flex-direction: column;
        .right-title {
          font-size: 34px;
          font-weight: 500;
          color: #343434;
        }
        .border {
          width: 65px;
          height: 6px;
          background: #024ce5;
          margin-top: 20px;
          margin-bottom: 61px;
        }
        .button {
          cursor: pointer;
          width: 245px;
          background: #ffffff;
          border: 1px solid #024ce5;
          padding-top: 15px;
          padding-bottom: 15px;
          box-sizing: border-box;
          margin-top: 30px;
          text-align: center;
          font-size: 16px;
          font-weight: 400;
          color: #024ce5;
        }
      }
    }
  }
  .information {
    width: 100%;
    display: flex;
    justify-content: center;
    .center {
      width: 1300px;
      display: flex;
      justify-content: space-between;
      padding: 100px 0;
      .item {
        height: 90px;
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 33.33%;
        .item-left {
          flex-shrink: 0;
          width: 90px;
          height: 90px;
          background: #ffffff;
          box-shadow: 1px 8px 30px 0px rgba(85, 113, 216, 0.15);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .item-right {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding-left: 20px;
          box-sizing: border-box;
          .line1 {
            font-size: 24px;
            font-weight: 400;
            color: #000034;
          }
          .line2 {
            margin-top: 17px;
            font-size: 20px;
            font-weight: 400;
            color: #9eaac4;
          }
        }
      }
    }
  }
}
</style>













