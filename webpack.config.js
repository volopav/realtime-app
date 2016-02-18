var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("css/styles.css")
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test   : /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css', 'resolve-url'])
      },
      {
        test: /\.less/,
        loader: ExtractTextPlugin.extract("style-loader", ["css", 'resolve-url', "less"])
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
          'image-webpack?bypassOnDebug'
        ]
      }
    ]
  }
};
