<template>
    <div class="coupon1">
        <p><span>￥</span>30</p>
        <div class="coupon-rule">
            <p>
                使用期限：<span>2016.10.16</span>~<span>2017.08.12</span>
            </p>
            <span>未使用</span>
        </div>
    </div>
</template>
<style scoped>
.coupon1{
      background: url("./../assets/imgs/coupon.png") left top no-repeat;
      background-size: 100% 100%;
      width: 310px;
      height: 130px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
}
.coupon1 > p{
      margin-right: 100px;
      margin-bottom: 25px;
      font-size: 40px;
      color: #fff;
}
.coupon1 > p span{
     font-size: 25px;
} 
.coupon-rule{
      width: 100%;
      font-size: 12px;
      color: #666;
      padding: 5px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
}
@media screen and (min-width: 700px){
      .coupon1{
            width: 540px;
            height: 210px;
      }
    
      .coupon1 > p{
            margin-right: 165px;
            margin-bottom: 30px;
            font-size: 65px
      }
      .coupon-rule{
            height: 60px
      }
      .coupon-rule p,span{
            font-size: 16px;
      }
}
</style>
<script>
export default {
    
}
</script>
