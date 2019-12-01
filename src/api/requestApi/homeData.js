import axios from "../http"

const homeData = {
  // 首页banner
  banner() {
    return axios
      .get(
        "https://www.fastmock.site/mock/e4532ccf10709279714bcb698640920a/mall/home/banner"
      )
  },
  // 首页icon nav
  iconsNav() {
    return axios.get(
      "https://www.fastmock.site/mock/e4532ccf10709279714bcb698640920a/mall/home/icon-nav"
    );
  },
  likeGoods() {
    return axios.get(
      "https://www.fastmock.site/mock/e4532ccf10709279714bcb698640920a/mall/recommend"
    );
  }
}
export default homeData;