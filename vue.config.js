module.exports = {
    // 开发环境与生产环境运行环境配置
    publicPath: process.env.NODE_ENV === 'production'? '/production-sub-path/': '/',

}