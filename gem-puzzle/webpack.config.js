const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  mode: 'development',
  entry: './gem-puzzle/index.js',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, './gem-puzzle/dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.png'],

  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './gem-puzzle/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
      {
        test: /\.ttf$/,
        type: 'asset/inline',
      },
    ],
  },

};
