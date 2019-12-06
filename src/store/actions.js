import { ADDRESS_LIST,ADDRESS_INFO,EDIT_ADDRESS_INFO,DELELETE_ADDRESS,SAVE_CHANGE_DETAIL} from "./types"

export default {
  // 收货人列表
  addressList({ commit }, data) {
    commit(ADDRESS_LIST, data);
  },
  // 收货人信息
  addressInfo({ commit }, addressInfo) {
    commit(ADDRESS_INFO, addressInfo);
  },
  // 编辑收货人信息
  editAddressInfo({ commit }, item) {
    commit(EDIT_ADDRESS_INFO, item);
  },
  // 删除联系人地址
  deleteAddress({ commit }, editIdex) {
    commit(DELELETE_ADDRESS, editIdex);
  },
  //修改联系人地址
  saveChangeDetail({ commit }, item) {
    commit(SAVE_CHANGE_DETAIL, item);
  }
};