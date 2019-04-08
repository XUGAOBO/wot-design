'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const components = require('../components.json')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: components,
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name]/index.js',
    library: ['JMDesign', '[name]'],
    libraryTarget: 'umd'
  },
  externals: {
    vue: 'vue'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin()
    ],
    splitChunks: {}
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/index.css'
    })
  ]
})
