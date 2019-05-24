<template>
  <div class="container">
    <Header :title="this.$t('message.sponsorCube')" class="header"></Header>
    <div class="img-box">
      <img :src="imgUrl.avatar" alt srcset @click.stop="activityDetail(imgUrl)">
    </div>
    <tabbar class="tabbar"></tabbar>
  </div>
</template>

<script>
import { Header } from "mint-ui";
import tabbar from "./../../components/tabBar";
export default {
  data() {
    return {
      imgUrl: ""
    };
  },
  components: {
    Header,
    tabbar
  },
  created() {
    this._index();
  },
  methods: {
    _index() {
      this.$post(this.$api.index).then(res => {
        console.log(res);
        this.imgUrl = res.data.topicList[0];
        console.log(this.imgUrl)
      });
    },
    activityDetail(item) {
      this.$router.push({
        name: 'details1',
        query: {
          id: item.id
        }
      })
    }
  },
  mounted() {}
};
</script>

<style>
#app .mint-header {
  background-color: #008e98;
  font-size: 16px;
}
#app .mint-tabbar {
  border-top: 1px solid #ccc;
  box-sizing: border-box;
}
.img-box {
  width: 100%;
  height: 100%;
  position: relative;
}
.img-box img {
  width: 100%;
  display: block;
  height: 100%;
}
.text-actived {
  color: #008e98;
}
.go-login {
  position: absolute;
  top: 50px;
  right: 20px;
}
</style>
