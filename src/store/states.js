const state = {
  //商品优惠卷列表显隐
  isShowCoupon: false,
  // 收货人地址列表
  addressList: [],
  // 编辑收货人信息
  editAddressInfo: {},
  // 购物车
  cartInfo: {
    allChecked: true, //订单全选
    list: [],
  },
};
export default state;
