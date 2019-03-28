import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import router from './router'
import 'mint-ui/lib/style.css'
import './assets/css/common.css'
import FastClick from 'fastclick'
FastClick.attach(document.body)

//国际化开始
import VueI18n from 'vue-i18n'
import messages from './assets/lang/index'
Vue.use(VueI18n)
const i18n = new VueI18n({
  //定义默认语言
  locale: 'zhCN',
  messages
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
  render: h => h(App),
}).$mount('#app')
