<template>
  <div class="container">
    <Header :title="$t('m.forgotTitle')" class="header">
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </Header>
    <div class="resetPword-Box">
      <div v-if="checkCode.status == 1">
        <div class="cell-box">
          <Field
            v-model="email"
            type="email"
            :left-icon="imgURL1"
            :placeholder="$t('m.email')"
            class="resetPword-input cell"
            :border="false"
          />
          <Field
            v-model="code"
            clearable
            :placeholder="$t('m.verCode')"
            class="cell"
            type="number"
            :left-icon="imgURL"
          >
            <Button
              slot="button"
              size="small"
              type="primary"
              v-show="timerShow"
              @click="sendCode"
              class="mybutton"
            >{{$t('m.getCode')}}</Button>
            <Button
              slot="button"
              v-show="!timerShow"
              size="small"
              disabled
              type="primary"
              class="mybutton"
            >{{count}} s</Button>
          </Field>
        </div>
        <div class="button-box">
          <Button round size="large" class="my-button" @click="confirm">{{$t('m.submit')}}</Button>
        </div>
      </div>
      <div v-if="checkCode.status == 0">
        <div class="cell-box">
          <Field
            v-model="newPassword"
            type="password"
            :left-icon="imgURL2"
            :placeholder="$t('m.newPassword')"
            class="resetPword-input cell"
            :border="false"
          />
          <Field
            v-model="checkNewPassword"
            clearable
            :placeholder="$t('m.againPassword')"
            class="cell"
            type="password"
            :left-icon="imgURL"
          />
        </div>
        <div class="button-box">
          <Button round size="large" class="my-button" @click="submitBtn">{{$t('m.submitTo')}}</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.resetPword-Box {
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
  background: url("./../../assets/imgs/phone-icon.png") center no-repeat;
  background-size: 16px 22px;
}

.cell input {
  background-color: transparent !important;
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
}
.myarrow {
  width: 10px;
  height: 5px;
}
.resetPword-input i {
  font-size: 18px !important;
}
@media screen and (min-width: 700px) {
  input {
    font-size: 16px;
  }
}
</style>
<script>
import { Header } from "mint-ui";
import { Button, Field, Toast } from "vant";
import "vant/lib/button/style";
import "vant/lib/field/style";
import imgURL from "./../../assets/imgs/code.png";
import imgURL1 from "./../../assets/imgs/email.png";
import imgURL2 from "./../../assets/imgs/re-password.png";
const COUNT_NUM = 60;
export default {
  components: {
    Header,
    Button,
    Field,
    Toast
  },
  data() {
    return {
      imgURL,
      imgURL1,
      imgURL2,
      email: "",
      code: "",
      show: true,
      count: "",
      timer: null,
      timerShow: true,
      newPassword: "",
      checkNewPassword: "",
      checkCode: {
        status: 1
      }
    };
  },
  methods: {
    // 验证码获取
    sendCode() {
      const emailPro = this.email;
      if (!emailPro) {
        Toast.fail("郵箱不能為空");
      } else {
        this.$post(this.$api.emailCheck, {
          username: this.email
        }).then(res => {
          console.log(res);
          if (res.code == 0) {
            if (!this.timer) {
              this.count = COUNT_NUM;
              this.timerShow = false;
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= COUNT_NUM) {
                  this.count--;
                } else {
                  this.timerShow = true;
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000);
            }
            setTimeout(() => {
              this.$post(this.$api.setCode, {
                email: this.email
              }).then(res => {
                console.log(res);
                console.log(res.mailCode);
              });
            }, 10000);
          } else {
            Toast.fail("郵箱不存在");
          }
        });
      }
    },
    //确认
    confirm() {
      if (this.code && this.email) {
        this.checkCode.status = 0;
        this.$ls.set("newEmail", this.email)
      }
    },
    submitBtn() {
      if (this.newPassword === this.checkNewPassword) {
        const params = {
          userName: this.email,
          password: this.newPassword
        };
        this.$post(this.$api.getPassword, params).then(res => {
          console.log(res);
          if(res.code == 1){
            Toast.success('修改成功')
            this.$router.push({
              path: '/login'
            })
          }
        });
      }else{
        Toast.fail('兩次密碼不匹配')
      }
    }
  },
  mounted() {
    this.$nextTick(() => {});
  }
};
</script>
