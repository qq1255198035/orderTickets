<template>
  <div class="container">
    <Header :title="$t('m.mineTitle')" class="header"></Header>
    <div class="main">
      <div class="userCenter">
        <span>
          <img :src="userInfo.avatar" alt>
        </span>
        <p>{{userInfo.username}}</p>
        <p>{{this.firstName}}{{this.lastName}}</p>
      </div>
      <div class="cellBox myHome-box">
        <mt-cell :title="$t('m.allOrderTitle')" to="/order" is-link class="cell">
          <img slot="icon" src="./../../../assets/imgs/orderIcon.png" width="20" height="24">
        </mt-cell>
        <mt-cell :title="$t('m.couponTitle')" to="/mycoupon" is-link class="cell">
          <img slot="icon" src="./../../../assets/imgs/couponIcon.png" width="24" height="20">
        </mt-cell>
        <mt-cell :title="$t('m.personData')" to="/personalData" is-link class="cell">
          <img slot="icon" src="./../../../assets/imgs/someOne-icon.png" width="20" height="24">
        </mt-cell>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<style>
.main {
  width: 100%;
  height: 100%;
  padding-top: 40px;
}
.userCenter {
  width: 100%;
  height: 30%;
  background: url("./../../../assets/imgs/myHome-bg.png") center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.userCenter p {
  color: #fff;
}
.userCenter span {
  width: 60px;
  height: 60px;
  display: block;
  border-radius: 100%;
  overflow: hidden;
}
.userCenter span img {
  width: 60px;
  height: 60px;
}
.cellBox {
  padding: 20px;
}
.cell {
  border-bottom: 1px solid #ccc;
}
.mint-cell-wrapper {
  background-image: none !important;
}
.myHome-box .mint-cell-text {
  margin-left: 10px;
}
</style>
<script>
import { Header, Cell } from "mint-ui";
import tabbar from "./../../../components/tabBar";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  components: {
    Header,
    tabbar,
    Cell
  },
  data() {
    return {
      userInfo: ""
    };
  },
  computed: {
    ...mapGetters(["avatar", "firstName", "lastName", "tel", "sex", "email"])
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    ...mapActions([
      "changefName",
      "changelName",
      "changeSex",
      "changeEmail",
      "changeTel",
      "changeAvatar"
    ]),
    getInfo() {
      const params = {
        userid: this.$ls.get("userid")
      };
      this.$post(this.$api.persona, params).then(res => {
        console.log(res);
        this.userInfo = res.list;
      });
    }
  }
};
</script>
