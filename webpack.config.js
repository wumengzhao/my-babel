const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    bundle1: './src/index1.js',
    bundle2: './src/index2.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'), // 输出的路径
    filename: '[name].js' // 打包后文件
  },
  module: {
    rules: [
      {
        //处理es6,es7,es8
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    //插件
    new HtmlWebpackPlugin({
      title: 'my-babel',
      // 从给出的模版自动生成新的html
      template: './public/index.html',
      filename: 'index.html'
    }),
    // 打包前清理打包目录（dist）
    new CleanWebpackPlugin(),
  ],
  devServer: {
    // 告诉服务器内容的来源
    contentBase: path.join(__dirname, 'dist'),
    // 为每个静态文件开启gzip压缩
    compress: true,
    // 打包好了自动打开浏览器
    open: true,
    // 开启热更新
    hot: true,
    port: 9000,
    // 设置代理
    proxy: {
      // 将本地 /api/xxx 代理到 localhost:7001/xxx
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    },
  },
};