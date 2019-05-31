<template>
      <div class="container">
            <Header :title="$t('m.changeName')" class="header">
                  <router-link to="/personalData" slot="left">
                        <mt-button icon="back"></mt-button>
                  </router-link>
            </Header>
            <div class="changeName-Box">
                  <div class="cell-box">
                              <Field v-model="userName.lastName"
                                     clearable
                                     :label="$t('m.personName')"
                                     class="cell"
                                     ref="input"
                                     :error-message="errorMessage.lastMessage"
                              />
                              <Field v-model="userName.firstName"
                                     clearable
                                     :label="$t('m.personNameLast')"
                                     class="cell"
                                     :error-message="errorMessage.firstMessage"
                              />
                        
                        
                  </div>
                  <div class="button-box">
                        <Button round size="large" class="my-button" @click="commitUserName">{{$t('m.submit')}}</Button>
                  </div>
            </div>
      </div>
</template>
<style>
.changeName-Box{
      width: 100%;
      height: 100%;
      padding-top: 40px;
}
.changeName-Box .cell-box{
      padding: 30px;
}
.changeName-Box .cell{
      border-bottom: 1px solid #ccc;
}

.changeName-Box .button-box{
      width: 100%;
      padding: 0 30px;
      left: 0;
      right: 0;
      height: 80px;
      bottom: 0;
      display: flex;
      align-items: center;
}
.changeName-Box .my-button{
      background-color: #008e98;
      color: #fff;
}
.changeName-Box .van-field__label{
      max-width: 30px;
}
</style>
<script>
import { Header } from 'mint-ui';
import { Button,Field } from 'vant';
import 'vant/lib/button/style';
import 'vant/lib/field/style';
export default {
      components: {
            Header,
            Button,
            Field
      },
      data(){
            return{
                  userName:{
                        lastName:"",
                        firstName:""
                  },
                  errorMessage:{
                        lastMessage:"",
                        firstMessage:"",
                  }
            }
      },
      methods:{
            commitUserName(){
                  //TODO
                  //判断输入姓名是否为空
                  if(!this.userName.lastName){
                        this.errorMessage.lastMessage = "请填写您的姓氏"
                  }
                  if(!this.userName.firstName){
                        this.errorMessage.firstMessage = "请填写您的名字"
                  }
                  
                  if(this.userName.lastName && this.userName.firstName){
                        const params = {
                              userId: this.$ls.get("userid"),
                              first_name: this.userName.firstName,
                              last_name: this.userName.lastName
                        }
                        this.$post(this.$api.modifyInfo, params).then(res => {
                              if(res.data.code == 1) {
                                    this.$router.push({
                                          path: '/personalData'
                                    })
                              }
                        })
                  }
                  

            }
      },
      mounted() {
            this.$nextTick(()=>{
                  this.$refs['input'].focus()
            })
      }
}
</script>
