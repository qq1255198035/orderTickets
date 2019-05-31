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
    <CellGroup>
      <Cell class="my-cell activities">
        <!--<template slot="title">
                              <Tag color="#008e98">活动</Tag>
                              <span class="custom-text">{{buyMessage.activities}}</span>
        </template>-->
      </Cell>
      <Cell class="my-cell preferential">
        <template slot="title">
          <Tag color="#f8955c">{{$t('m.discountTitle')}}</Tag>
          <span class="custom-text">{{coupon.name}}</span>
        </template>
      </Cell>
    </CellGroup>

    <div class="goods-list" ref="wrapper2">
      <div class="goods-item content">
        <Cell class="my-cell" v-for="(item,index) in buyMessage" :key="index">
          <template slot="title">
            <span class="cell-title">{{item.name}}</span>
          </template>
          <div class="buy-message">
            <p>$ {{item.retail_price}}</p>
            <!--<Tag color="#f8955c" class="tag-1">{{item.content}}</Tag>
            <Tag color="#f8955c" plain class="tag-2">${{item.discount}}</Tag>-->
          </div>
          <Button
            type="warning"
            plain
            size="small"
            @click="$router.push({ name: 'buy', query: { price: item.retail_price, id: id, goodsId: item.id, name:item.name}})"
          >{{$t('m.buyTitle')}}</Button>
        </Cell>
      </div>
    </div>
  </div>
</template>
<style>
.custom-text {
  margin-left: 20px;
  font-size: 14px;
  width: 50%;
}
.activities span.custom-text {
  color: #666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
}
.preferential .custom-text {
  color: #f8955c;
}
.my-cell {
  border-bottom: 1px solid #ccc;
}
.my-cell .van-cell__title {
  display: flex;
  align-items: center;
}
.my-cell .van-cell__value {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.my-cell .cell-title {
  font-size: 16px;
  color: #333;
}
.buy-message p {
  color: #ff0000;
  font-size: 16px;
}

.goods-list {
  height: 310px;
  overflow: hidden;
}
.buy-message .tag-1 {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.buy-message .tag-2::after {
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
}
@media screen and (min-width: 700px) {
  .goods-list {
    height: 500px;
  }
}
</style>
<script>
import BScroll from "better-scroll";
import theme from "./../../components/theme";
import { Button, Cell, CellGroup, Tag } from "vant";
import "vant/lib/cell/style";
import "vant/lib/cell-group/style";
import "vant/lib/button/style";
import "vant/lib/tag/style";
export default {
  components: {
    theme,
    Button,
    Cell,
    CellGroup,
    Tag
  },
  data() {
    return {
      Htitle: "賽事詳情",
      gameDetails: {},
      buyMessage: {},
      coupon: '',
      id: '',
      goodsId: ''
    };
  },
  couputed: {

  },
  mounted() {
    this.$nextTick(() => {
      this.getBetterScrollA(this.$refs.wrapper2);
    });
    this.gameDetails = JSON.parse(this.$ls.get("gameDetails"));
  },
  created() {
    this._getBuyInfo();
    this._getCoupon();
    this.id = this.$route.query.id
    console.log(this.id)
  },
  methods: {
    // 优惠券
    _getCoupon() {
      const params = {
        id: this.$ls.get("userid")
      }
      this.$post(this.$api.coupon + '/' + params.id).then(res => {
        console.log(res);
        this.coupon = res.data[0]
      });
    },
    // 票
    _getBuyInfo() {
      const params = {
        id: this.$route.query.id
      }
      // const _id = this.$ls.get("token");
      this.$post(this.$api.ticket, {
        id: params.id
      }).then(res => {
        console.log(res);
        if (res.errno == 0) {
          //console.log(res)
          this.buyMessage = res.data;
        }
      });
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
    }
  }
};
</script>
