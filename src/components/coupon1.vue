<template>
  <div>
    <div class="coupon1" v-for="item in data" :key="item.index">
      <p>
        <span>￥</span>
        {{item.type_money}}
      </p>
      <div class="names">
        <span>{{$t('m.fullTitle')}}{{item.min_amount}}{{$t('m.usable')}}</span>
      </div>
      <div class="coupon-rule">
        <p>
          {{$t('m.termUse')}}：
          <span>{{item.use_start_date}}</span>~
          <span>{{item.use_end_date}}</span>
        </p>
        <span>{{$t('m.notUsed')}}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.coupon1 {
  background: url("./../assets/imgs/coupon.png") left top no-repeat;
  background-size: 100% 100%;
  width: 310px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}
.names{
    position: relative;
    right: 10px;
    top: -24px;
    color: #fff
  }
.coupon1 > p {
  margin-right: 100px;
  font-size: 30px;
  margin-bottom: 25px;
  color: #fff;
  margin-bottom: 0
}
.coupon1 > p span {
  font-size: 25px;
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
@media screen and (min-width: 700px) {
  .coupon1 {
    width: 540px;
    height: 210px;
  }
  .coupon1 > p {
    margin-right: 165px;
    margin-bottom: 30px;
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
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  }
};
</script>
