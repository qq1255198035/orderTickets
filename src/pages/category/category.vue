<template>
      <div class="container">
            <Header title="购物车" class="header">
                  <div slot="right" @click="EditIsShow = !EditIsShow">
                        <span v-show="EditIsShow && goods.length > 0">
                              编辑
                        </span>
                        <span  v-show="!EditIsShow">
                              完成
                        </span>
                  </div>
                  
            </Header>
            <div class="goodsList" v-if="goods.length > 0">
                  <div class="wrapper wrapper-box">
                        <div class="content">
                               <Checkbox-group v-model="checkedGoods">
                        <Checkbox v-for="(item, index) in goods" :key="index" :name="item.id" checked-color="#008e98" class="checkbox">
                              <Card :num="item.num" :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.thumb" class="cardItem" :tag="item.tag"> 
                                    
                              </Card>
                              <transition name="fade" mode="out-in">
                                    <div class="stepper" @click.stop v-show="!EditIsShow">
                                          <Stepper v-model="item.num" integer :min="1" :max="40" :step="1" disable-input></Stepper>
                                    </div> 
                              </transition>
                        </Checkbox>
                  </Checkbox-group>
                        </div>
                  </div>
                 
                  <div class="submit-box">
                        <div class="submit">
                              <Checkbox v-model="allChecked" checked-color="#008e98" class="submit-left">
                                    全选
                              </Checkbox>
                              <div class="submit-right">
                                    <span>合计<i>￥3333</i></span>
                                    <Button round size="small" class="submitButton" v-show="EditIsShow">结算(<span>{{checkedGoods.length}}</span>)</Button>
                                    <Button round size="small" class="submitButton" v-show="!EditIsShow" @click="showMessageBox">删除(<span>{{checkedGoods.length}}</span>)</Button>       
                              </div>
                        </div>
                  </div>
            </div>
            <div class="goodsEmpty" v-if="goods.length == 0">
                  <img src="./../../assets/imgs/catagory.png" alt=""> 
            </div>
            <tabbar></tabbar>
            
      </div>
</template>
<style>
.goodsList{
      padding: 40px 0 140px;
      background-color: #fff
}

.cardItem{
      width: 100%;
}
.checkbox{
      border-bottom: 1px solid #ccc;
      padding: 10px 20px;
      position: relative;
}
.checkbox > span{
      width: 90%;
}
.submit-box{
      width: 100%;
      position: fixed;
      bottom: 56px;
      left: 0;
}
.submit{
      max-width: 750px;
      min-width: 320px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      background-color: #fff;
      padding: 10px 20px;
      border-top:1px solid #ccc;
}
.submit-left{
      width: 50%;
}
.submit-right{
      width: 50%;
      display: flex;
      justify-content:space-around;
}
.submit-right span{
      line-height: 30px;
}
.submit-right span i{
      font-style: normal;
      color:#ed5b5b;
}
.submitButton{
      background-color: #008e98;
      color: #fff;
}
.stepper{
      position: absolute;
      bottom: 10px;
      right: 24px;
}
.stepper button,input{
      color: #000 !important;
      border: 1px solid #ccc;
      background-color: #fff !important;
      margin: 2px 0 !important;
}
.stepper input{
      border-top:  1px solid #ccc;
      border-bottom: 1px solid #ccc;
      height: 24px;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
	opacity: 0;
}
.mint-msgbox .confirmButton{
      background-color: #008e98;
      color: #fff;
}
.goodsEmpty{
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
.goodsEmpty img{
      width: 40%;
      display: block;
}
</style>
<script>

import { Header, MessageBox} from 'mint-ui';
import tabbar from './../../components/tabBar'
import { Card, Checkbox, CheckboxGroup, Button, Stepper} from 'vant';
import 'vant/lib/card/style'
import 'vant/lib/checkbox/style';
import 'vant/lib/checkbox-group/style';
import 'vant/lib/button/style';
import 'vant/lib/stepper/style'
export default {
  components: {
      Header,
      MessageBox,
      tabbar,
      Card,
      Checkbox, 
      Button,
      CheckboxGroup,
      Stepper
  },
  data(){
        return{
              checkedGoods: [],
              allChecked:false,
              EditIsShow:true,
              showCance:false,
              goods: [{
                        id: '1',
                        title: '篮球比赛',
                        desc: 'Basketball match',
                        price: 200,
                        num: 1,
                        tag:"贵宾",
                        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
                  },{
                        id: '2',
                        title: '篮球比赛',
                        desc: 'Basketball match',
                        price: 690,
                        num: 1,
                        tag:"贵宾",
                        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
                  },{
                        id: '3',
                        title: '篮球比赛',
                        desc: 'Basketball match',
                        price: 2680,
                        num: 1,
                        tag:"贵宾",
                        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
                  },
                  {
                        id: '4',
                        title: '篮球比赛',
                        desc: 'Basketball match',
                        price: 2680,
                        num: 1,
                        tag:"贵宾",
                        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
                  },
                  {
                        id: '5',
                        title: '篮球比赛',
                        desc: 'Basketball match',
                        price: 2680,
                        num: 1,
                        tag:"贵宾",
                        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
                  }
                  
            ]
        }
  },
  methods:{
        showMessageBox(){
            MessageBox({
                  title: '提示',
                  message: '确定执行此操作?',
                  showCancelButton: true,
                  confirmButtonClass:"confirmButton"
            });
        }
  },
  mounted(){
       
  }
}
</script>
