<template>
      <div class="container">
            <theme :Htitle="Htitle" :title="gameDetails.title" :desc="gameDetails.desc" :place="gameDetails.place" :time="gameDetails.time" :person="gameDetails.person"></theme>
            <div class="buy-details">
                  <Cell class="van-cell">
                              <template slot="title">
                                    <span class="cell-title">前排 贵宾席</span>
                              </template>
                              <div class="buy-message">
                                    <p>235</p>
                                    <Stepper v-model="num" integer :min="1" :max="40" :step="1" disable-input></Stepper>
                              </div>  
                  </Cell>
                  <Cell class="van-cell">
                              <template slot="title">
                                    <span class="cell-title">小计</span>
                              </template>
                              <div class="buy-message">
                                    <p>235</p>
                              </div>  
                  </Cell>
                  <Cell class="van-cell">
                              <template slot="title">
                                    <span class="cell-title"></span>
                              </template>
                              <div class="total-price">
                                    共<span>{{num}}</span>张票小计：<p>235</p>
                              </div>  
                  </Cell>
            </div>
            <div class="buy-bottom">
                  <Cell class="van-cell">
                              <template slot="title">
                                    <span class="cell-title-bottom">不支持退票</span>
                              </template>
                              <div class="total-price">
                                    还需支付
                                    <p>$235</p>
                              </div>  
                  </Cell>
                  <div class="buyBtn-box">
                        <Button round size="large" plain class="get-catecory" @click="addCategory">加入购物车</Button>
                        <Button round size="large" class="go-buy" @click="goTobuy">立即购买</Button>
                  </div>
            </div>
      </div>
</template>
<style>
.cell-title{
      font-size: 16px;
}
.buy-message button,input{
      color: #000 !important;
      border: 1px solid #ccc;
      background-color: #eee !important;
      margin: 2px 0 !important;
}
.buy-message input{
      background-color: #e5e5e5 !important;
}
.van-cell{
      border-bottom: 1px solid #ccc;
}
.van-cell .cell-title-bottom{
      color: #aaa;
}
.buy-bottom .van-cell{
      border-bottom: none;
}
.total-price{
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      color: #333;
}
.total-price p{
      color: #ff0000;
}
.buy-message p{
      color: #ff0000;
      font-size: 16px;
}
.buy-bottom .total-price{
      justify-content: flex-end;
}
.van-cell .total-price p{
      margin-left: 10px;
}
.buy-bottom{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      max-width: 750px;
      min-width: 320px;
      width: 100%;
      margin: 0 auto;
}
.buyBtn-box{
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 20px 30px;
}
.buyBtn-box  .get-catecory{
      border-color:#008e98; 
      border-top-right-radius:0;
      border-bottom-right-radius:0;
      color: #333;
     
}
.buyBtn-box  .go-buy{
      background-color:#008e98; 
      color: #fff;
      border-top-left-radius:0;
      border-bottom-left-radius:0;
      border: 1px solid #008e98;
}
</style>
<script>

import theme from "./../../components/theme";
import imgUrl from './../../assets/imgs/exmple.png'
import { Button,Cell, Stepper, Toast} from "vant";
import 'vant/lib/cell/style';
import 'vant/lib/cell-group/style';
import 'vant/lib/button/style';
import 'vant/lib/stepper/style';
import 'vant/lib/toast/style';
export default {
      components:{
            theme,
            Button,
            Cell, 
            Stepper
      },
      data(){
            return{
                  num:1,
                  Htitle:"赛事详情",
                  gameDetails:{
                        title:"篮球比赛",
                        desc:"Basketball match",
                        place:"香港",
                        time:"2019-3-24 9:00-15:00",
                        person:"13000",
                        message:"有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场"
                  },
                   
            }
      },
      mounted(){
            this.$nextTick(()=>{
                  
            })
      },
      methods:{
           addCategory(){
                 Toast.success('添加成功 ，在购物车等亲~');
           },
           goTobuy(){
                 this.$router.push({ name: 'buy', query: { }})
           }
      }
}
</script>
