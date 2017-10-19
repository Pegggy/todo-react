const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  /**
   * 入口文件
   */
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname,'src/index.js'),
  ],
  /**
   * 输出到 dist 文件夹，输出名字为 bundle.js
   */
  output: {
    path: path.join(__dirname,'./dist'),
    filename: '[name][hash].js',
    chunkFilename: '[name][chunkhash].js',
    hashDigestLength: 6
  },
  /**
   * src 文件夹下以 .js 结尾的文件，要使用 babel 解析
   * cacheDirectory 是用来缓存编译结果，下次编译加速
   */
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname,'src')
    },
    {
      test: /\.(png|jpg|gif)$/,
      use:[{
        loader: 'url-loader',
        options:{
          limit: 8192
        }
      }]
    }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname,'src/index.html')
  })
  ],
  devServer:{
    contentBase: path.join(__dirname,'./dist'),
    /* historyApiFallback，让所有的404定位到index.html*/
    historyApiFallback: true,
    /* host 指定一个host,默认是localhost。如果你希望服务器外部可以访问，指定如下：host: "0.0.0.0"*/
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      component: path.join(__dirname,'src/component'),
      router: path.join(__dirname,'src/router'),
      actions: path.join(__dirname,'src/redux/actions')
    }
  }
}
