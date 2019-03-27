<template>
      <div class="container">
            <theme :Htitle="Htitle" :title="gameDetails.title" :desc="gameDetails.desc" :place="gameDetails.place" :time="gameDetails.time" :person="gameDetails.person"></theme>
            <CellGroup>
                  <Cell class="my-cell activities">
                        <template slot="title">
                              <Tag color="#008e98">活动</Tag>
                              <span class="custom-text">{{buyMessage.activities}}</span>
                        </template>
                  </Cell>
                  <Cell class="my-cell preferential">
                        <template slot="title">
                              <Tag color="#f8955c">优惠</Tag>
                              <span class="custom-text">{{buyMessage.preferential}}</span>
                        </template>
                  </Cell>
            </CellGroup>
            <div class="goods-list wrapper">
                  <div class="goods-item content">
                        <Cell class="my-cell" v-for="(item,index) in buyMessage.goodsMessage" :key="index">
                              <template slot="title">
                                    <span class="cell-title">{{item.title}}</span>
                              </template>
                              <div class="buy-message">
                                    <p>$ {{item.price}}</p>
                                    <Tag color="#f8955c">{{item.content}}</Tag><Tag color="#f8955c" plain>${{item.discount}}</Tag>
                              </div>
                              <Button type="warning" plain size="small" @click="buyTickets">购票</Button>
                        </Cell>
                  </div>
            </div>
            
           
      </div>
</template>
<style>
.custom-text{
      margin-left: 20px;
      font-size: 14px;
      width: 50%;
}
.activities span.custom-text{
      color: #666;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -webkit-text-overflow: ellipsis;
}
.preferential .custom-text{
      color: #f8955c;
}
.my-cell{
      border-bottom: 1px solid #ccc;
}
.my-cell .van-cell__title{
      display: flex;
      align-items: center;
}
.my-cell .van-cell__value{
      display: flex;
      justify-content: space-around;
      align-items: center;
}
.my-cell .cell-title{
      font-size: 16px;
      color: #333;
}
.buy-message p{
      color: #ff0000;
      font-size: 16px;
}
.goods-list{
      height: 42%;
      overflow: hidden;
}
</style>
<script>
import BScroll from 'better-scroll'
import theme from "./../../components/theme";
import imgUrl from './../../assets/imgs/exmple.png'
import { Button,Cell, CellGroup,Tag } from "vant";
import 'vant/lib/cell/style';
import 'vant/lib/cell-group/style';
import 'vant/lib/button/style';
import 'vant/lib/tag/style';
export default {
      components:{
            theme,
            Button,
            Cell, 
            CellGroup,
            Tag
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
                  buyMessage:{
                        activities:"有3个彩蛋，分别在片尾字幕前、后、中场分别在片尾字幕前、后、中场有3个彩蛋，", 
                        preferential:"满400 减100",
                        goodsMessage:[
                        {
                              title:"前排贵宾席",
                              price:"385",
                              content:"团购下单",
                              discount:"100"
                        },
                        {
                              title:"前排贵宾席",
                              price:"385",
                              content:"团购下单",
                              discount:"100"
                        },
                        {
                              title:"前排贵宾席",
                              price:"385",
                              content:"团购下单",
                              discount:"100"
                        },
                        {
                              title:"前排贵宾席",
                              price:"385",
                              content:"团购下单",
                              discount:"100"
                        },
                        {
                              title:"前排贵宾席",
                              price:"385",
                              content:"团购下单",
                              discount:"100"
                        },
                  ]
                  }
                  
                        
                  
                 
            }
      },
      mounted(){
            this.$nextTick(()=>{
                  let wrapper = document.querySelector('.wrapper');
                  let scroll = new BScroll('.wrapper',{
                        scrollY: true,
                  })
            })
      },
      methods:{
           buyTickets(){
                 this.$router.push({ name: 'buy', query: { }})
           }
      }
}
</script>
