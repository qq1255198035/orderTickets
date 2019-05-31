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
    <div class="buy-details">
      <Cell class="van-cell">
        <template slot="title">
          <span class="cell-title">{{name}}</span>
        </template>
        <div class="buy-message">
          <p>{{calcPrice}}</p>
          <Stepper
            v-model="num"
            integer
            :min="1"
            :max="40"
            :step="1"
            disable-input
            @change="changeNum"
          ></Stepper>
        </div>
      </Cell>
      <Cell class="van-cell">
        <template slot="title">
          <span class="cell-title">小计</span>
        </template>
        <div class="buy-message">
          <p>{{calcPrice | fomatMoney}}</p>
        </div>
      </Cell>
      <Cell class="van-cell">
        <template slot="title">
          <span class="cell-title"></span>
        </template>
        <div class="total-price">
          共
          <span>{{num}}</span>张票
          <span>{{$t('m.subtotal')}}:</span>
          <p>{{calcPrice | fomatMoney}}</p>
        </div>
      </Cell>
    </div>
    <div class="buy-bottom">
      <Cell class="van-cell">
        <template slot="title">
          <span class="cell-title-bottom">不支持退票</span>
        </template>
        <div class="total-price">
          {{$t('m.needPay')}}
          <p>{{calcPrice | fomatMoney}}</p>
        </div>
      </Cell>
      <div class="buyBtn-box">
        <Button
          round
          size="large"
          plain
          class="get-catecory"
          @click="addCategory"
        >{{$t('m.addCart')}}</Button>
        <Button round size="large" class="go-buy" @click="goTobuy">{{$t('m.buyNow')}}</Button>
      </div>
    </div>
  </div>
</template>
<style>
.cell-title {
  font-size: 16px;
}
.buy-message button,
input {
  color: #000 !important;
  border: 1px solid #ccc;
  background-color: #fff !important;
  margin: 2px 0 !important;
}
.buy-message input {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  height: 28px;
}
.van-cell {
  border-bottom: 1px solid #ccc;
}
.van-cell .cell-title-bottom {
  color: #aaa;
}
.buy-bottom .van-cell {
  border-bottom: none;
}
.total-price {
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  color: #333;
}
.total-price p {
  color: #ff0000;
}
.buy-message p {
  color: #ff0000;
  font-size: 16px;
}
.buy-bottom .total-price {
  justify-content: flex-end;
}
.van-cell .total-price p {
  margin-left: 10px;
}
.buy-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 750px;
  min-width: 320px;
  width: 100%;
  margin: 0 auto;
  border-top: 1px solid #ccc;
}
.buyBtn-box {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 30px;
}
.buyBtn-box .get-catecory {
  border-color: #008e98;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  color: #333;
}
.buyBtn-box .go-buy {
  background-color: #008e98;
  color: #fff;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: 1px solid #008e98;
}
.van-cell:not(:last-child)::after {
  border-bottom: none !important;
}
.myToast {
  width: 320px;
}
.myToast i {
  color: #d81e06;
}
.buy-details .buy-message {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
<script>
import theme from "./../../components/theme";
import { Button, Cell, Stepper, Toast } from "vant";
import "vant/lib/cell/style";
import "vant/lib/cell-group/style";
import "vant/lib/button/style";
import "vant/lib/stepper/style";
import "vant/lib/toast/style";
export default {
  components: {
    theme,
    Button,
    Cell,
    Stepper
  },
  data() {
    return {
      num: 1,
      Htitle: "赛事详情",
      price: 0,
      id: "",
      name: ""
    };
  },
  created() {
    this.price = this.$route.query.price;
    this.id = this.$route.query.id;
    this.gameDetails = JSON.parse(this.$ls.get("gameDetails"));
    this.name = this.$route.query.name;
  },
  mounted() {},
  computed: {
    calcPrice() {
      return this.num * this.price;
    }
  },
  methods: {
    addCategory() {
      const params = {
        goodsId: this.$route.query.goodsId,
        number: this.num,
        userid: this.$ls.get("userid"),
        price: this.calcPrice
      };
      this.$post(this.$api.cartAdd, {
        goodsId: params.goodsId,
        number: params.number,
        userid: params.userid,
        price: params.price
      }).then(res => {
        console.log(res);
        if (res.data.code == 1) {
          Toast.success({
            message: "添加成功，在購物車等親~",
            className: "myToast"
          });
        } else if (res.errno == 401) {
          Toast.fail({
            message: "庫存不足",
            className: "myToast"
          });
        }
      });
    },
    changeNum() {},
    //立即购买
    goTobuy() {
      const params = {
        goodsId: this.$route.query.goodsId,
        number: this.num,
        userid: this.$ls.get("userid"),
        price: this.calcPrice
      };
      this.$post(this.$api.cartAdd, {
        goodsId: params.goodsId,
        number: params.number,
        userid: params.userid,
        price: params.price
      }).then(res => {
        console.log(res);
        this.stockDisabled = res.errno;
        if (res.errno == 401) {
          Toast.fail({
            message: "庫存不足",
            className: "myToast"
          });
        } else {
          const listArr = [];
          listArr.push({
            goodsId: this.$route.query.goodsId,
            nums: this.num,
            prices: this.calcPrice
          });
          this.$ls.set("prices", this.calcPrice);
          this.$ls.set("allGood", listArr);
          this.$router.push({
            name:
              "pay" /*, query: { price: this.calcPrice, id: this.id, allArry: listArr} */
          });
        }
      });
    }
  },
  filters: {
    fomatMoney(value) {
      return "$" + value.toFixed(2);
    }
  }
};
</script>
