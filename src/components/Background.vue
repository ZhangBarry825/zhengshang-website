<template>
  <div
    class="background-page"
    ref="hhh"
    :class="typeIndex==0?'class0':typeIndex==1?'class1':typeIndex==2?'class2':typeIndex==3?'class3':typeIndex==4?'class4':typeIndex==5?'class5':typeIndex==6?'class6':typeIndex==7?'class7':typeIndex==8?'class8':typeIndex==9?'class9':typeIndex==10?'class10':''"
  >
    <div class="center">
      <div class="left">
        <h2
          class="text"
        >{{typeIndex==0 ?"系统集成":typeIndex==1 ?"政务云":typeIndex==2 ?"网站建设":typeIndex==3 ?"小程序定制开发":typeIndex==4 ?"App定制化开发":typeIndex==5 ?"物联网":typeIndex==6 ?"客户案例":typeIndex==7 ?"新闻中心":typeIndex==8 ?"关于我们":typeIndex==10 ?"业务领域":typeIndex==9 ?"联系我们":""}}</h2>
        <div class="border"></div>
      </div>
      <div class="right"></div>
      <div class="scroller" v-if="showScroll" @click="scrollTo"></div>
    </div>
    <div id="toHere"></div>
  </div>
</template>

<script>
export default {
  name: "Background",
  props: {
    typeIndex: {
      type: Number,
      default: 0
    },
    showScroll: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      backImg00: require('../assets/images/khal00.png'),
    }
  },
  methods: {
    scrollTo () {
      document.getElementById('toHere').scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>

<style scoped lang="scss">
.class0 {
  background-image: url('../assets/images/xtjc.png');
  .center {
    .right {
      width: 838px;
      height: 580px;
      background-image: url('../assets/images/xtjc2.png');
    }
  }
}
.class1 {
  background-image: url('../assets/images/zwy.png');
  .center {
    .right {
      margin-top: 250px;
      width: 706px;
      height: 679px;
      background-image: url('../assets/images/zwy2.png');
    }
  }
}
.class2 {
  background-image: url('../assets/images/webb.png');
  .center {
    .right {
      margin-top: 193px;
      width: 805px;
      height: 537px;
      background-image: url('../assets/images/webb2.png');
    }
  }
}
.class3 {
  background-image: url('../assets/images/mini1.png');
  .center {
    .right {
      width: 593px;
      height: 462px;
      background-image: url('../assets/images/mini2.png');
    }
  }
}
.class4 {
  background-image: url('../assets/images/appback.png');
  .center {
    .right {
      width: 853px;
      height: 496px;
      background-image: url('../assets/images/appback2.png');
    }
  }
}
.class5 {
  background-image: url('../assets/images/wlw0.png');
  .center {
    position: relative;
    .left {
      flex-shrink: 0;
    }
    .right {
      width: 1131px;
      height: 756px;
    }
  }
}
.class6 {
  background-image: url('../assets/images/khal0.png');
  .center {
    .right {
      width: 905px;
      height: 708px;
      background-image: url('../assets/images/khal00.png');
      background-position: 60px center !important;
    }
  }
}
.class7 {
  background-image: url('../assets/images/ns.png');
  .center {
    .right {
      width: 905px;
      height: 780px;
      background-image: url('../assets/images/ns0.png');
      background-position: 100px center !important;
    }
  }
}
.class8 {
  background-image: url('../assets/images/gyw.png');
  .center {
    .right {
      width: 905px;
      height: 780px;
      background-image: url('../assets/images/gyw0.png');
      background-position: 100px center !important;
    }
  }
}
.class9 {
  background-image: url('../assets/images/lx.png');
  .center {
    .right {
      width: 905px;
      height: 780px;
      background-image: url('../assets/images/lx0.png');
      background-position: 100px center !important;
    }
  }
}
.class10 {
  background-image: url('../assets/images/ywly.png');
  .center {
    .right {
      width: 1028px;
      height: 530px;
      background-image: url('../assets/images/ywly0.png');
      position: relative;
      left: 100px;
    }
  }
}
.background-page {
  @include page-style;
  height: 780px;
  @include back-img-center;
  .center {
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .left {
      display: flex;
      flex-direction: column;
      .text {
        font-size: 60px;
        font-weight: 800;
        color: rgba(255, 255, 255, 1);
      }
      .border {
        width: 126px;
        height: 14px;
        background: rgba(255, 255, 255, 1);
        margin-top: 60px;
      }
    }
    .right {
      z-index: 1;
      @include back-img-center;
    }
    .scroller {
      z-index: 10;
      cursor: pointer;
      width: 46px;
      height: 46px;
      background: rgba(0, 76, 229, 1);
      background-image: url('../assets/images/scroll.png');
      @include back-img-center;
      background-size: 26px 15px;
      position: absolute;
      left: 0;
      bottom: -25px;
    }
  }
}
</style>
