<template>
      <div class="container">
            <Header title="我的" class="header">
                  
            </Header>
            <div class="main">
                  <div class="userCenter">
                        <span>
                              <img :src="userInfo.userImg" alt="">
                        </span>
                        <p>{{userInfo.nikeName}}</p>
                  </div>
                  <div class="cellBox">
                        <mt-cell title="全部订单" to="/order" is-link class="cell">
                              <img slot="icon" src="./../../../assets/imgs/orderIcon.png" width="24" height="24">
                        </mt-cell>
                        <mt-cell title="个人资料" to="/personalData" is-link class="cell">
                              <img slot="icon" src="./../../../assets/imgs/someOne-icon.png" width="24" height="24">
                        </mt-cell>
                  </div>
            </div>
            <tabbar></tabbar>
      </div>
</template>
<style>
.main{
      width: 100%;
      height: 100%;
      padding-top: 40px;
}
.userCenter{
      width: 100%;
      height: 30%;
      background: url('./../../../assets/imgs/myHome-bg.png') center no-repeat;
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
}
.userCenter p{
      color: #fff;
}
.userCenter span{
      width: 60px;
      height: 60px;
      display: block;
      border-radius: 100%;
      overflow: hidden;
}
.userCenter span img{
      display: block;
      width: 100%;
}
.cellBox{
      padding: 20px;
}
.cell{
      border-bottom: 1px solid #ccc;
}
.mint-cell-wrapper{
      background-image: none !important;
}
</style>
<script>
import { Header, Cell } from 'mint-ui';
import tabbar from './../../../components/tabBar';
import userImg from './../../../assets/imgs/userImg.png'
export default {
  components: {
      Header,
      tabbar,
      Cell
  },
  data(){
        return{
              userInfo:{
                    nikeName:"您好，遊客！",
                    userImg: userImg
              }
        }
  }
}
</script>
