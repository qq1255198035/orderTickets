<template>
  <div>
    <div class="coupon3" v-for="item in data" :key="item.index">
      <p>
        <span>￥</span>{{item.type_money}}
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
.names{
    position: relative;
    right: 10px;
    top: -24px;
    color: #fff
  }
.coupon3 > p {
  margin-right: 100px;
  margin-bottom: 25px;
  font-size: 30px;
  color: #fff;
}
.coupon3 > p span {
  font-size: 25px;
}
.coupon3 {
  background: url("./../assets/imgs/coupon2.png") left top no-repeat;
  background-size: 100% 100%;
  width: 310px;
  height: 130px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}
@media screen and (min-width: 700px) {
  .coupon3 {
    width: 540px;
    height: 210px;
  }
  .coupon3 > p {
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
