const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: Path.resolve('dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    open: true,
    contentBase: 'dist'
  },
  plugins: [new HtmlWebpackPlugin({
    template: "index.html"
  })]
};
