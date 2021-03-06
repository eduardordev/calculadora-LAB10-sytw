const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),

  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
});