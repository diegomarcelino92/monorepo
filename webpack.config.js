const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve('src', 'index.tsx'),
  output: {
    filename: 'main.js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve('public'),
    open: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      inject: true,
      template: path.resolve('public', 'index.html')
    })
  ]
};
