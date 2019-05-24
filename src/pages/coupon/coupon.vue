<template>
  <div class="contanier">
    <Header title="优惠券" class="header" :fixed="true">
      <mt-button icon="back" slot="left" @click.native="$router.back(-1)"></mt-button>
    </Header>
    <div class="coupon-box">
      <div class="coupon-content">
        <RadioGroup v-model="index" @change="radios" v-if="couponNum.length > 0">
          <Radio :name="index" v-for="(item, index) in couponNum" :key="index">
            <div class="coupon1">
              <div class="coupon-wrapper">
                <p>
                  <span>￥</span>
                  {{item.type_money}}
                </p>
                <p>
                  <span>满{{item.min_amount}}可用</span>
                </p>
              </div>

              <div class="coupon-rule">
                <p>
                  使用期限：
                  <span>{{item.use_start_date}}</span>~
                  <span>{{item.use_end_date}}</span>
                </p>
                <span v-if="item.send_type == 0">未使用</span>
              </div>
            </div>
          </Radio>
          <!--<Radio name="2">
            <div class="coupon2">
              <p>
                <span>￥</span>5
              </p>
              <div class="coupon-rule">
                <p>
                  使用期限：
                  <span>2016.10.16</span>~
                  <span>2017.08.12</span>
                </p>
                <span>未使用</span>
              </div>
            </div>
          </Radio>
          <Radio name="2">
            <div class="coupon2">
              <p>
                <span>￥</span>5
              </p>
              <div class="coupon-rule">
                <p>
                  使用期限：
                  <span>2016.10.16</span>~
                  <span>2017.08.12</span>
                </p>
                <span>未使用</span>
              </div>
            </div>
          </Radio>
          <Radio name="2">
            <div class="coupon2">
              <p>
                <span>￥</span>5
              </p>
              <div class="coupon-rule">
                <p>
                  使用期限：
                  <span>2016.10.16</span>~
                  <span>2017.08.12</span>
                </p>
                <span>未使用</span>
              </div>
            </div>
          </Radio>
          <Radio name="2">
            <div class="coupon2">
              <p>
                <span>￥</span>5
              </p>
              <div class="coupon-rule">
                <p>
                  使用期限：
                  <span>2016.10.16</span>~
                  <span>2017.08.12</span>
                </p>
                <span>未使用</span>
              </div>
            </div>
          </Radio>-->
        </RadioGroup>
      </div>
    </div>
    <div class="coupon-btn">
      <RadioGroup v-model="checked" @change="useNot">
        <Radio name="1">不使用</Radio>
      </RadioGroup>
      <!--<Button round size="small" @click.native="$router.push('/index')" class="coupon-confirm">返回首页</Button>-->
      <Button round size="small" v-if="show" @click="confirm" class="coupon-confirm">确定</Button>
    </div>
  </div>
</template>
<style>
.coupon-box {
  padding-top: 40px;
  width: 100%;
}
.coupon1 {
  background: url("./../../assets/imgs/coupon.png") left top no-repeat;
  background-size: 100% 100%;
  width: 310px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}
.coupon-confirm {
  width: 50% !important;
  margin: 0 auto;
}
.coupon-confirm:first-child {
  background: #3d3d3d;
}
.coupon1 > p {
  margin-right: 100px;
  margin-bottom: 35px;
  font-size: 40px;
  color: #fff;
}
.coupon1 > p span {
  font-size: 25px;
}
.coupon1 .coupon-wrapper {
  position: relative;
  top: -16px;
  right: 20px;
}
.coupon1 .coupon-wrapper p {
  font-size: 30px;
  color: #fff;
  padding-bottom: 10px;
}
.coupon1 .coupon-wrapper p:last-child {
  font-size: 18px;
}
.coupon2 > p {
  margin-right: 100px;
  margin-bottom: 35px;
  font-size: 40px;
  color: #fff;
}
.coupon2 > p span {
  font-size: 25px;
}
.coupon2 {
  background: url("./../../assets/imgs/coupon1.png") left top no-repeat;
  background-size: 100% 100%;
  width: 310px;
  height: 130px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}
.coupon-content {
  padding: 10px;
}
.coupon-content .van-radio {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.coupon-rule {
  width: 100%;
  font-size: 12px;
  color: #666;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.coupon-btn {
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.coupon-confirm {
  background-color: #008e98;
  color: #fff;
  width: 80px;
}
@media screen and (min-width: 700px) {
  .coupon1 {
    width: 540px;
    height: 210px;
  }
  .coupon2 {
    width: 540px;
    height: 210px;
  }
  .coupon2 > p {
    margin-right: 165px;
    margin-bottom: 40px;
    font-size: 65px;
  }
  .coupon1 > p {
    margin-right: 165px;
    margin-bottom: 40px;
    font-size: 65px;
  }
  .coupon-rule {
    height: 60px;
  }
  .coupon-rule p,
  span {
    font-size: 16px;
  }
}
</style>
<script>
import { Header } from "mint-ui";
import { RadioGroup, Radio, Button } from "vant";
import "vant/lib/radio-group/style";
import "vant/lib/radio/style";
import "vant/lib/button/style";
export default {
  components: {
    Header,
    RadioGroup,
    Radio,
    Button
  },
  data() {
    return {
      index: "",
      couponNum: [],
      _price: "",
      difference: "",
      minPrice: "",
      _ids: "",
      show: true,
      checked: "2"
    };
  },
  created() {
    this._counp();

    console.log(this.index);
  },
  computed: {},
  mounted() {
    
  },
  methods: {
    _counp() {
      const params = {
        id: this.$ls.get("userid")
      };
      this.$post(this.$api.coupon + "/" + params.id).then(res => {
        console.log(res);
        this.couponNum = res.data;
        console.log(this.index)
        if(!this.index) {
          this.radios();
        }
        
      });
    },
    radios(event) {
      if (event) {
        this.index = event;
      } else {
        this.index = parseInt(this.$route.query._ids);
      }
      this._price = this.$route.query.price;
      this.minPrice = this.couponNum[this.index].min_amount;
      this.difference = this.couponNum[this.index].type_money;

      if (this._price > this.minPrice) {
        console.log("可以使用");
        this.show = true;
      } else {
        console.log("不可以使用");
        this.show = false;
      }
    },
    useNot(e) {
      console.log(e == '1')
      if(e == '1') {
        this.index = []
      }
    },
    confirm() {
      let resultPrice = this._price - this.difference;
      console.log(resultPrice);
      if(this.index) {
        resultPrice = null
      }
      this.$router.push({
        name: "pay",
        query: {
          resultPrice: resultPrice,
          price: this.$route.query.price,
          id: this.$ls.get("userid")
        }
      });
    }
  }
};
</script>
