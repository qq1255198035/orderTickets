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
        <Cell value="香港岛和九龙半岛之间的港口和海域香港龙湾牛头角道77号" value-class="location-msg"></Cell>
        <CellGroup class="code-box">
          <Cell :center="true" v-for="(item,index) in gameDetails.codeMsg" :key="index">
            <template slot="title">
              <span class="custom-text">券码{{item.id}}：</span>
              <span class="custom-text">{{item.name}}</span>
            </template>
            <Icon
              slot="right-icon"
              :name="codeImg"
              class="custom-icon"
              @click.stop="ishow = index"
            />
          </Cell>
        </CellGroup>
        <Cell title="温馨提示" title-class="details-local" class="mt"></Cell>
        <Cell :center="true" class="border-none">
          <template slot="title">
            <span class="custom-text">赛事时间：{{gameDetails.time}}</span>
          </template>
        </Cell>
      </div>
    </div>
    <div
      class="popup-com"
      v-for="(item,index) in gameDetails.codeMsg"
      :key="index"
      @click="ishow = -1"
    >
      <popup
        :imgURL1="item.imgURL1"
        :imgURL2="item.imgURL2"
        :name="item.name"
        v-if="ishow == index"
      ></popup>
      <span v-if="ishow == index" @click="ishow = -1">x</span>
    </div>
  </div>
</template>
<style>
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
    popup,
    QRCode
  },
  data() {
    return {
      ishow: -1,
      codeImg,
      Htitle: "订单详情",
      gameDetails: {
        title: "篮球比赛",
        desc: "Basketball match",
        place: "香港",
        time: "2019-3-24 9:00-15:00",
        person: "13000",
        message:
          "有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场",
        codeMsg: [
          {
            id: "01",
            name: "652020005",
            imgURL1: imgUrl1,
            imgURL2: imgUrl2,
            show: false
          },
          {
            id: "02",
            name: "25200",
            imgURL1: imgUrl1,
            imgURL2: imgUrl2,
            show: false
          },
          {
            id: "03",
            name: "652020005200",
            imgURL1: imgUrl1,
            imgURL2: imgUrl2,
            show: false
          },
          {
            id: "04",
            name: "652020005200",
            imgURL1: imgUrl1,
            imgURL2: imgUrl2,
            show: false
          },
          {
            id: "05",
            name: "652020005200",
            imgURL1: imgUrl1,
            imgURL2: imgUrl2,
            show: false
          },
          {
            id: "06",
            name: "652020005200",
            imgURL1: imgUrl1,
            imgURL2: imgUrl2,
            show: false
          },
          {
            id: "07",
            name: "652020005555",
            imgURL1: imgUrl1,
            imgURL2: imgUrl2,
            show: false
          }
        ]
      }
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
    //this.gameDetails = JSON.parse(this.$ls.get("gameDetails"));
  },
  methods: {
        ishow() {
              this.qrcode()
        },
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        width: 100,
        height: 100, // 高度
        text: "56663159" // 二维码内容
        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f'
        // foreground: '#ff0'
      });
      console.log(qrcode);
    }
  }
};
</script>
