import axios from "../http"

const detailData = {
    // 商品详细页数据请求
    data(goodsId){
        return axios.get(`http://api01.6bqb.com/pdd/detail?apikey=C3B20706341F6390F227115655C32AFE&itemid=${goodsId}`)
    }
}

export default detailData