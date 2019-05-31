<template>
  <div class="container">
    <Header :title="$t('m.changeName')" class="header">
      <router-link to="/personalData" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </Header>
    <div class="changeSex-Box">
      <RadioGroup v-model="radio" @change="radios" class="radio-box">
        <Radio name="1" checked-color="#008e98" class="border-bottom">{{$t('m.sexBoy')}}</Radio>
        <Radio name="2" checked-color="#008e98" class="border-bottom">{{$t('m.sexGril')}}</Radio>
      </RadioGroup>
      <div class="button-box">
        <Button round size="large" class="my-button" @click="commitSex">{{$t('m.submit')}}</Button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.changeSex-Box {
  width: 100%;
  height: 100%;
  padding-top: 40px;
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
.radio-box {
  padding: 20px;
}
.radio-box .van-radio {
  padding: 15px 0;
}
.border-bottom {
  border-bottom: 1px solid #ccc;
}
</style>
<script>
import { Header } from "mint-ui";
import { Button, RadioGroup, Radio } from "vant";
import "vant/lib/button/style";
import "vant/lib/field/style";
import "vant/lib/radio-group/style";
import "vant/lib/radio/style";
export default {
  components: {
    Header,
    Button,
    RadioGroup,
    Radio
  },
  data() {
    return {
      radio: "1"
    };
  },
  methods: {
    commitSex() {
      const params = {
        gender: this.radio,
        userId: this.$ls.get("userid")
      };
      console.log(typeof params);
      this.$post(this.$api.modifyInfo, params).then(res => {
            console.log(res)
        if (res.data.code == 1) {
          this.$router.push({
            path: "/personalData"
          });
        }
      });
    },
    _getSex() {
      this.radio = this.$route.query.sex;
      console.log(this.radio)
    },
    radios(e) {
      this.radio = e;
    }
  },
  created() {
    this._getSex();
  },
  mounted() {
    this.$nextTick(() => {});
  }
};
</script>
