module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/public/' : '/',
  outputDir: '../server/app/public',
  productionSourceMap: true,
  devServer: {
    // proxy: {
    // '/localAPI': {
    //   target: 'http://hosting.jdcloud.com:3035',
    //   changeOrigin: true,
    //   logLevel: 'debug'
    // }
    // },
    port: 8080, // 端口号
    // host: 'hosting.jdcloud.com',
    open: true, // 自动打开浏览器
    disableHostCheck: true
  }
}
