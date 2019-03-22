<template>
  <div class="container">
      <Header :title="this.$t('message.sponsorCube')" class="header">
          
      </Header>
      <div class="img-box">
            <img src="./../../assets/imgs/index-bg.png" alt="" srcset="">
      </div>
      <tabbar class="tabbar"></tabbar>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
import tabbar from './../../components/tabBar'
export default {
  components: {
      Header,
      tabbar
  },
  mounted(){
        
  }
}
</script>

<style>
#app .mint-header {
      background-color: #008e98;
      font-size: 16px;
}
#app .mint-tabbar{
      border-top: 1px solid #ccc;
      box-sizing: border-box;
}
.img-box{
      width: 100%;
      height: 100%;
}
.img-box img{
      width: 100%;
      display: block;
      height: 100%;
}
.text-actived{
      color: #008e98;
}

</style>
