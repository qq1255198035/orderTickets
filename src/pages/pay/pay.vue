<template>
      <div class="container">
            <Header title="订单支付" class="header" :fixed="true">
                  <mt-button icon="back" slot="left" @click.native="$router.back(-1)"></mt-button>
                  <mt-button slot="right" @click.native="$router.push('/category')">
                        <img src="./../../assets/imgs/goBuy.png" height="20" width="20" slot="icon">
                  </mt-button>
            </Header>
            <div class="pay-details">
                  <Cell title="小计" value="$ 1230" value-class="pay-price" title-class="pay-title"/>
                  <Cell title="活动与抵用卷" is-link value="满400 减100" value-class="go-coupon" title-class="pay-title" to="/coupon"/>
                  <Cell title="支付费用" value="$ 1230" value-class="pay-price" title-class="pay-title"/>
            </div>
            <div class="payment-methods">
                  <Cell title="支付方式" title-class="pay-title" class="pay-cell"/>
                  <ul class="pay-box">
                        <li :class="{'active':actived == 1}" @click="actived = 1"><img src="./../../assets/imgs/wx-pay.png" alt=""></li>
                        <li :class="{'active':actived == 2}" @click="actived = 2"><img src="./../../assets/imgs/zfb-pay.png" alt=""></li>
                        <li :class="{'active':actived == 3}" @click="actived = 3"><img src="./../../assets/imgs/pp-pay.png" alt=""></li>
                  </ul>
                  <div class="confirm-buy">
                        <Button round size="large" class="confirm-btn" to="/payresult">确定</Button>
                  </div>
                  
            </div>
      </div>
</template>
<style>
.pay-details{
      padding-top: 40px;
      width: 100%;
}
.pay-details .pay-title{
      font-size: 14px;
      color: #666;
}
.pay-details .pay-price{
      color: #ff0000;
}
.go-coupon{
      color: #f8955c;
}
.payment-methods .pay-cell{
      border-bottom: none;
}
.pay-box{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 40px;
}
.pay-box li{
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-top: 10px;
}
.pay-box li img{
      width: 106px;
      height: 37px;
}
.pay-box li.active{
      border-color: #f8955c;
}
.confirm-buy{
      width: 100%;
      padding: 20px;
      border-top: 2px solid #ccc;
      margin-top: 30px;
}
.confirm-btn{
      background-color: #008e98;
      color: #fff;
}
</style>
<script>
import { Header } from 'mint-ui';
import { Button,Cell} from "vant";
import 'vant/lib/cell/style';
import 'vant/lib/button/style';
export default {
      components:{
            Header,
            Button,
            Cell
      },
      data(){
            return{
                  actived:1,
            }
      },
      filters:{
	      fomatMoney(value){
		      return value.toFixed(2);
	      }
      },
}
</script>
