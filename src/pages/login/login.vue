<template>
  <div class="container">
    <div class="login-box">
      <div class="logo-box">
        <img src="./../../assets/imgs/logo.png" alt>
      </div>
      <div class="input-box">
        <Field
          v-model="email"
          type="email"
          :left-icon="imgURL1"
          :placeholder="$t('m.email')"
          class="login-input"
          :border="false"
        />
        <Field
          v-model="password"
          type="password"
          :left-icon="imgURL"
          :placeholder="$t('m.passwrods')"
          class="login-input"
          :border="false"
        />
        <div class="login-text">
          <div class="switch-box">
            <van-switch
              v-model="checked"
              size="16px"
              inactive-color="#1e4c51"
              active-color="#30d9c4"
            />
            <span>{{$t('m.savePassword')}}?</span>
          </div>
          <router-link to="/resetPword" class="router-link">{{$t('m.notPassword')}}?</router-link>
        </div>
      </div>
      <div class="bottom">
        <Button round size="large" class="login-button" @click="confirmlogin">{{$t('m.submit')}}</Button>
        <p>
          {{$t('m.notEmail')}}
          <router-link class="router-link" to="/register">{{$t('m.nowReset')}}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.login-box {
  width: 100%;
  height: 100%;
  background: url("./../../assets/imgs/login-bg.png") top left no-repeat;
  background-size: 100% 100%;
}
.logo-box {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-box img {
  display: block;
  width: 30%;
}
.input-box {
  padding: 0 40px;
}
.input-box .login-input {
  background-color: transparent;
  border: 1px solid #00ffe2;
  border-radius: 25px;
  margin: 10px 0;
}
.input-box .login-input input {
  background-color: transparent !important;
  color: #fff !important;
}
.login-input .van-icon {
  font-size: 22px;
}
.login-input input::-webkit-input-placeholder {
  color: #82e0e7 !important;
  text-align: center;
}
.login-text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.switch-box {
  display: flex;
  align-items: center;
}
.switch-box span {
  color: #fff;
  margin-left: 10px;
  font-size: 16px;
}
.router-link {
  color: #11f7f0;
  text-decoration: underline;
  font-size: 16px;
}
.login-button {
  background-color: #30d9c4;
  color: #fff;
  border: none;
  font-size: 18px;
}
.login-box .bottom {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
.login-box .bottom p {
  color: #fff;
  margin-top: 20px;
}
</style>
<script>
import { Button, Field, Switch, Toast } from "vant";
import "vant/lib/button/style";
import "vant/lib/field/style";
import "vant/lib/switch/style";
import "vant/lib/toast/style";
import imgURL from "@assets/imgs/password.png";
import imgURL1 from "@assets/imgs/Profile.png";
const Base64 = require('js-base64').Base64
export default {
  components: {
    Button,
    Field,
    "van-switch": Switch
  },
  computed: {},
  data() {
    return {
      imgURL,
      imgURL1,
      checked: "",
      email: "",
      password: "",
      setEmail: "",
      setPassword: ""
    };
  },
  created() {
    console.log(this.checked);
    let emails = this.getCookie("email");
    let passwords = Base64.decode(this.getCookie("password"));
    console.log(passwords)
    this.email = emails;
    this.password = passwords;
    this.checked = true;
  },
  methods: {
    //登录
    confirmlogin() {
      if (!this.email) {
        Toast.fail("請填寫用戶名");
      } else if (!this.password) {
        Toast.fail("請填寫密碼");
      } else {
        this.$post(this.$api.login, {
          username: this.email,
          password: this.password
        }).then(res => {
          console.log(res);
          if (res.mes == 0) {
            Toast.fail("用戶名不存在");
          }
          if (res.code == 1) {
            Toast.success("登入成功");
            this.$ls.set("token", res.token);
            //this.setCookie('token',res.token)
            this.setUser();
            this.$ls.set("userid", res.userid);
            let redirect = decodeURIComponent(
              this.$route.query.redirect || "/"
            );
            console.log(redirect);
            this.$router.push({
              path: redirect
            });
          }
        });
      }
    },
    setUser() {
      if (this.checked) {
        this.setCookie("email", this.email, 7);
        let passwordMd = Base64.encode((this.password));
        this.setCookie("password", passwordMd, 7);
        this.setCookie("checked", this.checked, 7);
      } else {
        this.setCookie("email", "");
        this.setCookie("password", "");
      }
    },
    // 保存cookie
    setCookie: function(cName, value, expiredays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expiredays);
      document.cookie =
        cName +
        "=" +
        decodeURIComponent(value) +
        (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
    },
    // 获取cookie
    getCookie: function(key) {
      console.log(document.cookie.length);
      if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(key + "=");
        if (start !== -1) {
          start = start + key.length + 1;
          var end = document.cookie.indexOf(";", start);
          if (end === -1) end = document.cookie.length;
          return unescape(document.cookie.substring(start, end));
        }
      }
      return "";
    }
  },
  mounted() {}
};
</script>
