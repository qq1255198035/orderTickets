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
          accept="image/png, image/jpeg"
          class="uploader"
        >
          <img src="./../../../assets/imgs/camera.png" alt>
        </Uploader>
        <div class="item">
          <img :src="imgUrl" alt @click="getImgUrl">
          <Badge size="small" type="success" class="badge" v-show="badgeShow">
            <Icon name="success" size="16px"/>
          </Badge>
        </div>
      </div>
      <div class="button-box">
        <Button round size="large" class="my-button" @click="postImgUrl">{{$t('m.submit')}}</Button>
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
      imgUrl: [],
      postImgURL: "",
      badgeShow: false,
      opation: ""
    };
  },

  methods: {
    onRead(file) {
      this.opation = file.file
      let params = {
        data: file.content
      }
      var formData = new FormData();
      console.log(file.file)
      formData.append('file',file.file);
      console.log(file)
      let data = formData;
      let datas =  window.URL.createObjectURL(file.file)
      console.log(datas);
      let url = "/api/platform/api/user/upload";
      //let url = this.$api.avatarImg
      axios
        .post(url, datas, {
          headers: {
            'Content-Type':'multipart/form-data',
            //'Content-Type': 'application/json;charset=UTF-8',
            //'Content-Type': 'text/plain',
            //'content-type': 'application/x-www-form-urlencoded'
          }
        })
        .then(res => {
          console.log(res);
        });

      this.imgUrl = file.content;
    },
    postImgUrl() {
      const params = {
        userId: this.$ls.get("userid"),
        avatar: this.opation
      };
      //const data = JSON.stringify(params)
      console.log(params);
      if (!this.badgeShow) {
        Toast("您還沒有選擇任何圖片");
      } else {
        console.log("已添加圖片");
        this.$post(this.$api.modifyInfo, params).then(res => {
          console.log(res);
        });

        //TODO向服务器提交图片url
      }
    },  
    getImgUrl(event) {
      this.badgeShow = !this.badgeShow;
      if (this.badgeShow) {
        this.postImgURL = event.target.src;
      } else {
        this.postImgURL = "";
      }
    }
  }
};
</script>
