<template>
  <div class="container">
    <Header :title="$t('m.headImg')" class="header">
      <router-link to="/personalData" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </Header>
    <div class="uploader-box">
      <div class="content">
        <Uploader
          result-type="dataUrl"
          :after-read="onRead"
          :accept="'image/png, image/jpeg'"
          class="uploader"
        >
          <img src="./../../../assets/imgs/camera.png" alt>
        </Uploader>
        <div class="item">
          <img :src="imgUrl" v-if="imgShow"/>
        </div>
      </div>
      
    </div>
  </div>
</template>
<style scoped>
.uploader-box {
  width: 100%;
  padding-top: 40px;
  position: relative;
  height: 100%;
}
.content {
  widows: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 5px;
}
.uploader {
  width: 90px;
  height: 90px;
  margin: 2px;
  margin-left: 0;
}
.uploader img {
  display: block;
  width: 100%;
  height: 100%;
}

.item {
  height: 90px;
  width: 90px;
  margin: 2px;
  margin-left: 0;
  position: relative;
}
.item img {
  display: block;
  width: 100%;
  height: 100%;
}
.button-box {
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
.my-button {
  background-color: #008e98;
  color: #fff;
}
.badge {
  position: absolute;
  border-radius: 100% !important;
  right: 0;
  top: 0;
  padding: 2px 4px !important;
}
</style>
<script>
import axios from "axios";
import qs from 'qs'
import { Uploader, Button, Icon, Toast } from "vant";
import { Header, Badge } from "mint-ui";
import "vant/lib/uploader/style";
import "vant/lib/button/style";
import "vant/lib/icon/style";
import "vant/lib/toast/style";
export default {
  components: {
    Uploader,
    Header,
    Button,
    Badge,
    Icon,
    Toast
  },
  data() {
    return {
      imgUrl: ''
    };
  },
  computed:{
    imgShow(){
      if(this.imgUrl){
        return true
      }else{
        return false
      }
    }
  },
  methods: {
    onRead(file) {
      let params = {
        data: file.content
      }
      var formData = new FormData();
      //console.log(file)
      formData.append('file',file.file);
     // console.log(formData.get('file'));
      this.$post(this.$api.avatarImg, formData,{headers:{'Content-Type':'multipart/form-data'}})
        .then(res => {
          //console.log(res);
          this.imgUrl = res.link;
          this.getImgUrl();
        });
        
    },
    
    getImgUrl(){
      this.$post(this.$api.modifyInfo,{avatar:this.imgUrl,userId: this.$ls.get('userid')}).then(res=>{
        //console.log(res)
        if(res.errno == 0){
          Toast.success("上传成功 ！");
          this.$router.push({name: 'personalData'})
        }
      })
    }
  }
};
</script>
