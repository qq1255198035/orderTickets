<template>
  <div class="container">
    <Header :title="$t('m.registerTitle')" class="header">
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </Header>
    <div class="register-box">
      <Field
        v-model="userInfo.email"
        clearable
        :placeholder="$t('m.email')"
        class="cell"
        type="text"
        :left-icon="imgURL"
      />
      <Field
        v-model="userInfo.code"
        clearable
        :placeholder="$t('m.verCode')"
        class="cell margin10"
        type="number"
        :left-icon="imgURL2"
      >
        <Button
          slot="button"
          v-show="timerShow"
          size="small"
          type="primary"
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
      <Field
        v-model="userInfo.password"
        clearable
        :placeholder="$t('m.passwrods')"
        class="cell margin10"
        type="password"
        :left-icon="imgURL4"
        :right-icon="imgURL3"
      ></Field>
      <div class="fullName margin10">
        <Field
          v-model="userInfo.firstName"
          clearable
          :placeholder="$t('m.personName')"
          type="text"
          :left-icon="imgURL5"
        ></Field>
        <Field v-model="userInfo.lastName" clearable :placeholder="$t('m.personNameLast')" type="text"></Field>
      </div>
      <div class="cell margin10">
        <span class="phone-icon"></span>
        <select name id class="myselect">
          <option value="volvo">+86</option>
          <option value="saab"></option>
          <option value="opel"></option>
          <option value="audi"></option>
        </select>
        <img src="./../../assets/imgs/arrow.png" alt class="myarrow">
        <Field
          v-model="userInfo.phoneNumber"
          clearable
          ref="input"
          type="tel"
          :placeholder="$t('m.phoneTitle')"
        />
      </div>
      <RadioGroup v-model="userInfo.sex" class="selecte-sex margin10">
        <span class="sexImg"></span>
        <Radio name="1" checked-color="#008e98" class="sex-radio">{{$t('m.sexBoy')}}</Radio>
        <Radio name="2" checked-color="#008e98" class="sex-radio">{{$t('m.sexGril')}}</Radio>
      </RadioGroup>
      <p class="login-btn">
        {{$t('m.accounts')}}
        <router-link to="/login" class="login-rn">{{$t('m.loginTitle')}}</router-link>
      </p>
      <div class="bottom">
        <Button round size="large" v-show="show" @click="sumbit" class="login-button">{{$t('m.registerTitle')}}</Button>
        <Button round size="large" v-show="!show" disabled class="login-button">{{$t('m.registerTitle')}}</Button>
      </div>
    </div>
  </div>
</template>
<style>
.register-box input {
  background-color: #fff !important;
}
.register-box {
  width: 100%;
  padding: 60px 40px 0;
}
.register-box .bottom {
  margin-top: 20px;
}
.register-box .bottom button {
  background-color: #008e98;
}
.fullName {
  width: 100%;
  display: flex;
  align-items: center;
}
.fullName i {
  font-size: 20px !important;
}
.fullName .van-cell {
  align-items: center;
}
.selecte-sex {
  width: 100%;
  display: flex;
  padding: 10px 15px;
  border-bottom: 1px solid #ccc;
}
.sexImg {
  background: url("./../../assets/imgs/maw.png") top left no-repeat;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
.sex-radio {
  margin: 0 20px;
}
.login-btn {
  padding: 0 20px;
}
.login-rn {
  margin-left: 30px;
  color: #f8955c;
  text-decoration: underline;
}
.margin10 {
  margin: 10px 0;
}
.mint-cell-mask::after {
  background-color: transparent !important;
}
@media screen and (min-width: 700px) {
  input {
    font-size: 16px;
  }
}
</style>
<script>
import { Header } from "mint-ui";
import { Button, Field, RadioGroup, Radio, Toast } from "vant";
import "vant/lib/button/style";
import "vant/lib/field/style";
import "vant/lib/radio-group/style";
import "vant/lib/radio/style";
import imgURL from "./../../assets/imgs/email.png";
import imgURL2 from "./../../assets/imgs/code.png";
import imgURL3 from "./../../assets/imgs/eye.png";
import imgURL4 from "./../../assets/imgs/re-password.png";
import imgURL5 from "./../../assets/imgs/personal.png";
const COUNT_NUM = 60;
export default {
  components: {
    Header,
    Button,
    Field,
    RadioGroup,
    Radio,
    Toast
  },
  data() {
    return {
      imgURL,
      imgURL2,
      imgURL3,
      imgURL4,
      imgURL5,
      show: true,
      count: "",
      timer: null,
      timerShow: true,
      userInfo: {
        email: "",
        code: "",
        codeMall: "",
        password: "",
        lastName: "",
        firstName: "",
        phoneNumber: "",
        sex: "1"
      }
    };
  },
  created() {},
  methods: {
    // 注册提交
    sumbit() {
      if (this.userInfo.codeMall === this.userInfo.code) {
        this.$post(this.$api.register, {
          username: this.userInfo.email,
          mailCode: this.userInfo.code,
          password: this.userInfo.password,
          first_Name: this.userInfo.firstName,
          last_Name: this.userInfo.lastName,
          mobile: this.userInfo.phoneNumber,
          gender: this.userInfo.sex
        }).then(res => {
          if (res.code == 1) {
            Toast.success("注册成功");
            this.$router.push({ name: "login" });
          }
        });
      } else {
        Toast.fail("驗證碼出錯");
        return false;
      }
    },
    // 验证码获取
    sendCode() {
      const emailPro = this.userInfo.email;
      if (!emailPro) {
        Toast.fail("郵箱不能為空");
      } else {
        this.$post(this.$api.emailCheck, {
          username: this.userInfo.email
        }).then(res => {
          if (res.code == 0) {
            Toast.fail("郵箱已被注册");
            this.show = false;
          } else {
            this.show = true;
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
                email: this.userInfo.email
              }).then(res => {
                this.userInfo.codeMall = res.mailCode;
              });
            }, 9000);
          }
        });
      }
    }
  }
};
</script>
