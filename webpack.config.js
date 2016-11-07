'use strict'

/** -------------------------------
*
*   LIST DEPEDENCIES
*
------------------------------- **/

let webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

/** -------------------------------
*
*   WEBPACK CONFIGURATION
*
------------------------------- **/

module.exports = {
  devtool : 'inline-source-map',
  entry   : [
    'webpack-hot-middleware/client',
    './public/client/client.js'
  ],
  output  : {
    path: require("path").resolve("./public/dist"),
    filename : 'bundle.js',
    publicPath : '/',
    libraryTarget: 'umd'
  },
  plugins:[
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin('style.css',{allChunks: true})
  ],
  module:{
    loaders:[

      /** -------------------------------
      *   BABEL LOADER
      *   Last Updated : 6 November 2016
      ------------------------------- **/
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        query:{
            presets:['react', 'es2015', 'react-hmre']
        }
      },

      /** -------------------------------
      *   CSS LOADER
      *   Last Updated : 6 November 2016
      ------------------------------- **/
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },

      /** -------------------------------
      *   PNG JPG LOADER (Standart Loader)
      *   Last Updated : 6 November 2016
      ------------------------------- **/
      {
        test: /\.(png|jpg|jpeg|gif|woff|eot|ttf|svg)$/,
        loader: 'url-loader?limit=8192'
      },

      /** -------------------------------
      *   WOFF LOADER (For Font Awesome)
      *   Last Updated : 6 November 2016
      ------------------------------- **/
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },

      /** -------------------------------
      *   TTF LOADER AND SVG LOADER
      *   (For Font Awesome)
      *   Last Updated : 6 November 2016
      ------------------------------- **/
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  }
}
