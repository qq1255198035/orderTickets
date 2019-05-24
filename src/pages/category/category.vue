<template>
  <div class="container">
    <Header title="购物车" class="header">
      <div slot="right" @click="EditIsShow = !EditIsShow" class="edit">
        <span v-show="EditIsShow && goods.length > 0">编辑</span>
        <span v-show="!EditIsShow">完成</span>
      </div>
    </Header>
    <div
      class="goodsList"
      v-if="goods.length > 0"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div class="wrapper wrapper-box">
        <div class="content">
          <Checkbox-group v-model="checkedGoods" @change="selectGoods">
            <Checkbox
              v-show="item.number > 0"
              v-for="(item, index) in goods"
              :key="index"
              :name="index"
              checked-color="#008e98"
              class="checkbox"
            >
              <Card
                :num="item.number"
                :price="item.retail_price | fomatMoney"
                :desc="item.desc"
                :title="item.goods_name"
                :thumb="item.list_pic_url"
                class="cardItem"
                :tag="item.tag"
              ></Card>
              <transition name="fade" mode="out-in">
                <div class="stepper" @click.stop v-show="EditIsShow">
                  <Stepper
                    v-model="item.number"
                    integer
                    :min="1"
                    :max="40"
                    :step="1"
                    disable-input
                    @change="changeGoodsNum(item)"
                  ></Stepper>
                </div>
              </transition>
            </Checkbox>
          </Checkbox-group>
        </div>
      </div>
      <div class="submit-box">
        <div class="submit">
          <Checkbox
            v-model="checkIsTrue"
            checked-color="#008e98"
            class="submit-left"
            @click="checkedAll"
          >全选</Checkbox>
          <div class="submit-right">
            <span>
              合计
              <i>￥{{ money }}</i>
            </span>
            <Button
              round
              size="small"
              class="submitButton"
              v-show="EditIsShow"
              :disabled="!checkedGoods.length"
              @click="Settlement"
            >
              结算(
              <span>{{checkedGoods.length}}</span>)
            </Button>
            <Button
              round
              size="small"
              class="submitButton"
              v-show="!EditIsShow"
              @click="showMessageBox"
              :disabled="!checkedGoods.length"
            >
              删除(
              <span>{{checkedGoods.length}}</span>)
            </Button>
          </div>
        </div>
      </div>
      <div class="list-bottom">
        <Loading type="spinner" v-if="this.goods.length < 0"/>
        <p v-else>暂无更多数据</p>
      </div>
    </div>

    <div class="goodsEmpty" v-else>
      <img src="./../../assets/imgs/catagory.png" alt>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<style>
.edit {
  cursor: pointer;
}
.list-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
.list-bottom p {
  color: #ccc;
}
.goodsList {
  padding: 40px 0 140px;
  background-color: #fff;
  max-height: 100%;
  overflow-y: auto;
}

.cardItem {
  width: 100%;
  background-color: #fff;
}
.checkbox {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
  position: relative;
}
.checkbox > span {
  width: 90%;
}
.submit-box {
  width: 100%;
  position: fixed;
  bottom: 56px;
  left: 0;
}
.submit {
  max-width: 750px;
  min-width: 320px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  background-color: #fff;
  padding: 10px 20px;
  border-top: 1px solid #ccc;
}
.submit-left {
  width: 50%;
}
.submit-right {
  width: 50%;
  display: flex;
  justify-content: space-around;
}
.submit-right span {
  line-height: 30px;
}
.submit-right span i {
  font-style: normal;
  color: #ed5b5b;
}
.submitButton {
  background-color: #008e98;
  color: #fff;
}
.stepper {
  position: absolute;
  bottom: 10px;
  right: 24px;
}
.van-stepper {
  display: flex;
}
.stepper button,
input {
  color: #000 !important;
  border: 1px solid #ccc;
  background-color: #fff !important;
  margin: 2px 0 !important;
}
.stepper input {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  height: 24px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.mint-msgbox .confirmButton {
  background-color: #008e98;
  color: #fff;
}
.goodsEmpty {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.goodsEmpty img {
  width: 40%;
  display: block;
}
.cardItem .van-card__thumb {
  /**width: 30%;
  height: 100%;**/
}

.cardItem .van-card__header {
  align-items: center;
}
.cardItem .van-card__content {
  justify-content: flex-start;
}
@media screen and (min-width: 700px) {
  .cardItem .van-card__content {
    height: 110px;
    justify-content: space-around;
  }
  .cardItem .van-card__title {
    font-size: 24px;
    line-height: 24px;
  }
  .cardItem .van-card__desc {
    font-size: 20px;
  }
  .cardItem .van-card__price {
    font-size: 16px;
  }
  .cardItem .van-card__num {
    font-size: 14px;
  }
  .cardItem {
    margin-left: 30px;
  }
  .submit-right .submitButton {
    font-size: 16px;
    padding: 0 10px;
  }
  .stepper {
    right: 32px;
  }
}
.mint-msgbox {
  max-width: 320px;
}
</style>
<script>
import imgUrl from "./../../assets/imgs/goodsImg.png";
import { Header, MessageBox, InfiniteScroll } from "mint-ui";
import tabbar from "./../../components/tabBar";
import { Card, Checkbox, CheckboxGroup, Button, Stepper, Loading } from "vant";
import "vant/lib/card/style";
import "vant/lib/checkbox/style";
import "vant/lib/checkbox-group/style";
import "vant/lib/button/style";
import "vant/lib/stepper/style";
import "vant/lib/loading/style";
export default {
  components: {
    Header,
    MessageBox,
    tabbar,
    Card,
    Checkbox,
    Button,
    CheckboxGroup,
    Stepper,
    Loading
  },
  data() {
    return {
      checkedGoods: [],
      allGood: [],
      allChecked: false,
      EditIsShow: true,
      showCance: false,
      loading: false,
      goods: [],
      _id: "",
      checkArr: [],
      totalPrice: 0, //单价
      money: 0, //合计
      num: 0 // 个数
    };
  },
  created() {},
  methods: {
    // 跳转传值
    Settlement() {
      console.log(this.allGood)
      this.$router.push({
        path: '/pay',
        query: {
          allArry: this.allGood,
          price: this.money
        }
      })
    },
    // 删除
    showMessageBox() {
      MessageBox({
        title: "",
        message: "确认要删除这" + this.checkedGoods.length + "种商品吗?",
        showCancelButton: true,
        confirmButtonClass: "confirmButton"
      }).then(action => {
        if (action == "confirm") {
          console.log("确定删除");
          console.log(this._id.split(","));
          this.$post(this.$api.detelCart, {
            id: this._id
          }).then(res => {
            console.log(res);
            if (res.data.code == 1) {
              this.checkedGoods = [];
              this.getCateList();
            }
          });
        } else {
          console.log("取消删除");
        }
      });
    },
    //加载更多
    loadMore() {
      const params = {
        userid: this.$ls.get("userid")
      };
      setTimeout(() => {
        if (this.goods.length <= 12) {
          this.$post(this.$api.category, {
            userid: params.userid
          }).then(res => {
            if (res.status == 0) {
              console.log(2);
              this.loading = false;
              this.goods = this.goods.concat(res.data.list);
            }
          });
        }
      }, 1000);
      this.loading = true;
    },
    //获取数据
    getCateList() {
      const params = {
        userid: this.$ls.get("userid")
      };
      this.$post(this.$api.category, {
        userid: params.userid
      }).then(res => {
        console.log(res);
        this.goods = res.cartList;
      });
    },
    //全选按钮
    checkedAll() {},
    // 加减
    changeGoodsNum(item) {
      this.calcPrice();
      console.log(item)
      var goodsId = item.id;
      var goodNem = item.number;
      /** for (var i = 0; i < this.goods.length; i++) {
        if (this.checkedGoods.indexOf(i) > -1) {
          goodsId = this.goods[i].id;
          goodNem = this.goods[i].number
        }
      }**/
      console.log(goodsId)
      this.$post(this.$api.delteNum, {
        id: goodsId,
        number: goodNem
      }).then(res => {
        console.log(res);
      });
    },
    // 计算合计
    calcPrice(e) {
      var price = 0;
      var numb = 0;
      var list = this.goods;
      var listArr = [];
      var _id = "";
      console.log(this.checkedGoods);
      for (var i = 0; i < list.length; i++) {
        if (this.checkedGoods.indexOf(i) > -1) {
          listArr.push({
            goodsId: this.goods[i].id,
            prices: this.goods[i].retail_price,
            nums: this.goods[i].number
          })
          console.log(this.allGood)
          _id += this.goods[i].id + ",";
          price += this.goods[i].number * this.goods[i].retail_price;
          numb += this.goods[i].number;
        }
      }
      this.allGood = listArr
      console.log(this.allGood)
      this._id = _id;
      this.money = price;
      this.$ls.set("price", this.money);
      this.num = numb;
    },
    //删除购物车
    delete() {
      //this.list.splice(index, 1);
    },
    // 单选
    selectGoods(e) {
      console.log(e);
      this.calcPrice();
      /** var unitPrice = 0;
      var _total = 0;
      for (var i = 0; i < this.goods.length; i++) {
        if (e.indexOf(i) > -1) {
          this.num = this.goods[i].number;
          unitPrice = this.goods[i].retail_price;
          _total += this.num * unitPrice;
        }
      }
      this.money = _total;/ **/
    }
  },
  mounted() {
    this.getCateList();
    //this.loading = true;
  },
  computed: {
    // 判断全选按钮
    checkIsTrue: {
      get: function() {
        if (this.checkedGoods.length == this.goods.length) {
          return true;
        } else {
          return false;
        }
        console.log(this.checkedGoods.length, this.goods.length);
      },
      set: function(newValue) {}
    }
  },
  filters: {
    fomatMoney(value) {
      return parseInt(value).toFixed(2);
    }
  }
};
</script>
