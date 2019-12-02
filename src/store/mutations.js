import { ADDRESS_LIST } from "./types"
export default {
  // 收货地址列表
  [ADDRESS_LIST](state,data) {
      
      state.addressList = data
  }
};
