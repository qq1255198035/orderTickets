<template>
      <div class="container">
            <Header title="全部订单" class="header">
                  <router-link to="/myhome" slot="left">
                        <mt-button icon="back"></mt-button>
                  </router-link>
            </Header>
            <div class="main">
                  <div class="wrapper main-wrapper">
                        <div class="content">
                              <Tabs v-model="active" :line-width="80" title-active-color="#008e98" color="#008e98" title-inactive-color="#666" v-if="orderInfo.length > 0">
                                    <Tab title="全部订单" >
                                          <div class="orderItem" v-for="(item,index) in orderInfo" :key="index">
                                                <div class="tab-box">
                                                      <p>{{item.tradeName}}</p>
                                                      <Tag plain type="danger" round v-if="item.pay_status == 1">待使用</Tag>
                                                      <Tag plain type="danger" round v-if="item.pay_status == 0">待付款</Tag>
                                                </div>
                                                <div class="order-content">
                                                      <img :src="item.imageUrl" alt="">
                                                      <div class="card-text">
                                                            <p>{{item.couponNum}}张 | 总价 {{item.actual_price | fomatMoney}}</p>
                                                            <span>有效日期：{{item.competition_time}}</span>
                                                      </div>
                                                </div>
                                                <div class="card-footer">
                                                      <Button size="small" round plain v-if="item.pay_status == 1" @click="orderDetails(item)">查看劵码</Button>
                                                      <Button size="small" round plain v-if="item.pay_status == 0" @click="cancelOrder(item)">取消订单</Button>
                                                      <Button size="small" round plain v-if="item.pay_status == 0" @click="payTo(item)">去付款</Button>
                                                </div>
                                          </div>
                                   
                                    </Tab>
                                    <Tab title="待付款">
                                          <div class="orderItem" v-for="(item,index) in pay_statusFilter0" :key="index">
                                                <div class="tab-box">
                                                      <p>{{item.tradeName}}</p>
                                                      <Tag plain type="danger" round v-if="item.pay_status == 1">待使用</Tag>
                                                      <Tag plain type="danger" round v-if="item.pay_status == 0">待付款</Tag>
                                                </div>
                                                <div class="order-content">
                                                      <img :src="item.imageUrl" alt="">
                                                      <div class="card-text">
                                                            <p>{{item.couponNum}}张 | 总价 {{item.actual_price | fomatMoney}}</p>
                                                            <span>有效日期：{{item.competition_time}}</span>
                                                      </div>
                                                </div>
                                                <div class="card-footer">
                                                      <Button size="small" round plain v-if="item.pay_status == 1" @click="orderDetails(item)">查看劵码</Button>
                                                      <Button size="small" round plain v-if="item.pay_status == 0" @click="cancelOrder(item)">取消订单</Button>
                                                      <Button size="small" round plain v-if="item.pay_status == 0" @click="payTo(item)">去付款</Button>
                                                </div>
                                          </div>
                                    
                              
                              
                                    </Tab>
                                    <Tab title="可使用">
                                          <div class="orderItem" v-for="(item,index) in pay_statusFilter1" :key="index">
                                                <div class="tab-box">
                                                      <p>{{item.tradeName}}</p>
                                                      <Tag plain type="danger" round v-if="item.pay_status == 1">待使用</Tag>
                                                      <Tag plain type="danger" round v-if="item.pay_status == 0">待付款</Tag>
                                                </div>
                                                <div class="order-content">
                                                      <img :src="item.imageUrl" alt="">
                                                      <div class="card-text">
                                                            <p>{{item.couponNum}}张 | 总价 {{item.actual_price | fomatMoney}}</p>
                                                            <span>有效日期：{{item.competition_time}}</span>
                                                      </div>
                                                </div>
                                                <div class="card-footer">
                                                      <Button size="small" round plain v-if="item.pay_status == 1" @click="orderDetails(item)">查看劵码</Button>
                                                      <Button size="small" round plain v-if="item.pay_status == 0" @click="cancelOrder(item)">取消订单</Button>
                                                      <Button size="small" round plain v-if="item.pay_status == 0" @click="payTo(item)">去付款</Button>
                                                </div>
                                          </div>
                                    </Tab>
                              </Tabs>
                        </div>
                  </div>
                  <div class="orderEmpty" v-if="orderInfo.length == 0">
                        <img src="./../../../assets/imgs/orderEmpty.png" alt="">
                  </div>
            </div>
      </div>
</template>
<style>
      .main{
            width:100%;
            padding-top: 40px;
            height:100%;
      }
      .main .content{
            background-color: #eee;
      }
      .orderItem{
            position: relative;
            margin: 10px 0;
            background-color: #fff;
      }
      .orderItem .van-card{
            background-color: #fff;
            padding: 0
      }
      .orderItem .van-tag::after{
            border: none;
      }
      .orderItem .van-card__content{
            padding-top: 20px;
      }
      .orderItem .van-card .van-card__header{
            background-color: #eee;
            padding: 0 10px;
            align-items: center;
      }
      .orderItem .van-card .van-card__footer{
            margin-top: 10px;
            padding-right: 10px;
      }
      .orderItem button{
            border-color: #008e98;
            color: #008e98; 
      }
      .tab-box{
            
            z-index: 10;
            display: flex;
            justify-content: space-between;
            padding: 10px 0 10px 10px;
      }
      .tab-box p{
            color: #333;
      }
      .orderEmpty{
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: 100%;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
      }
      .orderEmpty img{
            width: 40%;
            display: block;
      }
      .content .van-tabs__wrap{
            position: fixed;
            top: 40px;
            max-width: 750px;
            min-width: 320px;
            width: 100%;
            left: 0;
            right: 0;
            margin: 0 auto;
      }
      .orderItem .van-card__thumb{
            width: 30%;
            height: 100%;
            padding: 5px;
      }
      .order-content{
            width: 100%;
            display: flex;
            align-items: center;
            
            background-color: #eee;
      }
      .order-content img{
            width: 140px;
            height: 140px;
            padding: 10px;
            
      }
      .card-footer{
            text-align: right;
            padding: 10px 0;
      }
      .card-footer button{
            margin-right: 10px;
      }
      .card-text{
            margin-left: 10%;
      }
      .card-text p{
                  font-size: 14px;
                  color: #333;
                  
            }
            .card-text span{
                  font-size: 12px;
                  
                  color: #333;
            }
      @media screen and (min-width: 700px){
            .order-content img{
                  width: 200px;
                  height: 200px;
                  padding: 30px;
            }
            .card-text p{
                  font-size: 24px;
                  margin-bottom: 10px;
            }
            .card-text span{
                  font-size: 20px;
                  margin-top: 10px;
            }
            .tab-box p{
                  font-size: 24px;
            }
            .tab-box span{
                  font-size: 20px;
            }
            
      }
</style>
<script>

import {Header, MessageBox} from 'mint-ui';
import { Tab, Tabs, Button, Card, Tag} from 'vant';
import 'vant/lib/tab/style'
import 'vant/lib/tabs/style'
import 'vant/lib/card/style'
import 'vant/lib/button/style'
import 'vant/lib/tag/style'
import imgUrl from './../../../assets/imgs/goodsImg.png' 
export default {
      components: {
            Header,
            Tab, 
            Tabs,
            Card,
            Button,
            Tag,
            MessageBox
      },
      data(){
            return{
                  active:"0",
                  orderInfo:[]
            }
      },
      filters:{
		fomatMoney(value){
			return parseInt(value).toFixed(2);
		}
	},
      computed:{
            pay_statusFilter1(){
                  return this.orderInfo.filter(ele =>{
                       return ele.pay_status == 1
                  })
            },
            pay_statusFilter0(){
                  return this.orderInfo.filter(ele =>{
                       return ele.pay_status == 0
                  })
            }
      },
      mounted(){
            this.$nextTick(()=>{
                 
            })
      },
      created() {
            this._allOrder()
      },
      methods:{
            _allOrder() {
                  const params = {
                        userid: this.$ls.get("userid")
                  }
                  this.$post(this.$api.allOrders, params).then(res => {
                        console.log(res)
                        this.orderInfo = res.data
                  })
            },
            cancelOrder(item){
                  const params = {
                        id: item.id
                  }
                   MessageBox({
                        title: '',
                        message: '亲，确定要取消订单吗？',
                        showCancelButton: true,
                        confirmButtonClass:"confirmButton"
                  }).then(res => {
                        if(res == "confirm") {
                              this.$post(this.$api.changeOrder, params).then(res => {
                                    console.log(res)
                              })
                        }
                  })
            },
            orderDetails(item) {
                  const params = {

                  }
                  this.$router.push({
                        path: '/orderDetails',
                        query: {

                        }
                  })
            },
            payTo(item) {
                  this.$router.push({
                        path: '/pay',
                        query: {
                              price: item.actual_price
                        }
                  })
            }
      }
}
</script>
