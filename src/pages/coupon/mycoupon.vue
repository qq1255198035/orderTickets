<template>
  <div class="container">
    <Header :title="$t('m.couponTitle')" class="header">
      <router-link to="/myhome" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </Header>
    <div id="mycoupon">
      <Tabs
        v-model="active"
        :line-width="80"
        title-active-color="#008e98"
        color="#008e98"
        title-inactive-color="#666"
      >
        <Tab :title="$t('m.allCoupons')">
          <div class="mycoupon-box">
            <!--<coupon1 :data="couponNum"></coupon1>-->
            <coupon2 :data="couponNumOne"></coupon2>
            <coupon3 :data="couponNumTwo"></coupon3>
          </div>
        </Tab>
        <Tab :title="$t('m.notUsed')">
          <div class="mycoupon-box">
            <!--<coupon1 :data="couponNum"></coupon1>-->
            <coupon2 :data="couponNumOne"></coupon2>
          </div>
        </Tab>
        <Tab :title="$t('m.expired')">
          <div class="mycoupon-box">
            <coupon3 :data="couponNumTwo"></coupon3>
          </div>
        </Tab>
      </Tabs>
    </div>
  </div>
</template>
<style>
#mycoupon {
  width: 100%;
  height: 100%;
  padding-top: 40px;
}
#mycoupon .van-tabs__wrap {
  position: fixed;
  top: 40px;
  max-width: 750px;
  min-width: 320px;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.mycoupon-box {
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
}
</style>
<script>
import coupon1 from "./../../components/coupon1";
import coupon2 from "./../../components/coupon2";
import coupon3 from "./../../components/coupon3";
import { Header } from "mint-ui";
import { Tab, Tabs } from "vant";
import "vant/lib/tab/style";
import "vant/lib/tabs/style";
export default {
  components: {
    coupon1,
    coupon2,
    coupon3,
    Tab,
    Tabs,
    Header
  },
  data() {
    return {
      active: "0",
      couponNum: []
    };
  },
  created() {
    this._counp();
  },
  methods: {
    _counp() {
      const params = {
        id: this.$ls.get("userid")
      };
      this.$post(this.$api.coupon + "/" + params.id).then(res => {
        console.log(res);
        this.couponNum = res.data;
      });
    }
  },
  computed: {
    couponNumOne() {
      return this.couponNum.filter(item => {
        return item.send_type == 0;
      });
    },
    couponNumTwo() {
      return this.couponNum.filter(item => {
        return item.send_type == 2;
      });
    }
  }
};
</script>
