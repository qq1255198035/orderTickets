<template>
  <div id="app">
      <transition name="router-fade" mode="out-in">
          <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
      </transition>
      <transition name="router-fade" mode="out-in">
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
  .router-fade-enter-active, .router-fade-leave-active {
	transition: opacity .1s;
	}
	.router-fade-enter, .router-fade-leave-active {
	opacity: 0;
  }
  #app{
    width:100%;
    height:100%;
  }
</style>
