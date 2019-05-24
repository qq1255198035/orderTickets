import Vue from 'vue'
import VueRouter from 'vue-router'
import { pays } from '@common/js/com.js'
Vue.use(VueRouter)

import index from "./../pages/index/index";
import category from "./../pages/category/category";
import myhome from "./../pages/myhome/index/myhome";
import order from "./../pages/myhome/children/order";
import personalData from "./../pages/myhome/children/personalData";
import userImg from "./../pages/myhome/children/userImg";
import changeName from "./../pages/myhome/children/changeName";
import changeNumber from "./../pages/myhome/children/changeNumber";
import changeSex from "./../pages/myhome/children/changeSex";
import login from "./../pages/login/login";
import register from "./../pages/register/register";
import resetPword from "./../pages/resetPword/resetPword";
import details1 from "./../pages/details/details1";
import details2 from "./../pages/details/details2";
import buy from "./../pages/buy/buy"
import pay from "./../pages/pay/pay"
import coupon from "./../pages/coupon/coupon"
import mycoupon from "./../pages/coupon/mycoupon"
import orderDetails from "./../pages/orderDetails/orderDetails";
import payresult from "./../pages/payresult/payresult"
import paypals from "./../pages/paypals/paypals"
import payRequst from "./../pages/payPal/payPal"
import apis from "./../pages/api/api"
import { resolve } from 'q';

export default new VueRouter({
  //name 路由名称 判断Tab栏active  $route.name == ?
  mode: "history",
  routes: [
    {
      path: "",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "index",
      component: index,
      meta: {
        keepAlive: true,
        login: false
      }
    },
    {
      path: "/category",
      name: "category",
      component: category,
      meta: {
        keepAlive: true,
        login: true
      }
    },
    {
      path: "/myhome",
      name: "myhome",
      component: myhome,
      meta: {
        keepAlive: true,
        login: true
      }
    },
    {
      path: "/order",
      name: "order",
      component: order,
      meta: {
        keepAlive: false,
        login: true
      }
    },
    {
      path: "/personalData",
      name: "personalData",
      component: personalData,
      meta: {
        keepAlive: false,
        login: true
      }
    },
    {
      path: "/userImg",
      name: "userImg",
      component: userImg,
      meta: {
        keepAlive: false,
        login: true
      }
    },
    {
      path: "/changeName",
      name: "changeName",
      component: changeName,
      meta: {
        keepAlive: false,
        login: true
      }
    },
    {
      path: "/changeNumber",
      name: "changeNumber",
      component: changeNumber,
      meta: {
        keepAlive: false,
        login: true
      }
    },
    {
      path: "/changeSex",
      name: "changeSex",
      component: changeSex,
      meta: {
        keepAlive: false,
        login: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: login,
      meta: {
        keepAlive: false,
      }
    },
    {
      path: "/register",
      name: "register",
      component: register,
      meta: {
        keepAlive: false,
      }
    },
    {
      path: "/resetPword",
      name: "resetPword",
      component: resetPword,
      meta: {
        keepAlive: false,
        login: false
      }
    },
    {
      path: "/details1",
      name: "details1",
      component: details1,
      meta: {
        keepAlive: false,
        login: false
      }
    },
    {
      path: "/details2",
      name: "details2",
      component: details2,
      meta: {
        keepAlive: false,
        login: false
      }
    },
    {
      path: "/buy",
      name: "buy",
      component: buy,
      meta: {
        keepAlive: false,
        login: false
      }
    },
    {
      path: "/pay",
      name: 'pay',
      component: pay,
      meta: {
        keepAlive: false,
        login: true
      }
    },
    {
      path: "/coupon",
      name: "coupon",
      component: coupon,
      meta: {
        keepAlive: false,
        login: true
      }
    },
    {
      path: "/orderDetails",
      name: "orderDetails",
      component: orderDetails,
      meta: {
        keepAlive: false,
        login: true
      }
    },
    {
      path: "/payresult",
      name: "payresult",
      component: payresult,
      meta: {
        keepAlive: false,
        login: true
      }
    },
    {
      path: "/mycoupon",
      name: "mycoupon",
      component: mycoupon,
      meta: {
        keepAlive: false,
        login: true
      }
    },
    {
      path: "/paypals",
      name: "paypals",
      component: paypals,
      /**children: [
        {
          path: '/api/payPal',
          component: payRequst
        }
      ]**/
    },
    {
      path: "/payPal",
      name: "payPal",
      component: payRequst
    }
  ]
});
