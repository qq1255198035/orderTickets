<template>
      <div class="container">
            <div class="login-box">
                  <div class="logo-box">
                        <img src="./../../assets/imgs/logo.png" alt="">
                  </div>
                  <div class="input-box">
                        <Field v-model="email"
                              type="email"
                              :left-icon="imgURL1"
                              placeholder="请输入电子邮箱"
                              class="login-input"
                              :border="false"
                        />
                        <Field v-model="password"
                              type="password"
                              :left-icon="imgURL"
                              placeholder="请输入登录密码"
                              class="login-input"
                              :border="false"
                        />
                        <div class="login-text">
                              <div class="switch-box">
                                    <van-switch v-model="checked" size="16px" inactive-color="#1e4c51" active-color="#30d9c4"/>
                                    <span>记住密码？</span>
                              </div>
                              <router-link to="/resetPword" class="router-link">忘记密码？</router-link>
                        </div>
                        
                  </div>
                  <div class="bottom">
                        <Button round size="large" class="login-button" @click="confirmlogin">确定</Button>
                        <p>还没有账号？<router-link class="router-link" to="/register">立即注册</router-link></p>
                  </div>
            </div>
      </div>
</template>
<style>
.login-box{
      width: 100%;
      height: 100%;
      background: url("./../../assets/imgs/login-bg.png") top left no-repeat;
      background-size: 100% 100%;
}
.logo-box{
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
}
.logo-box img{
      display: block;
      width: 30%;
}
.input-box{
      padding: 0 40px;
}
.input-box .login-input{
      background-color: transparent;
      border: 1px solid #00ffe2;
      border-radius: 25px;
      margin: 10px 0;
}
.input-box .login-input input{
      background-color: transparent !important;
      color: #fff !important;
}
.login-input .van-icon{
      font-size: 22px;
}
.login-input input::-webkit-input-placeholder{
      color: #82e0e7 !important;
      text-align: center;
}
.login-text{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
}
.switch-box{
      display: flex;
      align-items: center;
}
.switch-box span{
      color:#fff;
      margin-left: 10px;
      font-size: 16px;
}
.router-link{
      color: #11f7f0;
      text-decoration: underline;
      font-size: 16px
}
.login-button{
      background-color: #30d9c4;
      color: #fff;
      border: none;
      font-size: 18px;
}
.login-box .bottom{
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
}
.login-box .bottom p{
      color: #fff;
      margin-top: 20px;
}
</style>
<script>
import { Button,Field,Switch,Toast } from 'vant';
import 'vant/lib/button/style';
import 'vant/lib/field/style';
import 'vant/lib/switch/style';
import 'vant/lib/toast/style';
import imgURL from './../../assets/imgs/password.png'
import imgURL1 from './../../assets/imgs/Profile.png'

export default {
      components: {
            Button,
            Field,
            "van-switch":Switch
      },
      computed:{
            
      },
      data(){
            return{
                  imgURL,
                  imgURL1,
                  checked:false,
                  email:"",
                  password:""
                  
            }
           
      },
      methods:{
            confirmlogin(){
                  if(!this.email){
                        Toast.fail('请填写用户名');
                  }else if(!this.password){
                        Toast.fail('请填写密码');
                  }else{
                        this.$post(this.$api.login, {
                              username: this.email,
                              password: this.password
                        }).then(res =>{
                              console.log(res)
                              if(res.mes == 0) {
                                    Toast.fail('用户名不存在');
                              }
                              if(res.code == 1){
                                    Toast.success('登录成功')
                                    this.$ls.set("token",res.token)
                                    this.$ls.set("userid",res.userid)
                                    let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                                    console.log(redirect)
                                    this.$router.push({
                                          path: redirect
                                    })
                                    
                              }
                        })
                  }
                  
            }
      },
      mounted(){
            
            
      }
}
</script>
