const webpack = require('webpack');
const HtmlWeppackPlugin = require('html-webpack-plugin');
module.exports = {
  entry : __dirname + "/app/main.js",
  output : {
    path : __dirname + "/public",
    filename : "[name].[hash:4].js",
  },
  devtool : "eval-source-map",

  devServer : {
    contentBase : "./public",
    historyApiFallback : true,
    inline : true,
    hot : true,
  },
  module : {
    rules : [
      {
        test : /(\.jsx|\.js)$/,
        use : {
          loader : "babel-loader",
        },
        exclude : /node_modules/
      },
      {
        test : /\.css$/,
        use : [
          {
            loader : "style-loader",
          },
          {
            loader : "css-loader",
            options : {
              modules : true,
              localIdentName : '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader : "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins : [
    new webpack.BannerPlugin('版权所有, 翻版必究'),
    new HtmlWeppackPlugin({
      template : __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};