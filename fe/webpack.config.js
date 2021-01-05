const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname + '/build'),
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
  ],
};
