<template>
  <div class="container">
    <Header :title="$t('m.paymentTitle')" class="header" :fixed="true">
      <mt-button icon="back" slot="left" @click.native="$router.back(-1)"></mt-button>
      <mt-button slot="right" @click.native="$router.push('/category')">
        <img src="./../../assets/imgs/goBuy.png" height="20" width="20" slot="icon">
      </mt-button>
    </Header>
    <div class="pay-details">
      <Cell
        :title="$t('m.subtotal')"
        :value="price | fomatMoney"
        value-class="pay-price"
        title-class="pay-title"
      />
      <Cell
        :title="$t('m.akyTitle')"
        is-link
        :value="couponName"
        value-class="go-coupon"
        title-class="pay-title"
        @click="couponDetail"
      />
      <Cell
        :title="$t('m.payCostTitle')"
        :value="`${resultPrice ? resultPrice  : price }`"
        value-class="pay-price"
        title-class="pay-title"
      />
    </div>
    <div class="payment-methods">
      <Cell :title="$t('m.payMethodTitle')" title-class="pay-title" class="pay-cell"/>
      <ul class="pay-box">
        <!--<li :class="{'active':actived == 1}" @click="actived = 1">
          <img src="./../../assets/imgs/wx-pay.png" alt>
        </li>
        <li :class="{'active':actived == 2}" @click="actived = 2">
          <img src="./../../assets/imgs/zfb-pay.png" alt>
        </li>-->
        <li :class="{'active':actived == 1}" @click="actived = 1">
          <img src="./../../assets/imgs/pp-pay.png" alt>
        </li>
      </ul>
      <div class="confirm-buy">
        <Button round size="large" v-show="!showChecked" @click="payPal" class="confirm-btn">{{$t('m.submit')}}</Button>
        <Button class="default_btn" loading type="danger" size="large" v-show="showChecked" loading-type="spinner" loading-text="加載中..."></Button>
      </div>
    </div>
  </div>
</template>
<style>
.pay-details {
  padding-top: 40px;
  width: 100%;
}
.pay-details .pay-title {
  font-size: 14px;
  color: #666;
}
.pay-details .pay-price {
  color: #ff0000;
}
.go-coupon {
  color: #f8955c;
}
.payment-methods .pay-cell {
  border-bottom: none;
}
.pay-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 40px;
}
.pay-box li {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
}
.pay-box li img {
  width: 106px;
  height: 37px;
}
.pay-box li.active {
  border-color: #f8955c;
}
.confirm-buy {
  width: 100%;
  padding: 20px;
  border-top: 2px solid #ccc;
  margin-top: 30px;
}
.confirm-btn {
  background-color: #008e98;
  color: #fff;
}
.default_btn{
  background: #808080;
  color: #fff;
  border: none;
  border-radius: 10em
}
</style>
<script>
import { Header } from "mint-ui";
import { Button, Cell } from "vant";
import "vant/lib/cell/style";
import "vant/lib/button/style";
export default {
  components: {
    Header,
    Button,
    Cell,
    price: ""
  },
  data() {
    return {
      actived: 1,
      coupon: [],
      price: "",
      couponName: "",
      _ids: "",
      useCoupon: "",
      showChecked: false
    };
  },
  created() {
    this._getCoupons();
    //this.price = this.$route.query.price;
    //this.$ls.set("prices", this.price);
    this.price = this.$ls.get("prices");
    this.resultPrice = this.$ls.get("prices") - this.$ls.get("resultPrice");
  },
  mounted() {},
  methods: {
    _getCoupons() {
      const params = {
        id: this.$ls.get("userid")
      };
      console.log(params.id);
      this.$post(this.$api.coupon + "/" + params.id).then(res => {
        console.log(res);
        this.coupon = res.data;
        console.log(this.coupon.length);
        for (let i = 0; i < this.coupon.length; i++) {
          if (this.price >= this.coupon[i].min_amount) {
            this.couponName = this.coupon[i].name;
            this._ids = i;
            this.useCoupon = this.coupon[i].id;
          }
        }
      });
    },
    couponDetail() {
      this.$router.push({
        name: "coupon",
        query: {
          id: this.$route.query.id,
          price: this.$route.query.price,
          _ids: this._ids
        }
      });
    },
    payPal() {
      const params = {
        strArr: JSON.stringify(this.$ls.get("allGood")),
        userId: this.$ls.get("userid"),
        allPrice: this.resultPrice ? this.resultPrice : this.price,
        useCoupon: this.$ls.get("couponId"),
        type_money: this.$ls.get("resultPrice")
      };
      console.log(params);
      if(!this.showChecked) {
        this.showChecked = !this.showChecked
      }
      //this.$router.addRoutes(this.$router.options.routes);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.$post(this.$api.payPal, {
            strArr: params.strArr,
            userid: params.userId,
            price: params.allPrice,
            coupon_id: params.useCoupon
          }).then(
            res => {
              console.log(res);
              let first = res.indexOf("href") + 6;
              let last = res.lastIndexOf('"');
              let url = res.slice(first, last);
              console.log(url);
              let routeData = this.$router.resolve({
                path: "paypals",
                query: { url: url }
              });
              window.location.replace(routeData.href, "_blank");
            },
            err => {
              console.log(err);
            }
          );
        }, 1000);
      });
    }
  },
  filters: {
    fomatMoney(value) {
      console.log(value);
      return "$" + parseInt(value).toFixed(2);
    }
  }
};
</script>
