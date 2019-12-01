import { ADDRESS_LIST} from "./types"

export default {
    // 收货人列表
  addressList({commit},data){
    commit(ADDRESS_LIST,data)
  }
};