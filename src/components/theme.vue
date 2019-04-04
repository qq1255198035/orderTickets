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
                        <img src="./../assets/imgs/goodsImg.png" alt="">
                  </div>
                  <div class="desc">
                        <h3>{{title}}</h3>
                        <h4>{{desc}}</h4>
                        <p>地点：{{place}}</p>
                        <p>时间：{{time}}</p>
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
      padding: 20px;
}
.goods-img img{
      display: block;
      width: 85%;
}
.desc{
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
            width: 220px;
            height: 272px;
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
      props:["title","desc","place","time","person","Htitle"]
}
</script>
