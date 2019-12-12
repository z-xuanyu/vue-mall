import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 路由懒加载
const error = () => import("../views/404/404.vue")
const Home = () => import("../views/Home/Home.vue")  //首页
const News = () => import("../views/News/News.vue")  //信息页面
const Category = () => import("../views/Category/Category.vue")  //分类页面
const Find = () => import("../views/Find/Find.vue")
const Search = () => import("../views/Search/Search.vue")  //搜索页面
const Cart = () => import("../views/Cart/Cart.vue")    //购物车
const SubmitOrder = () => import("../views/Cart/base/SubmitOrder.vue") //购物车提交订单
const OrderPay = () => import("../views/Cart/base/OrderPay.vue")  //支付订单
const PaySuccess = () => import("../views/Cart/base/PaySuccess.vue") //支付成功
const User = () => import("../views/User/User.vue")    //用户页面
const Login = () => import("../views/Login/Login.vue") //登录页面
const Set = () => import("../views/Set/Set.vue")  //设置页面
const Order = () => import("../views/Order/Order.vue")  //订单中心
const Logistics =()=> import("../views/Order/base/Logistics.vue") //订单 物流跟踪 
const Detail = () => import("../views/Detail/Detail.vue")  //商品详细页
const Address = () => import("../views/Address/Address.vue")  //收货地址
const AddressAdd = () => import("../views/Address/AddressAdd.vue") // 添加地址
const AddressEdit = () => import("../views/Address/AddressEdit.vue") //编辑地址
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/news",
    name: "news",
    component: News
  },
  {
    path: "/category",
    name: "category",
    component: Category
  },
  {
    path: "/find",
    name: "find",
    component: Find,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem("isLogin")
      isLogin ? next() : next("/login")
    }
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/cart/submit-order",
    name: "submit-order",
    component: SubmitOrder
  },
  {
    path: "/order-pay",
    name: "order-pay",
    component: OrderPay
  },
  {
    path: "/pay-success",
    name: "pay-success",
    component: PaySuccess
  },
  {
    path: "/user",
    name: "user",
    component: User,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem("isLogin")
      isLogin ? next() : next("/login")
    }
  },
  {
    path: "/set",
    name: "set",
    component: Set,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem("isLogin")
      isLogin ? next() : next("/login")
    }
  },
  {
    path: "/order",
    name: "order",
    component: Order,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem("isLogin")
      isLogin ? next() : next("/login")
    }
  },
  {
    path:"/order/logistics",
    name:"logistics",
    component:Logistics,
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail
  },
  {
    path: "/address",
    name: "address",
    component: Address,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem("isLogin")
      isLogin ? next() : next("/login")
    }
  },
  {
    path: "/address-add",
    name: "addres-add",
    component: AddressAdd,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem("isLogin")
      isLogin ? next() : next("/login")
    }
  },
  {
    path: "/address-edit",
    name: "address-edit",
    component: AddressEdit,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem("isLogin")
      isLogin ? next() : next("/login")
    }
  },
  {
    path: "/404",
    name: "404",
    component: error
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };

  }
});

export default router
