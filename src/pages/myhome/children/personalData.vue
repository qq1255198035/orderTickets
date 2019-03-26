<template>
      <div class="container">
            <Header title="个人信息" class="header">
                  <router-link to="/myhome" slot="left">
                        <mt-button icon="back"></mt-button>
                  </router-link>
            </Header>
            <div class="cellBox">
                  <mt-cell title="头像" to="/userImg" is-link class="cell">
                        <img slot="icon" :src="userInfo.userImg" width="24" height="24" class="right">
                  </mt-cell>
                  <mt-cell title="电子邮箱" :value="userInfo.userEmail" class="cell">
                        
                  </mt-cell>
                  <mt-cell title="姓名" :value="userInfo.userLastName + userInfo.userFirstName" class="cell" to="/changeName" is-link>
                        
                  </mt-cell>
                  <mt-cell title="电话号码" :value="userInfo.userTel" class="cell" to="/changeNumber" is-link>
                        
                  </mt-cell>
                  <mt-cell title="性别" :value="userInfo.userSex" class="cell" to="/changeSex" is-link>
                        
                  </mt-cell>
            </div>
      </div>
</template>
<style scoped>
.cellBox{
      padding: 40px 10px;
}
.cell{
      border-bottom: 1px solid #ccc;
      
}
.mint-cell-title img.right{
      float: right;
}

</style>
<script>
import { Header, Cell } from 'mint-ui';
import userImg from './../../../assets/imgs/userImg.png'
export default {
      components: {
            Header,
            Cell
      },
      data(){
            return{
                  userInfo:{
                        userImg:userImg,
                        userEmail:"446996141@qq.com",
                        userLastName: "洋",
                        userFirstName: "11",
                        userTel:"15646456415",
                        userSex:"男"
                  }
            }
      }
}
</script>

