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
    <div class="game-desc" ref="wrapper">
      <p class="desc-text content" onselectstart="return false" v-html="gameDetails.content"></p>
    </div>
    <div class="stars-content">
      <h3>{{$t('m.starTitle')}}</h3>
      <div ref="wrapper1">
        <ul class="content1 stars-box" ref="content1">
          <li v-for="(item,index) in stars" :key="index">
            <img :src="item.pic_url" alt>
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="buy-btn">
      <Button round size="large" class="buy-button" @click="goBuy">{{$t('m.purchase')}}</Button>
    </div>
  </div>
</template>
<style>
.game-desc {
  padding: 10px 25px;
  margin-top: 20px;
  height: 55px;
  overflow: hidden;
  position: relative;
}
.game-desc p {
  font-size: 12px;
  color: #333333;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.game-desc span {
  position: absolute;
}
.stars-content h3 {
  color: #333;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 10px;
}
.stars-box {
  display: flex;
  text-align: center;
}
.stars-content {
  overflow: hidden;
  width: 100%;
  padding: 10px 20px;
  margin-top: 5px;
}
.stars-box img {
  width: 85px;
  height: 116px;
  display: block;
}
.stars-box li {
  margin: 0 2px;
  width: 85px
}
.stars-box li span {
  text-align: center;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
  display: block;
}
.buy-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px 30px;
  right: 0;
  border-top: 1px solid #f5f5f5;
  background-color: #fff;
  max-width: 750px;
  min-width: 320px;
  width: 100%;
  margin: 0 auto;
}
.buy-button {
  background-color: #008e98;
  color: #fff;
}
.desc-text {
  cursor: pointer;
}
@media screen and (min-width: 700px) {
  .stars-box img {
    width: 140px;
    height: 190px;
  }
  .stars-box li {
        width: 140px;
        margin: 0 2px
  }
  .game-desc p {
    font-size: 16px;
  }
  .stars-content h3 {
    font-size: 20px;
  }
  .game-desc {
    height: 120px;
  }
}
</style>
<script>
import theme from "./../../components/theme";
import BScroll from "better-scroll";
import imgUrl from "./../../assets/imgs/exmple.png";
import { Button } from "vant";
import "vant/lib/button/style";
export default {
  components: {
    theme,
    Button
  },
  data() {
    return {
      Htitle: "賽事詳情",
      gameDetails: {},
      stars: [],
      width: "",
      id: 0
    };
  },
  created() {
    this._activity();
  },
  watch: {
    stars(newVal) {
      if (newVal) {
        this.width = newVal.length * 140;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.getBetterScrollA(this.$refs.wrapper);
      this.getBetterScrollB(this.$refs.wrapper1, this.$refs.content1);
    }, 100);
  },
  methods: {
    // 获取详情
    _activity() {
      const params = {
        id: this.$route.query.id
      };
      console.log(params.id)
      // 赛事详情
      this.$post(this.$api.activityDetail + "/" + params.id).then(res => {
        console.log(res);
        this.gameDetails = res.data.topicList[0];
        this.id = res.data.topicList[0].id;
        this.$ls.set("gameDetails", JSON.stringify(res.data.topicList[0]));
      });
      // 获取明星列表
      this.$post(this.$api.showStar + "/" + params.id).then(res => {
        console.log(res);
        this.stars = res.data.categoryList;
      });
    },
    goBuy() {
      this.$router.push({ name: "details2", query: { id: this.id } });
    },
    getBetterScrollA(dom) {
      if (!this.scroll) {
        this.scrollY = new BScroll(dom, {
          click: true,
          mouseWheel: true
        });
      } else {
        this.scroll.refresh();
      }
    },
    getBetterScrollB(dom, child) {
      child.style.width = this.width + "px";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scrollX = new BScroll(dom, {
            click: true,
            mouseWheel: true,
            scrollX: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  }
};
</script>
