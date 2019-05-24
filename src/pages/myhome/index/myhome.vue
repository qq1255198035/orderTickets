<template>
      <div class="container">
            <Header title="我的" class="header"></Header>
            <div class="main">
                  <div class="userCenter">
                        <span>
                              <img :src="this.avatar" alt="">
                        </span>
                        <p>{{this.firstName}}{{this.lastName}}</p>
                  </div>
                  <div class="cellBox myHome-box">
                        <mt-cell title="全部订单" to="/order" is-link class="cell">
                              <img slot="icon" src="./../../../assets/imgs/orderIcon.png" width="20" height="24">
                        </mt-cell>
                        <mt-cell title="优惠券" to="/mycoupon" is-link class="cell">
                              <img slot="icon" src="./../../../assets/imgs/couponIcon.png" width="24" height="20">
                        </mt-cell>
                        <mt-cell title="个人资料" to="/personalData" is-link class="cell">
                              <img slot="icon" src="./../../../assets/imgs/someOne-icon.png" width="20" height="24">
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
.myHome-box .mint-cell-text{
      margin-left: 10px;
}
</style>
<script>
import { Header, Cell } from 'mint-ui';
import tabbar from './../../../components/tabBar';
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
export default {
  components: {
      Header,
      tabbar,
      Cell
  },
  data(){
        return{
                  
        }
  },
  computed:{
       ...mapGetters(['avatar','firstName','lastName','tel','sex','email'])
  },
  mounted(){
        this.getInfo();
        
  },
  methods:{
        ...mapActions(['changefName','changelName','changeSex','changeEmail','changeTel','changeAvatar']),
        getInfo(){
              const userId = this.$ls.get("userid")
              this.$get(this.$api.persona, {
                    userid: userId
              }).then(res =>{
                    console.log(res)
                  if(res.status == 0){
                        //console.log(res)
                        this.changefName(res.data.firstName)
                        this.changelName(res.data.lastName)
                        this.changeSex(res.data.sex)
                        this.changeEmail(res.data.email)
                        this.changeTel(res.data.tel)
                        this.changeAvatar(res.data.avatar)
                        //存入session
                        this.$ls.set("firstName",res.data.firstName)
                        this.$ls.set("lastName",res.data.lastName)
                        this.$ls.set("sex",res.data.sex)
                        this.$ls.set("email",res.data.email)
                        this.$ls.set("tel",res.data.tel)
                        this.$ls.set("avatar",res.data.avatar)
                        
                  }
      })
}
  }
}
</script>
