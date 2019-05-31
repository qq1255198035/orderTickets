<template>
  <div class="container">
    <Header title="个人信息" class="header">
      <router-link to="/myhome" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </Header>
    <div class="cellBox pd-cellBox">
      <mt-cell :title="$t('m.headImg')" to="/userImg" is-link class="cell">
        <img slot="icon" :src="userInfo.avatar" width="40" height="40" class="right">
      </mt-cell>
      <mt-cell :title="$t('m.mailBox')" :value=" userInfo.username" class="cell"></mt-cell>
      <mt-cell
        :title="$t('m.fullName')"
        :value=" userInfo.first_name + userInfo.last_name"
        class="cell"
        to="/changeName"
        is-link
      ></mt-cell>
      <mt-cell
        :title="$t('m.telNumber')"
        :value="userInfo.mobile"
        class="cell"
        to="/changeNumber"
        is-link
      ></mt-cell>
      <mt-cell
        :title="$t('m.sexual')"
        :value="userInfo.gender == 1 ? '男':'女'"
        class="cell"
        :to="{path: '/changeSex', query:{sex:userInfo.gender}}"
        is-link
      ></mt-cell>
    </div>
  </div>
</template>
<style>
.cellBox {
  padding: 40px 10px;
}
.cell {
  border-bottom: 1px solid #ccc;
}
.mint-cell-title img.right {
  float: right;
}
.pd-cellBox .mint-cell-title img {
  border: 1px solid #ccc;
  padding: 1px;
  border-radius: 2px;
}
.mint-cell-title .mint-cell-text {
  line-height: 40px;
}
</style>
<script>
import { Header, Cell } from "mint-ui";
import userImg from "@assets/imgs/userImg.png";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: {
    Header,
    Cell
  },
  data() {
    return {
      userInfo: {
        
      }
    };
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
    _editInfo() {
      const params = {
        userid: this.$ls.get("userid")
      };
      this.$post(this.$api.persona, params).then(res => {
        console.log(res);
        this.userInfo = res.list;
      });
    }
  },
  watch: {},
  created() {
    this._editInfo();
  },
  mounted() {},
  computed: {
    ...mapGetters(["avatar", "firstName", "lastName", "tel", "sex", "email"])
  }
};
</script>

