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
                                                      <Tag plain type="danger" round v-if="item.orderStatus == 1">待使用</Tag>
                                                      <Tag plain type="danger" round v-if="item.orderStatus == 0">待付款</Tag>
                                                </div>
                                                <Card
                                                      :num="item.num"
                                                      :price="item.price | fomatMoney"
                                                      :desc="item.desc"  
                                                      :title="item.orderTitle"
                                                      :thumb="item.imgUrl"
                                                >
                                                      <div slot="footer">
                                                            <Button size="small" round plain v-if="item.orderStatus == 1">查看劵码</Button>
                                                            <Button size="small" round plain v-if="item.orderStatus == 0">查看详情</Button>
                                                            <Button size="small" round plain v-if="item.orderStatus == 0">去付款</Button>
                                                      </div>
                                                </Card>
                                          </div>
                                   
                                    </Tab>
                                    <Tab title="待付款">
                                          <div class="orderItem" v-for="(item,index) in orderStatusFilter0" :key="index">
                                                <div class="tab-box">
                                                      <Tag plain type="danger" round v-if="item.orderStatus == 1">待使用</Tag>
                                                      <Tag plain type="danger" round v-if="item.orderStatus == 0">待付款</Tag>
                                                </div>
                                                <Card
                                                      :num="item.num"
                                                      :price="item.price | fomatMoney"
                                                      :desc="item.desc"  
                                                      :title="item.orderTitle"
                                                      :thumb="item.imgUrl"
                                                >
                                                      <div slot="footer">
                                                            <Button size="small" round plain v-if="item.orderStatus == 1">查看劵码</Button>
                                                            <Button size="small" round plain v-if="item.orderStatus == 0">查看详情</Button>
                                                            <Button size="small" round plain v-if="item.orderStatus == 0">去付款</Button>
                                    
                                                      </div>
                                                </Card>
                                          </div>
                                    
                              
                              
                                    </Tab>
                                    <Tab title="可使用">
                                          <div class="orderItem" v-for="(item,index) in orderStatusFilter1" :key="index">
                                                <div class="tab-box">
                                                      <Tag plain type="danger" round v-if="item.orderStatus == 1">待使用</Tag>
                                                      <Tag plain type="danger" round v-if="item.orderStatus == 0">待付款</Tag>
                                                </div>
                                                <Card
                                                      :num="item.num"
                                                      :price="item.price | fomatMoney"
                                                      :desc="item.desc"  
                                                      :title="item.orderTitle"
                                                      :thumb="item.imgUrl"
                                                >
                                                      <div slot="footer">
                                                            <Button size="small" round plain v-if="item.orderStatus == 1">查看劵码</Button>
                                                            <Button size="small" round plain v-if="item.orderStatus == 0">查看详情</Button>
                                                            <Button size="small" round plain v-if="item.orderStatus == 0">去付款</Button>
                                                      </div>
                                                </Card>
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
      .main-wrapper{
            padding: 0 10px;
      }
      .orderItem{
            position: relative;
            margin: 10px 0;
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
            position: absolute;
            right: 10px;
            top:0;
            z-index: 10;
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
</style>
<script>
import BScroll from 'better-scroll'
import {Header} from 'mint-ui';
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
            Tag
      },
      data(){
            return{
                  active:"0",
                  orderInfo:[
                        {     
                              orderStatus:0,
                              orderTitle:"篮球比赛",
                              desc:"有效日期：2019.3.30",
                              num:1,
                              price:200,
                              imgUrl:imgUrl
                        },
                        {     
                              orderStatus:1,
                              orderTitle:"篮球比赛",
                              desc:"有效日期：2019.3.30",
                              num:2,
                              price:200,
                              imgUrl:imgUrl
                        },
                        {     
                              orderStatus:0,
                              orderTitle:"篮球比赛",
                              desc:"有效日期：2019.3.30",
                              num:3,
                              price:200,
                              imgUrl:imgUrl
                        },
                        {     
                              orderStatus:1,
                              orderTitle:"篮球比赛",
                              desc:"有效日期：2019.3.30",
                              num:4,
                              price:200,
                              imgUrl:imgUrl
                        },
                        {     
                              orderStatus:0,
                              orderTitle:"篮球比赛",
                              desc:"有效日期：2019.3.30",
                              num:5,
                              price:200,
                              imgUrl:imgUrl
                        },
                         {     
                              orderStatus:1,
                              orderTitle:"篮球比赛",
                              desc:"有效日期：2019.3.30",
                              num:4,
                              price:200,
                              imgUrl:imgUrl
                        },
                        {     
                              orderStatus:0,
                              orderTitle:"篮球比赛",
                              desc:"有效日期：2019.3.30",
                              num:5,
                              price:200,
                              imgUrl:imgUrl
                        },
                         {     
                              orderStatus:1,
                              orderTitle:"篮球比赛",
                              desc:"有效日期：2019.3.30",
                              num:4,
                              price:200,
                              imgUrl:imgUrl
                        },
                        {     
                              orderStatus:0,
                              orderTitle:"篮球比赛",
                              desc:"有效日期：2019.3.30",
                              num:5,
                              price:200,
                              imgUrl:imgUrl
                        },
                         {     
                              orderStatus:1,
                              orderTitle:"篮球比赛",
                              desc:"有效日期：2019.3.30",
                              num:4,
                              price:200,
                              imgUrl:imgUrl
                        },
                        {     
                              orderStatus:0,
                              orderTitle:"篮球比赛",
                              desc:"有效日期：2019.3.30",
                              num:5,
                              price:200,
                              imgUrl:imgUrl
                        }
                  ]
            }
      },
      filters:{
		fomatMoney(value){
			return value.toFixed(2);
		}
	},
      computed:{
            orderStatusFilter1(){
                  return this.orderInfo.filter(ele =>{
                       return ele.orderStatus == 1
                  })
            },
            orderStatusFilter0(){
                  return this.orderInfo.filter(ele =>{
                       return ele.orderStatus == 0
                  })
            }
      },
      mounted(){
            this.$nextTick(()=>{
                 
            })
      },
}
</script>
