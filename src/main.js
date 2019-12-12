import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import flexible from "lib-flexible";
import api from "./api/index";
import Cookies from "js-cookie";
Vue.prototype.$api = api;
Vue.prototype.$Cookies = Cookies;
Vue.use(flexible);
import {
  AddressEdit,
  AddressList,
  Area,
  Lazyload,
  Toast,
  Dialog,
  Icon,
  Stepper,
  Search,
  Step,
  Steps,
  Row,
  Radio,
  RadioGroup,
  Col,
  Button,
  Field,
  Divider,
  Card,
  Sidebar,
  SidebarItem,
  Sticky,
  NavBar,
  Notify,
  ContactCard,
  ContactList,
  ContactEdit,
  Checkbox,
  CheckboxGroup,
  Panel,
  PasswordInput,
  Progress,
  NumberKeyboard,
  Swipe,
  SwipeItem,
  SwipeCell,
  SwitchCell,
  Sku,
  Cell,
  CellGroup,
  CouponCell,
  CouponList,
  CountDown,
  Popup,
  PullRefresh,
  SubmitBar,
  List,
  Grid,
  GridItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Tab,
  Tabs,
  Tag,
  Image,
  ImagePreview
} from "vant";
Vue.use(Lazyload)
  .use(ContactCard)
  .use(CouponList)
  .use(AddressEdit)
  .use(AddressList)
  .use(Area)
  .use(Panel)
  .use(Popup)
  .use(PasswordInput)
  .use(NumberKeyboard)
  .use(PullRefresh)
  .use(Progress)
  .use(CouponCell)
  .use(Card)
  .use(Cell)
  .use(CellGroup)
  .use(Checkbox)
  .use(CountDown)
  .use(CheckboxGroup)
  .use(Grid)
  .use(GridItem)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Swipe)
  .use(SwipeItem)
  .use(SubmitBar)
  .use(SwipeCell)
  .use(Sku)
  .use(Step)
  .use(Steps)
  .use(SwitchCell)
  .use(ContactList)
  .use(ContactEdit)
  .use(Toast)
  .use(Tab)
  .use(Tabs)
  .use(Tag)
  .use(NavBar)
  .use(Notify)
  .use(Dialog)
  .use(Icon)
  .use(Image)
  .use(ImagePreview)
  .use(Stepper)
  .use(Search)
  .use(Row)
  .use(Radio)
  .use(RadioGroup)
  .use(Col)
  .use(Button)
  .use(Field)
  .use(Divider)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Sticky)
  .use(List);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
