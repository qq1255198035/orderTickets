<template>
      <div class="container">
            <theme :Htitle="Htitle" :title="gameDetails.title" :desc="gameDetails.desc" :place="gameDetails.place" :time="gameDetails.time" :person="gameDetails.person"></theme>
            <div class="game-desc wrapper">
                  <p class="desc-text content">{{gameDetails.message}}</p>
            </div>
            <div class="stars-content">
                  <h3>参赛明星</h3>
                  <div class="wrapper1">
                        <ul class="content1 stars-box">
                              <li v-for="(item,index) in stars" :key="index">
                                    <img :src="item.imgUrl" alt="">
                                    <span>{{item.starsName}}</span>
                              </li>
                        </ul>
                  </div>
            </div>
            <div class="buy-btn">
                  <Button round size="large" class="buy-button" @click="goBuy">特惠购票</Button>
            </div>
      </div>
</template>
<style>
.game-desc{
      padding: 10px 25px;
      margin-top: 20px;
      height: 55px;
      overflow: hidden;
      position: relative;
}
.game-desc p{
      font-size: 14px;
      color: #333333;
}
.game-desc span{
      position: absolute;
}
.stars-content h3{
      color: #333;
      font-weight: normal;
      font-size: 16px;
      margin-bottom: 10px;
}
.stars-box{
      display: flex;
      text-align: center;
}
.stars-content{
      overflow: hidden;
      width: 100%;
      padding: 10px 20px;
      margin-top: 5px;
}
.stars-box img{
      width: 85px;
      height: 116px;
      display: block;
}
.stars-box li{
      margin: 0 2px;
}
.buy-btn{
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 10px 30px;
      right: 0;
      border-top: 1px solid #ccc;
      background-color: #fff;
      max-width: 750px;
      min-width: 320px;
      width: 100%;
      margin: 0 auto;
}
.buy-button{
      background-color: #008e98;
      color: #fff;
}
</style>
<script>
import theme from "./../../components/theme";
import BScroll from 'better-scroll'
import imgUrl from './../../assets/imgs/exmple.png'
import { Button } from "vant";
import 'vant/lib/button/style';
export default {
      components:{
            theme,
            Button
      },
      data(){
            return{
                  Htitle:"赛事详情",
                  gameDetails:{
                        title:"篮球比赛",
                        desc:"Basketball match",
                        place:"香港",
                        time:"2019-3-24 9:00-15:00",
                        person:"13000",
                        message:"有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场有3个彩蛋，分别在片尾字幕前、后、中场"
                  },
                  stars:[
                              {
                                    imgUrl,
                                    starsName:"23333"
                              },
                              {
                                    imgUrl,
                                    starsName:"23333"
                              },
                              {
                                    imgUrl,
                                    starsName:"23333"
                              },
                              {
                                    imgUrl,
                                    starsName:"23333"
                              },
                              {
                                    imgUrl,
                                    starsName:"23333"
                              },
                  ]
            }
      },
      mounted(){
            this.$nextTick(()=>{
                  let wrapper = document.querySelector('.wrapper');
                  let scroll = new BScroll('.wrapper',{
                        scrollY: true,
                        click:true
                  })
                  let wrapper1 = document.querySelector('.wrapper1');
                  let content1 = document.querySelector('.content1');
                  var children = content1.children;
                  var length = children.length;
                  content1.style.width = children[0].offsetWidth * length + 'px';
                  let scroll1 = new BScroll('.wrapper1',{
                        scrollX: true,
                        click:true
                  })
            })
      },
      methods:{
            goBuy(){
                  this.$router.push({ name: 'details2', query: { }})
            }
      }
}
</script>
