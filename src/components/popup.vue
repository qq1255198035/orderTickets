<template>
      <div class="my-popup">
            <Popup v-model="show" :closeOnClickModal="false">
                  <div class="popup-box">
                        <img :src="imgURL1" alt="" class="txm">
                        <p>{{name}}</p>
                        <img :src="imgURL2" alt="" class="ewm">
                  </div>
            </Popup>
      </div>
</template>
<style>
.my-popup{
      width: 100%;
      height: 100%;
}
</style>
<script>
import { Popup } from 'mint-ui';

export default {
      components:{
            Popup
      },
      data(){
            return{
                  show:true
            }
      },
      props:["imgURL1","imgURL2","name"]
}
</script>
