const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer:{
        disableHostCheck :true,
    },
    //baseUrl:"./",
    publicPath: "./",
    chainWebpack: config => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('@api', resolve('src/api'))
            .set('@assets', resolve('src/assets'))
            .set('@comp', resolve('src/components'))
            .set('@common', resolve('src/common'))
            .set('@pages', resolve('src/pages'))
            .set('@static', resolve('src/static'))
        config.plugin('context')
            .use(webpack.ContextReplacementPlugin,
              [/moment[/\\]locale$/, /zh-cn/])
    }
     
}