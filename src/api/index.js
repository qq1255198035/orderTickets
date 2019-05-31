//const baseUrl = 'https://rdjx-tech.cn:8443/api/'
const baseUrl = 'http://192.168.0.122:8080/platform/api/'
const baseUrl1 = 'http://192.168.0.122:8080/platform/'
const api = {
  login: baseUrl + "auth/login",
  register: baseUrl + "auth/register",
  // 验证码发送检验
  setCode: baseUrl + "auth/sendCode",
  // 检查email是否注册
  emailCheck: baseUrl + "auth/validateEmail",
  // 首页活动海报
  index: baseUrl + "index/showIndex",
  // 活动详情
  activityDetail: baseUrl + "index/showSecond",
  goods: baseUrl + "cart/index",
  // 明星列表
  showStar: baseUrl + "index/showStar",
  // 优惠券
  //coupon: baseUrl + "coupon/listByTopic",
  coupon: baseUrl + "coupon/listByUser",
  // 票
  ticket: baseUrl + "goods/index",
  // 全部清单
  orderList: baseUrl + "order/list",
  // 
  stock: baseUrl + "cart/goodscount",
  //
  buy: baseUrl + "buy/add",
  //直接购买
  payPal: baseUrl + "paypal/toPay",
  //添加购物车
  cartAdd: baseUrl + "cart/add",
  //购物车
  category: baseUrl + "cart/getCart",
  //删除购物车
  detelCart: baseUrl + "cart/delete",
  // 编辑数量
  delteNum: baseUrl + "cart/update",
  // 个人中心
  persona: baseUrl + "user/listUserInfo",
  //全部订单
  allOrders: baseUrl + "order/list",
  //订单详情
  ordersDetails: baseUrl + "order/detail",
  //取消订单
  changeOrder: baseUrl + "order/cancelOrder",
  //
  hrefGet: baseUrl + "paypal/payBack",
  //找回密码
  getPassword: baseUrl + "auth/findPassword",
  //券码二维码
  couponList: baseUrl + "order/getVcode",
  //修改个人信息
  modifyInfo: baseUrl + "user/updateUserInfo",
  //头像图片base64
  avatarImg: baseUrl + "user/upload"
};
export default api