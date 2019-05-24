<template>
      <div class="container">
            <Header title="个人信息" class="header">
                  <router-link to="/myhome" slot="left">
                        <mt-button icon="back"></mt-button>
                  </router-link>
            </Header>
            <div class="cellBox pd-cellBox">
                  <mt-cell title="头像" to="/userImg" is-link class="cell">
                        <img slot="icon" :src="this.avatar ? this.avatar : userInfo.avatar" width="40" height="40" class="right">
                  </mt-cell>
                  <mt-cell title="电子邮箱" :value="this.email ? this.email : userInfo.email" class="cell">
                        
                  </mt-cell>
                  <mt-cell title="姓名" :value="this.firstName + this.lastName ? this.firstName + this.lastName : userInfo.firstName + userInfo.lastName" class="cell" to="/changeName" is-link>
                        
                  </mt-cell>
                  <mt-cell title="电话号码" :value="this.tel ? this.tel : userInfo.tel" class="cell" to="/changeNumber" is-link>
                        
                  </mt-cell>
                  <mt-cell title="性别" :value="this.sex ? this.sex : userInfo.sex" class="cell" to="/changeSex" is-link>
                        
                  </mt-cell>
            </div>
      </div>
</template>
<style>
.cellBox{
      padding: 40px 10px;
}
.cell{
      border-bottom: 1px solid #ccc
}
.mint-cell-title img.right{
      float: right;
}
.pd-cellBox .mint-cell-title img{
      border: 1px solid #ccc;
      padding: 1px;
      border-radius: 2px;
}
.mint-cell-title .mint-cell-text{
      line-height: 40px;
}
</style>
<script>
import { Header, Cell } from 'mint-ui';
import userImg from './../../../assets/imgs/userImg.png'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
      components: {
            Header,
            Cell
      },
      data(){
            return{
                 userInfo:{
                       firstName: '',
                       lastName: '',
                       tel: '',
                       sex: '',
                       eamil: '',
                       avatar: ''
                 }
            }
      },
      methods:{
            ...mapActions(['changefName','changelName','changeSex','changeEmail','changeTel','changeAvatar']),

      },
      watch:{
            
      },
      mounted(){
            this.userInfo.firstName = this.$ls.get('firstName')
            this.userInfo.lastName = this.$ls.get('lastName')
            this.userInfo.tel = this.$ls.get('tel')
            this.userInfo.sex = this.$ls.get('sex')
            this.userInfo.email = this.$ls.get('email')
            this.userInfo.avatar = this.$ls.get('avatar')
      },
      computed:{
       ...mapGetters(['avatar','firstName','lastName','tel','sex','email'])
      },
}
</script>

