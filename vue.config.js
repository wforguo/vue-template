const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// Vue 打包性能

// 增加环境变量
process.env.VUE_APP_VERSION = require('./package.json').version;
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-M-D HH:mm:ss');

module.exports = {
    productionSourceMap: false, // 去除上产source map
    lintOnSave: true, // 关掉eslint
    chainWebpack: config => {
        // // 移除 prefetch 插件
        config.plugins.delete('prefetch');
        // // 移除 preload 插件
        config.plugins.delete('preload');
    },
    configureWebpack: {
        plugins: [
            new ScriptExtHtmlWebpackPlugin({
                custom: {
                    test: /\.js$/,
                    attribute: 'charset',
                    value: 'utf-8'
                }
            })
            // new HtmlWebpackPlugin({
            //     // filename: path.resolve(__dirname, './index.html'),
            //     template: 'public/index.html',
            //     inject: true
            // }),
            // new WebpackCdnPlugin(cdnLoader(true))
            // new BundleAnalyzerPlugin()
        ]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://forguo.cn',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    outputDir: 'science-week',
    publicPath: process.env.NODE_ENV === 'production'
        ? 'https://cms.forguo.cn/apps-t/science-week'
        // ? 'https://cms.forguo.cn/apps/science-week'
        : '/'
};
