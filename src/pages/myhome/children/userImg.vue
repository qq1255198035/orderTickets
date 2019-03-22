<template>
      <div class="container">
            <Header title="头像" class="header">
                  <router-link to="/personalData" slot="left">
                        <mt-button icon="back"></mt-button>
                  </router-link>
            </Header>
            <div class="uploader-box">
                  <div class="content">
                        <Uploader :after-read="onRead" accept="image/png, image/jpeg" class="uploader">
                              <img src="./../../../assets/imgs/camera.png" alt="">
                        </Uploader>
                        <div v-for="(item,index) in imgUrl" :key="index" class="item">
                              <img :src="item" alt="" @click="getImgUrl">
                              <Badge size="small" type="success" class="badge" v-show="badgeShow"><Icon name="success" size="16px"/></Badge>
                        </div>
                  </div>
                  <div class="button-box">
                        <Button round size="large" class="my-button" @click="postImgUrl">确定</Button>
                        
                  </div>
                  
            </div>
      </div>
</template>
<style scoped>
.uploader-box{
      width: 100%;
      padding-top: 40px;
      position: relative;
      height: 100%;
}
.content{
      widows: 100%;
      display: flex;
      flex-wrap:wrap;
      padding-left: 5px; 
}
.uploader{
      width: 90px;
      height: 90px;
      margin: 2px;
      margin-left: 0
}
.uploader img{
      display: block;
      width: 100%;
      height: 100%;
}

.item{
      height: 90px;
      width: 90px;
      margin: 2px;
      margin-left: 0;
      position: relative;
}
.item img{
      display: block;
      width: 100%;
      height: 100%;
}
.button-box{
      max-width: 750px;
      min-width: 320px;
      width: 100%;
      padding: 0 30px;
      position: fixed;
      left: 0;
      right: 0;
      height: 80px;
      bottom: 0;
      display: flex;
      align-items: center;
      margin: 0 auto;
}
.my-button{
      background-color: #008e98;
      color: #fff;
}
.badge{
      position: absolute;
      border-radius: 100% !important;
      right: 0;
      top: 0;
      padding: 2px 4px !important;
}
</style>
<script>
import { Uploader, Button, Icon, Toast} from 'vant';
import { Header,Badge } from 'mint-ui';
import 'vant/lib/uploader/style';
import 'vant/lib/button/style';
import 'vant/lib/icon/style';
import 'vant/lib/toast/style';
export default {
      components:{
            Uploader,
            Header,
            Button,
            Badge,
            Icon,
            Toast
      },
      data(){
            return{
                  imgUrl:[],
                  postImgURL:"",
                  badgeShow:false
            }
      },
      
      methods: {
            onRead(file) {
                  this.imgUrl.push(file.content)
            },
            postImgUrl(){
                  if (!this.badgeShow) {
                        Toast('您还没有选择任何图片');
                  }else{
                        console.log("已添加图片")
                        //TODO向服务器提交图片url
                  }

            },
            getImgUrl(event){
                  this.badgeShow = !this.badgeShow;
                  if (this.badgeShow) {
                        this.postImgURL = event.target.src;   
                  }else{
                        this.postImgURL = ''
                  }
                  //console.log(this.postImgURL)
            }
      }
}
</script>
