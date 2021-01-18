const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv-webpack');

const NODE_ENV = process.env.NODE_ENV;

const env = new dotenv({
  path:
    NODE_ENV === 'dev'
      ? path.join(__dirname, './.env.dev')
      : path.join(__dirname, './.env.prod'),
}).definitions;

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../be/public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: 3000,
    overlay: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          configFile: './babel.config.js',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
    }),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
    new webpack.DefinePlugin({
      'process.env.CLIENT_ID': env['process.env.CLIENT_ID'],
      'process.env.CALLBACK_URL': env['process.env.CALLBACK_URL'],
      'process.env.BASE_URL': env['process.env.BASE_URL'],
    }),
  ],
};
