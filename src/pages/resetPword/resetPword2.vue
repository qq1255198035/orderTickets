<template>
      <div class="container">
            <Header title="找回密码" class="header">
                  <router-link to="/resetPword1" slot="left">
                        <mt-button icon="back"></mt-button>
                  </router-link>
            </Header>
            <div class="resetPword-Box">
                  <div class="cell-box">
                        <Field v-model="newPassword"
                              type="password"
                              :left-icon="imgURL1"
                              placeholder="输入新密码"
                              class="resetPword-input cell"
                              :border="false"
                        />
                              
                        <Field v-model="checkNewPassword"
                                     clearable
                                     placeholder="再次输入密码"
                                     class="cell"
                                     type="password"
                                     :left-icon="imgURL"
                                     
                              >
                                    
                              </Field>
                        
                        
                  </div>
                  <div class="button-box">
                        <Button round size="large" class="my-button">提交</Button>
                  </div>
            </div>
      </div>
</template>
<style>
.resetPword-Box{
      width: 100%;
      height: 100%;
      padding-top: 40px;
}
.cell-box{
      padding: 30px;
}
.cell{
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      padding-left: 15px;
}
.button-box{
      width: 100%;
      padding: 0 30px;
      left: 0;
      right: 0;
      height: 80px;
      bottom: 0;
      display: flex;
      align-items: center;
}
.my-button{
      background-color: #008e98;
      color: #fff;
}
.cell .phone-icon{
      width: 22px;
      height: 22px;
      display: block;
      background: url("./../../assets/imgs/phone-icon.png") center no-repeat;
      background-size: 16px 22px;
}
.cell i{
      font-size: 18px !important;
}
.cell input{
      background-color: transparent !important;
}
.myselect{
      border:none;
      outline: none;
      appearance: none;  
      -moz-appearance: none;  
      -webkit-appearance: none; 
      margin-left: 5px;
      padding-right: 10px;
      background-color: transparent;
}
.myarrow{
      width: 10px;
      height: 5px;
}
.resetPword-input i{
      font-size: 18px !important;
}
</style>
<script>
import { Header } from 'mint-ui';
import { Button,Field } from 'vant';
import 'vant/lib/button/style';
import 'vant/lib/field/style';
import imgURL from './../../assets/imgs/code.png'
import imgURL1 from './../../assets/imgs/re-password.png'
export default {
      components: {
            Header,
            Button,
            Field
      },
      data(){
            return{
                  imgURL,
                  imgURL1,
                  newPassword:"",
                  checkNewPassword:""
            }
      },
      methods:{
            
      },
      mounted() {
            this.$nextTick(()=>{
                  
            })
      }
}
</script>
