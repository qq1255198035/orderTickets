<template>
  <div class="container">
    <Header :title="title" class="header">
      <router-link to="/pay" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </Header>
    <div class="payresult-box">
      <div class="pay-success" v-if="code == 1">
        <div class="result-title">
          <p>
            <Badge size="large" type="success" class="badge">
              <Icon name="success" size="16px"/>
            </Badge>支付成功
          </p>
          <h3>￥{{price}}</h3>
        </div>
        <div class="success-content">
          <mt-cell title="订单编号：" :value="orderNum"></mt-cell>
          <mt-cell title="交易金额：" :value="price"></mt-cell>
          <mt-cell title="交易方式：" :value="payment"></mt-cell>
          <!--<mt-cell title="手机号码：" :value="payResult.tel | regNumber"></mt-cell>-->
          <mt-cell title="交易时间：" :value="payTime"></mt-cell>
        </div>
        <div class="result-menu">
          <Button plain round class="button-1" to="/order">查看订单</Button>
          <Button round class="button-2" to="/index">返回首页</Button>
        </div>
      </div>
      <div class="pay-fail" v-if="code == 0">
        <div class="result-title">
          <p>
            <Badge size="large" type="error" class="badge">
              <Icon name="cross" size="16px"/>
            </Badge>支付失败
          </p>
          <span>失败原因：支付超时或订单异常</span>
        </div>
        <div class="result-menu">
          <Button plain round class="button-1" to="/pay">重新支付</Button>
          <Button round class="button-2" to="/index">返回首页</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Header, Badge, Cell } from "mint-ui";
import { Icon, Button } from "vant";
import "vant/lib/icon/style";
import "vant/lib/button/style";
export default {
  props: {},
  components: {
    Header,
    Badge,
    Icon,
    Cell,
    Button
  },
  data() {
    return {
      code: "",
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
  mounted() {
    
  },
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
          if (res.code == 1) {
            this.title = "支付成功";
            this.code = res.code,
              this.orderNum = res.payPalId,
              this.price = res.price,
              this.payTime = res.pay_time;
          } else {
            this.title = "支付失败";
          }
        });
      }, 1000);
    }
  },
  /** filters:{
            //手机号隐藏中间四位
            regNumber(val){
                  return val.substr(0, 3) + ' **** ' + val.substr(7)
            }
      }**/
};
</script>

<style scoped lang="scss">
</style>
