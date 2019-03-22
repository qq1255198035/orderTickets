import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import index from "./../pages/index/index";
import category from "./../pages/category/category";
import myhome from "./../pages/myhome/myhome";
import order from "./../pages/myhome/children/order";
import personalData from "./../pages/myhome/children/personalData";
import userImg from "./../pages/myhome/children/userImg";
import changeName from "./../pages/myhome/children/changeName";
import changeNumber from "./../pages/myhome/children/changeNumber";
export default new VueRouter({
      //name 路由名称 判断Tab栏active  $route.name == ?
      routes:[
            {
                  path: '',
                  redirect: '/index'
            },
            {
                  path: '/index',
                  name:'index',
                  component: index,
                  meta: {
                        keepAlive: true
                  },
            },
            {
                  path: '/category',
                  name: 'category',
                  component: category,
                  meta: {
                        keepAlive: true
                  },    
            },
            {
                  path: '/myhome',
                  name: 'myhome',
                  component: myhome,
                  meta: {
                        keepAlive: true
                  },
            },
            {
                  path: '/order',
                  name: 'order',
                  component: order,
                  meta: {
                        keepAlive: false
                  }
            },
            {
                  path: '/personalData',
                  name: 'personalData',
                  component: personalData,
                  meta: {
                        keepAlive: false
                  }
            },
            {
                  path: '/userImg',
                  name: 'userImg',
                  component: userImg,
                  meta: {
                        keepAlive: false
                  }
            },
            {
                  path: '/changeName',
                  name: 'changeName',
                  component: changeName,
                  meta: {
                        keepAlive: false
                  }
            },
            {
                  path: '/changeNumber',
                  name: 'changeNumber',
                  component: changeNumber,
                  meta: {
                        keepAlive: false
                  }
            }
      ]
})
