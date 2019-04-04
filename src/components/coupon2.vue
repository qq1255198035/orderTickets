<template>
    <div class="coupon2">
                                          <p><span>￥</span>5</p>
                                          <div class="coupon-rule">
                                                <p>
                                                      使用期限：<span>2016.10.16</span>~<span>2017.08.12</span>
                                                </p>
                                                <span>未使用</span>
                                          </div>
                                    </div>
</template>
<style scoped>
.coupon2 > p{
      margin-right: 100px;
      margin-bottom: 25px;
      font-size: 40px;
      color: #fff;
}
.coupon2 > p span{
     font-size: 25px;
} 
.coupon2{
      background: url("./../assets/imgs/coupon1.png") left top no-repeat;
      background-size: 100% 100%;
      width: 310px;
      height: 130px;
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
}
@media screen and (min-width: 700px){
     
      .coupon2{
            width: 540px;
            height: 210px;
      }
      .coupon2 > p{
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
