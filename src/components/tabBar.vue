<template>
  <div class="tabbar">
      <Tabbar>
            <tab-item id="首页" @click.native="$router.push('/index')" :class="{'text-actived':$route.name == 'index'}">
                  <img slot="icon" src="./../assets/imgs/tab-01.png" v-show="$route.name !== 'index'">
                  <img slot="icon" src="./../assets/imgs/tab-01-active.png" v-show="$route.name == 'index'">
                  首页
            </tab-item>
            <tab-item id="购物车" @click.native="$router.push('/category')" :class="{'text-actived':$route.name == 'category'}">
                  <img slot="icon" src="./../assets/imgs/tab-02.png" v-show="$route.name !== 'category'">
                  <img slot="icon" src="./../assets/imgs/tab-02-active.png" v-show="$route.name == 'category'">
                  购物车
            </tab-item>
            <tab-item id="我的" @click.native="$router.push('/myhome')" :class="{'text-actived':$route.name == 'myhome'}">
                  <img slot="icon" src="./../assets/imgs/tab-03.png" v-show="$route.name !== 'myhome'">
                  <img slot="icon" src="./../assets/imgs/tab-03-active.png" v-show="$route.name == 'myhome'">
                  我的
            </tab-item>
      </Tabbar>
  </div>
</template>

<script>
import { Tabbar,TabItem }  from 'mint-ui';
export default {
  components: {
      Tabbar,
      TabItem
  },
  mounted(){
        
  }
}
</script>

<style>
.tabbar{
      max-width: 750px;
      min-width: 320px;
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1999;
      margin: 0 auto;
}
</style>
