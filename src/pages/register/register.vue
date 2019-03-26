<template>
      <div class="container">
            <Header title="注册" class="header">
                  <router-link to="/login" slot="left">
                        <mt-button icon="back"></mt-button>
                  </router-link>
            </Header>
            <div class="register-box">
                  <Field v-model="userInfo.email"
                         clearable
                         placeholder="输入电子邮箱"
                         class="cell"
                         type="number"
                         :left-icon="imgURL"
                  />
                  <Field v-model="userInfo.code"
                         clearable
                         placeholder="输入验证码"
                         class="cell margin10"
                         type="number"
                         :left-icon="imgURL2"             
                  >
                        <Button slot="button" size="small" type="primary" class="mybutton">获取验证码</Button>
                  </Field>
                  <Field v-model="userInfo.code"
                         clearable
                         placeholder="输入登录密码"
                         class="cell margin10"
                         type="password"
                         :left-icon="imgURL4" 
                         :right-icon="imgURL3"            
                  >
                  </Field>
                  <div class="fullName margin10">
                        <Field v-model="userInfo.code"
                         clearable
                         placeholder="姓"
                         
                         type="password"
                         :left-icon="imgURL5" 
                                 
                        >
                        </Field>
                        <Field v-model="userInfo.code"
                         clearable
                         placeholder="名"
                         
                         type="password"
                                    
                        >
                        </Field>
                  </div>
                  <div class="cell margin10">
                              <span class="phone-icon"></span>
                              <select name="" id="" class="myselect">
                                    <option value ="volvo">+86</option>
                                    <option value ="saab"></option>
                                    <option value="opel"></option>
                                    <option value="audi"></option>     
                              </select>
                              <img src="./../../assets/imgs/arrow.png" alt="" class="myarrow">
                              <Field v-model="userInfo.phoneNumber"
                                     clearable 
                                     ref="input"
                                     type="tel"
                                     placeholder="输入手机号码"
                              />
                  </div>
                  <RadioGroup v-model="userInfo.sex" class="selecte-sex margin10">
                        <span class="sexImg"></span>
                        <Radio name="1" checked-color="#008e98" class="sex-radio">男</Radio>
                        <Radio name="2" checked-color="#008e98" class="sex-radio">女</Radio>
                  </RadioGroup>
                  <p class="login-btn">已有账号<router-link to="/login" class="login-rn">立即登录</router-link></p>
            </div>
      </div>
</template>
<style>
.register-box{
      width:100%;
      padding:60px 40px 0;
}
.fullName{
      width: 100%;
      display: flex;
      align-items: center;
}
.fullName i{
      font-size: 18px !important;
}
.fullName .van-cell{
      align-items: center
}
.selecte-sex{
      width: 100%;
      display: flex;
      padding: 10px 15px;
}
.sexImg{
      background: url("./../../assets/imgs/maw.png") top left no-repeat;
      width: 20px;
      height: 20px;
      background-size: 20px 20px;
      
}
.sex-radio{
      margin: 0 20px;
}
.login-btn{
      padding: 0 20px;
}
.login-rn{
      margin-left: 10px;
      color: #f8955c;
      text-decoration: underline;
}
.margin10{
      margin:10px 0;
}
.mint-cell-mask::after{
      background-color: transparent !important;
}
</style>
<script>
import { Header } from 'mint-ui';
import { Button,Field, RadioGroup, Radio } from 'vant';
import 'vant/lib/button/style';
import 'vant/lib/field/style';
import 'vant/lib/radio-group/style';
import 'vant/lib/radio/style';
import imgURL from './../../assets/imgs/email.png'
import imgURL2 from './../../assets/imgs/code.png'
import imgURL3 from './../../assets/imgs/eye.png'
import imgURL4 from './../../assets/imgs/re-password.png'
import imgURL5 from './../../assets/imgs/personal.png'
export default {
      components: {
           Header,
           Button,
           Field,
           RadioGroup, 
           Radio
      },
      data(){
            return{
                  imgURL,
                  imgURL2,
                  imgURL3,
                  imgURL4,
                  imgURL5,
                  userInfo:{
                        email:"",
                        code:"",
                        password:"",
                        lastName:"",
                        firstName:"",
                        phoneNumber:"",
                        sex:1
                  }
            }
      }
}
</script>
