<template>
  <div id="app">
      <transition name="router-fade">
          <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
      </transition>
      <transition name="router-fade">
          <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
     
  }
}
</script>

<style>
  /* .router-fade-enter-active, .router-fade-leave-active {
	transition: opacity .1s;
	}
	.router-fade-enter, .router-fade-leave-active {
	opacity: 0;
  } */
  .router-fade-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .router-fade-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .router-fade-enter-active,.router-fade-leave-active{
    transition: all 0.5s ease;
  }
  #app{
    width:100%;
    height:100%;
  }
</style>
