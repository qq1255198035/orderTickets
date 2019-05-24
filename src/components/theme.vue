<template>
      <div class="theme-box">
            <Header :title="Htitle" class="header" :fixed="true">
                  <mt-button icon="back" slot="left" @click.native="$router.back(-1)"></mt-button>
                  <mt-button slot="right" @click.native="$router.push('/category')">
                        <img src="./../assets/imgs/goBuy.png" height="20" width="20" slot="icon">
                  </mt-button>
            </Header>
            <div class="panel">
                  <div class="goods-img">
                        <img width="120" height="120" :src="imgTitle" alt="">
                  </div>
                  <div class="desc">
                        <h3>{{title}}</h3>
                        <h4>{{desc}}</h4>
                        <p>地点：{{place}}</p>
                        <p>时间：{{time}} {{startTime}}-{{overTime}}</p>
                        <p>人数：{{person}}</p>
                  </div>
            </div>
      </div>
</template>
<style scoped>

.theme-box{
      width: 100%;
      height: 40%;
}
.panel{
      background: url("./../assets/imgs/theme-bg.png") top left no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 100%;
      padding-top: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;

}
.goods-img{
      flex: 0 0 120px;
      width: 120px;
      height: 120px;
      margin: 20px;
}
.goods-img img{
      /**display: block;
      width: 85%;**/
}
.desc{
      flex: 1;
      color:#fff;
}
.desc h3{
      font-size: 18px;
      font-weight: normal;
}
.desc h4{
      font-size: 16px;
      font-weight: normal;
      margin-top: 10px;      
}
.desc p{
      font-size: 14px;
      color: #aaa;
      margin: 5px 0;
}
@media screen and (min-width: 700px) {
      .goods-img img{
            width: 100%;
            height: 100%;
      }
      .desc h3{
            font-size: 30px;
      
      }
      .desc h4{
            font-size: 28px;
    
      }
      .desc p{
      font-size: 20px;
      }
      .goods-img{
            flex: 0 0 220px;
            width: 220px;
            height: 220px;
      }

}
</style>
<script>

import { Header,Button } from 'mint-ui';

export default {
      components:{
            Header,
            Button
      },
      props:["title","desc","place","time","startTime","overTime","person","Htitle","imgTitle"]
}
</script>
