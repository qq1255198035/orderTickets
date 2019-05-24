import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import router from './router'
import store from './store'
import axios from 'axios';
import qs from 'qs';
import {getHref} from '@common/js/com.js'
import { ajaxGet, ajaxPost } from "@/utils/axios";
import api from "@/api/index";
import VueStorage from "vue-ls";
import config from "@/config/settings";
Vue.use(VueStorage, config.storageOptions);
import 'mint-ui/lib/style.css'
import './assets/css/common.css'
import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.prototype.$get = ajaxGet;
Vue.prototype.$post = ajaxPost;
Vue.prototype.$api = api
router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    const token = Vue.ls.get("token")
    if (token) {
      next()
    }else{
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
});
//axios 配置
//axios.defaults.timeout = 5000;
axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
//国际化开始
import VueI18n from 'vue-i18n'
//import messages from './assets/lang/index'
Vue.use(VueI18n)
const i18n = new VueI18n({
  //定义默认语言
  locale: 'zh-HK',
  messages: {
    'zh-HK': require('./assets/lang/zh-HK')
  },
  silentTranslationWarn: true,

})
//标签内数据 使用:title="this.$t('message.sponsorCube')" 实现国际化      {{ $t("message.hello") }}
//locale.i18n((key, value) => i18n.t(key, value)) //方便element使用，其内部封装也是采用的i18n
/*vue上挂在vant i18n方法*/
import { Locals } from './assets/lang/vantLocal'
Vue.prototype.$Local = Locals
//国际化结束
Vue.config.productionTip = false
Vue.use(MintUI)
new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
  created() {
    this._get()
  },
  methods: {
    _get() {
      console.log(window.location.href)
    }
    
  }
}).$mount('#app')
