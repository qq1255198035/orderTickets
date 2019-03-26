<template>
      <div class="container">
            <Header title="更改姓名" class="header">
                  <router-link to="/personalData" slot="left">
                        <mt-button icon="back"></mt-button>
                  </router-link>
            </Header>
            <div class="changeSex-Box">
                  <RadioGroup v-model="radio" class="radio-box">
                        <Radio name="1" checked-color="#008e98" class="border-bottom">男</Radio>
                        <Radio name="2" checked-color="#008e98">女</Radio>
                  </RadioGroup>
                  <div class="button-box">
                        <Button round size="large" class="my-button" @click="commitSex">确定</Button>
                  </div>
            </div>
      </div>
</template>
<style scoped>
.changeSex-Box{
      width: 100%;
      height: 100%;
      padding-top: 40px;
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
.radio-box{
      padding: 20px;
}
.radio-box .van-radio{
      padding: 15px 0;
}
.border-bottom{
      border-bottom:1px solid #ccc; 
}
</style>
<script>
import { Header } from 'mint-ui';
import { Button, RadioGroup, Radio } from 'vant';
import 'vant/lib/button/style';
import 'vant/lib/field/style';
import 'vant/lib/radio-group/style';
import 'vant/lib/radio/style';
export default {
      components: {
            Header,
            Button,
            RadioGroup, 
            Radio
      },
      data(){
            return{
                 radio: '1'
            }
      },
      methods:{
           commitSex(){
                 console.log(this.radio)
           }
      },
      mounted() {
            this.$nextTick(()=>{
                  
            })
      }
}
</script>
