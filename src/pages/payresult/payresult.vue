<template>
      <div class="container">
            <Header :title="payResult.title" class="header">
                  <router-link to="/pay" slot="left">
                        <mt-button icon="back"></mt-button>
                  </router-link>
            </Header>
            <div class="payresult-box">
                  <div class="pay-success" v-if="payResult.code == 1">
                        <div class="result-title">
                              <p><Badge size="large" type="success" class="badge"><Icon name="success" size="16px"/></Badge>支付成功</p>
                              <h3>￥{{payResult.price}}</h3>
                        </div>
                        <div class="success-content">
                              <mt-cell title="订单编号：" :value="payResult.orderNum"></mt-cell>
                              <mt-cell title="交易金额：" :value="payResult.price"></mt-cell>
                              <mt-cell title="交易方式：" :value="payResult.payment"></mt-cell>
                              <!--<mt-cell title="手机号码：" :value="payResult.tel | regNumber"></mt-cell>-->
                              <mt-cell title="交易时间：" :value="payResult.payTime"></mt-cell>
                        </div>
                        <div class="result-menu">
                              <Button plain round class="button-1" to="/order">查看订单</Button>
                              <Button round class="button-2" to="/index">返回首页</Button>
                        </div>
                  </div>
                  <div class="pay-fail" v-if="payResult.code == 0">
                        <div class="result-title">
                              <p><Badge size="large" type="error" class="badge"><Icon name="cross" size="16px"/></Badge>支付失败</p>
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
<style>
.payresult-box{
      width: 100%;
      height: 100%;
      padding-top: 40px;
}
.pay-success,.pay-fail{
      width: 100%;
      height: 100%;
}
.result-title{
      width: 100%;
      height: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
}
.result-title .mint-badge{
      border-radius: 100% !important;
      padding: 4px 5px 1px !important;
      margin-right: 10px;
}
.result-title .van-icon{
      font-size: 24px !important;
}
.result-title h3{
      font-size: 33px;
      color: #1d1d1d;
      margin-top: 10px;
}
.success-content{
      padding: 10px;
      border-bottom: 1px solid #ccc;
}
.success-content .mint-cell{
      min-height: 30px !important;
}
.result-menu{
      margin-top: 30px;
      text-align: center;
}
.result-menu .button-1{
      border-color: #008e98;
      color: #008e98;
      margin-right: 10px;
}
.result-menu .button-2{
      background-color: #ccc;
      border-color: #ccc;
      color: #666;
}
.pay-fail .result-title > span{
      margin-top: 10px;
}
.mint-cell:last-child{
      background-image: none !important; 
}
</style>
<script>
import { Header,Badge, Cell} from 'mint-ui';
import { Icon, Button } from 'vant';
import 'vant/lib/icon/style';
import 'vant/lib/button/style';
export default {
      components: {
            Header,
            Badge,
            Icon,
            Cell,
            Button
      },
      data(){
            return{
                  payResult:{
                        code:0,
                        title:"",
                        orderNum:"201604231631311",
                        price:"1.06",
                        payment:"PAYPAL",
                        tel:"15911118693",
                        payTime:"2016-10-21"
                  }
            }
      },
      filters:{
            //手机号隐藏中间四位
            regNumber(val){
                  return val.substr(0, 3) + ' **** ' + val.substr(7)
            }
      }
}
</script>
