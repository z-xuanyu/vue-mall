import {
  ADDRESS_LIST,
  ADDRESS_INFO,
  EDIT_ADDRESS_INFO,
  DELELETE_ADDRESS,
  SAVE_CHANGE_DETAIL
} from "./types";
export default {
  // 收货地址列表
  [ADDRESS_LIST](state,data) {
      
      state.addressList = data
  },
  // 收货人信息
  [ADDRESS_INFO](state,addressInfo){
    state.addressList.push(addressInfo)
  },
  // 编辑收货人信息
  [EDIT_ADDRESS_INFO](state,item){
    state.editAddressInfo = item
  },
  // 删除联系人地址
  [DELELETE_ADDRESS](state,editIndex){
    state.addressList.splice(editIndex,1);
  },
  // 修改联系人地址
  [SAVE_CHANGE_DETAIL](state,item){
    const editIndex = localStorage.getItem("editIndex")
    state.addressList.splice(editIndex,1,item);
    console.log(editIndex)
  }
};
