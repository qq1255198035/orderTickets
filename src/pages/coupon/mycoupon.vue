<template>
  <div class="container">
    <Header title="优惠券" class="header">
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
        <Tab title="全部优惠券">
          <div class="mycoupon-box">
            <coupon1 :data="couponNum"></coupon1>
            <coupon2></coupon2>
            <coupon3></coupon3>
          </div>
        </Tab>
        <Tab title="未使用">
          <div class="mycoupon-box">
            <coupon1></coupon1>
            <coupon2></coupon2>
          </div>
        </Tab>
        <Tab title="已过期">
          <div class="mycoupon-box">
            <coupon3></coupon3>
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
import {Header} from 'mint-ui';
import { Tab, Tabs } from 'vant';
import 'vant/lib/tab/style'
import 'vant/lib/tabs/style'
export default {
    components:{
        coupon1,
        coupon2,
        coupon3,
        Tab, 
        Tabs,
        Header
    },
    data(){
        return{
            active:"0",
            couponNum: []
        }
    },
    created() {
        this._counp()
    },
    methods: {
        _counp() {
        const params = {
            id: this.$ls.get("userid")
        };
        this.$post(this.$api.coupon + "/" + params.id).then(res => {
            console.log(res);
            this.couponNum = res.data;
            console.log(this.index)
            
        });
        },
    }
}
</script>
