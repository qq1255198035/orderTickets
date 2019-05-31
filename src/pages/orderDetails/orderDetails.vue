<template>
  <div class="container">
    <theme
      :imgTitle="gameDetails.avatar"
      :Htitle="Htitle"
      :title="gameDetails.title"
      :desc="gameDetails.engtitle"
      :place="gameDetails.location"
      :time="gameDetails.competition_time"
      :startTime="gameDetails.start_time"
      :overTime="gameDetails.end_time"
      :person="gameDetails.people_count"
    ></theme>
    <div class="order-details wrapper">
      <div class="content">
        <Cell title="详细地址" title-class="details-local"></Cell>
        <Cell :value="gameDetails.location" value-class="location-msg"></Cell>
        <CellGroup class="code-box">
          <Cell :center="true" v-for="(item,index) in vcodes" :key="index">
            <template slot="title">
              <span class="custom-text">券码{{item.id}}：</span>
              <span class="custom-text">{{item.vcode}}</span>
            </template>
            <!--点击-->
            <Icon slot="right-icon" :name="codeImg" class="custom-icon" @click.stop="ishows(item)"/>
          </Cell>
        </CellGroup>
        <Cell :title="$t('m.reminder')" title-class="details-local" class="mt"></Cell>
        <Cell :center="true" class="border-none">
          <template slot="title">
            <span class="custom-text">{{$t('m.tournament')}}：{{gameDetails.competition_time}}</span>
          </template>
        </Cell>
      </div>
    </div>
    <!--展示码-->
    <div >
      <transition name="fade" >
        <div class="qrcode-wrapper" @click="isHide" v-show="show">
          <div class="qrcode">
            <div class="vcodeTitle">{{$t('m.vcodeNmae')}}:{{vcodeNmae}}</div>
            <canvas id="canvas"></canvas>
            <div @click="isHide" class="close-vcode">x</div>
          </div>
        </div>
      </transition>
    </div>
    <!--<div class="popup-com" v-for="(item,index) in vcodes.vcode" :key="index">
      <popup :imgURL1="item.imgURL1" :imgURL2="item.imgURL2" :name="item.name" v-model="show"></popup>
      <span>x</span>
    </div>-->
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s;
}
.fade-enter,
.fade-leave-to {
  transform: translate3d(100%, 0, 0);
}
.qrcode-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 99;
  height: 100%;
  background: rgba(7, 17, 27, 0.1);
}
.qrcode-wrapper .qrcode {
  position: absolute;
  background: #fff;
  top: 50%;
  left: 50%;
  width: 180px;
  height: 180px;
  border-radius: 6px;
  margin-top: -90px;
  margin-left: -90px;
  text-align: center
}
#canvas{
  width: 120px;
  height: 120px;
}
.close-vcode{
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  position: relative;
  bottom: -40px;
  left: 50%;
  margin-left: -15px
}
.vcodeTitle{
  padding: 10px 0;
  color: #3d3d3d
}
.van-overflow-hidden {
  overflow: auto !important;
}
.order-details {
  width: 100%;
  height: 345px;
  overflow: hidden;
}
.mt {
  margin-top: 15px;
}
.border-none {
  border: none;
}
.order-details .content {
  background-color: #eee;
}
.order-details .details-local {
  font-size: 16px;
  color: #333;
}
.order-details .location-msg {
  font-size: 14px;
  color: #666;
}
.order-details .custom-text {
  margin-left: 0;
  color: #666;
}
.code-box .custom-icon {
  font-size: 30px;
  padding: 10px;
}
.popup-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  background-color: #fff;
}
.popup-box .txm {
  width: 204px;
  height: 52px;
}
.popup-box .ewm {
  width: 95px;
  height: 95px;
}
@media screen and (min-width: 700px) {
  .order-details {
    height: calc(100% - 390px);
    height: -webkit-calc(100% - 390px);
    height: -moz-calc(100% - 390px);
    height: -o-calc(100% - 390px);
  }
}
.popup-com span {
  z-index: 5000;
  color: #000;
  position: absolute;
  left: 50%;
  top: 72%;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  line-height: 40px;
  font-size: 26px;
  vertical-align: bottom;
  margin-left: -20px;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
}
</style>
<script>
import QRCode from "qrcode";
import JsBarcode from "jsbarcode";
import theme from "./../../components/theme";
import BScroll from "better-scroll";
import popup from "./../../components/popup";
import { Cell, CellGroup, Icon, Popup } from "vant";
import "vant/lib/cell/style";
import "vant/lib/icon/style";
import "vant/lib/cell-group/style";
import imgUrl1 from "./../../assets/imgs/txm.png";
import imgUrl2 from "./../../assets/imgs/ewm.png";
import codeImg from "./../../assets/imgs/ercode.png";
export default {
  components: {
    theme,
    Cell,
    CellGroup,
    Icon,
    popup
  },
  data() {
    return {
      codeImg,
      Htitle: "订单详情",
      gameDetails: {
        avatar: "",
        location: "",
        start_time: "",
        endTime: "",
        competition_time: "",
        title: ""
      },
      vcodeNmae: "",
      vcodes: "",
      show: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      let wrapper = document.querySelector(".wrapper");
      if (!this.scroll) {
        this.scroll = new BScroll(wrapper, {
          click: true,
          taps: true,
          mouseWheel: true
        });
      } else {
        this.scroll.refresh();
      }
    });
  },
  created() {
    this.gameDetails.avatar = this.$ls.get("imgUrl");
    this.gameDetails.location = this.$ls.get("address");
    this.gameDetails.start_time = this.$ls.get("startTime");
    this.gameDetails.endTime = this.$ls.get("endTime");
    this.gameDetails.competition_time = this.$ls.get("saiTime");
    this.gameDetails.title = this.$ls.get("tradeName");

    this._orderDetails();
  },
  methods: {
    _orderDetails() {
      const params = {
        goodsId: this.$route.query.id
      };
      this.$post(this.$api.couponList, params).then(res => {
        console.log(res);
        this.vcodes = res.list;
      });
    },
    isHide() {
      this.show = false
    },
    ishows(item) {
      this.vcodeNmae = item.vcode
      this.show = true;
      var canvas = document.getElementById("canvas");
      console.log(canvas);

      QRCode.toCanvas(canvas, item.vcode, function(error) {
        if (error) console.error(error);
        console.log("success!");
      });
    }
  }
};
</script>
