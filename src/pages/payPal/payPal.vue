<template>
  <div class="container">
    <div class="loading" v-show="!title">
      <div class="box">
        <Loading size="60px"></Loading>
        <p>加載中...</p>
      </div>
    </div>
    <Header :title="title" class="header">
      <!--<router-link to="/pay" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>-->
    </Header>
    <div class="payresult-box">
      <div class="pay-success" v-if="codes === '1'">
        <div class="result-title">
          <p>
            <Badge size="large" type="success" class="badge">
              <Icon name="success" size="16px"/>
            </Badge>
            {{$t('m.paySuccess')}}
          </p>
          <h3>￥{{price}}</h3>
        </div>
        <div class="success-content">
          <mt-cell :title="$t('m.oederId')" :value="orderNum"></mt-cell>
          <mt-cell :title="$t('m.amountTitle')" :value="price"></mt-cell>
          <mt-cell :title="$t('m.trading')" :value="payment"></mt-cell>
          <!--<mt-cell title="手机号码：" :value="payResult.tel | regNumber"></mt-cell>-->
          <mt-cell :title="$t('m.tradingTime')" :value="payTime"></mt-cell>
        </div>
        <div class="result-menu">
          <Button plain round class="button-1" to="/order">{{$t('m.viewOrder')}}</Button>
          <Button round class="button-2" to="/index">{{$t('m.backHome')}}</Button>
        </div>
      </div>
      <div class="pay-fail" v-if="codes === '0'">
        <div class="result-title">
          <p>
            <Badge size="large" type="error" class="badge">
              <Icon name="cross" size="16px"/>
            </Badge>
            {{$t('m.payFail')}}
          </p>
          <span>{{$t('m.payCause')}}：支付超时或订单异常</span>
        </div>
        <div class="result-menu">
          <Button plain round class="button-1" to="/pay">{{$t('m.rePayment')}}</Button>
          <Button round class="button-2" to="/index">{{$t('m.backHome')}}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Header, Badge, Cell } from "mint-ui";
import { Icon, Button, Loading } from "vant";
import "vant/lib/icon/style";
import "vant/lib/button/style";
export default {
  props: {},
  components: {
    Header,
    Badge,
    Icon,
    Cell,
    Button,
    Loading
  },
  data() {
    return {
      codes: "",
      title: "",
      orderNum: "",
      price: "",
      payment: "PAYPAL",
      payTime: ""
    };
  },
  computed: {},
  created() {
    this._hrefJson();
    this._hrefGet();
  },
  mounted() {},
  watch: {},
  methods: {
    _hrefJson() {
      const url = window.location.href;

      console.log(this.$route.query.paymentId);
      console.log(this.$route.query.token);
    },
    _hrefGet() {
      const params = {
        paymentId: this.$route.query.paymentId,
        token: this.$route.query.token,
        PayerID: this.$route.query.PayerID
      };
      setTimeout(() => {
        this.$post(this.$api.hrefGet, {
          paymentId: params.paymentId,
          token: params.token,
          PayerID: params.PayerID
        }).then(res => {
          console.log(res);
          console.log(res.code);
          if (res.code == 1) {
            this.title = "支付成功";
            (this.codes = res.code),
              (this.orderNum = res.payPalId),
              (this.price = res.price),
              (this.payTime = res.pay_time);
          } else if (res.code == 0) {
            this.title = "支付失敗";
            this.codes = res.code;
          }
        });
      }, 1000);
    }
  }
  /** filters:{
            //手机号隐藏中间四位
            regNumber(val){
                  return val.substr(0, 3) + ' **** ' + val.substr(7)
            }
      }**/
};
</script>

<style>
.loading{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(7,17,27,0.1)
}
.box {
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: -30px;
  margin-left: -30px;
}
</style>
