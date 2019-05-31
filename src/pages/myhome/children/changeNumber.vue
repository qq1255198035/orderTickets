<template>
  <div class="container">
    <Header :title="$t('m.changeTel')" class="header">
      <router-link to="/personalData" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </Header>
    <div class="changeName-Box">
      <div class="cell-box">
        <div class="cell">
          <span class="phone-icon"></span>
          <select name id class="myselect">
            <option value="volvo">+86</option>
            <option value="saab"></option>
            <option value="opel"></option>
            <option value="audi"></option>
          </select>
          <img src="./../../../assets/imgs/arrow.png" alt class="myarrow">
          <Field
            v-model="phoneNum"
            clearable
            ref="input"
            type="tel"
            :placeholder="$t('m.phoneTitle')"
          />
        </div>

        <!-- <Field v-model="code"
                                     clearable
                                     :placeholder="$t('m.verCode')"
                                     class="cell"
                                     type="number"
                                     :left-icon="imgURL"
                              >
                                    <Button slot="button" size="small" type="primary" class="mybutton" @click="checkMobile(phoneNum)">获取验证码</Button>
        </Field>-->
      </div>
      <div class="button-box">
        <Button round size="large" @click="numBtn" class="my-button">{{$t('m.submit')}}</Button>
      </div>
    </div>
  </div>
</template>
<style>
.changeName-Box {
  width: 100%;
  height: 100%;
  padding-top: 40px;
}
.cell-box {
  padding: 30px;
}
.cell {
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding-left: 15px;
}
.cell .mybutton {
  border: none;
  border-left: 1px solid #ccc;
  background-color: transparent;
  color: #666;
}
.button-box {
  width: 100%;
  padding: 0 30px;
  left: 0;
  right: 0;
  height: 80px;
  bottom: 0;
  display: flex;
  align-items: center;
}
.my-button {
  background-color: #008e98;
  color: #fff;
}
.cell .phone-icon {
  width: 22px;
  height: 22px;
  display: block;
  background: url("./../../../assets/imgs/phone-icon.png") center no-repeat;
  background-size: 16px 22px;
}
.cell i {
  font-size: 20px !important;
}
.cell input {
  background-color: transparent !important;
}
.cell .van-cell {
  border-bottom: none;
}
.myselect {
  border: none;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  margin-left: 5px;
  padding-right: 10px;
  background-color: transparent;
  font-size: 16px;
}
.myarrow {
  width: 10px;
  height: 5px;
}
</style>
<script>
import { Header, MessageBox } from "mint-ui";

import { Button, Field } from "vant";
import "vant/lib/button/style";
import "vant/lib/field/style";
import imgURL from "@assets/imgs/code.png";
export default {
  components: {
    Header,
    Button,
    Field,
    MessageBox
  },
  data() {
    return {
      imgURL,
      //TODO 修改 手机号与验证码变量名
      phoneNum: "",
      code: ""
    };
  },
  methods: {
    checkMobile(mobile) {
      if (!mobile) {
        MessageBox("錯誤", "請輸入手機號碼");
        return false;
      }
      return true;
    },
    numBtn() {
      const params = {
        userId: this.$ls.get("userid"),
        mobile: this.phoneNum
      };
      this.$post(this.$api.modifyInfo, params).then(res => {
        if (res.data.code == 1) {
          this.$router.push({
            path: "/personalData"
          });
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs["input"].focus();
    });
  }
};
</script>
