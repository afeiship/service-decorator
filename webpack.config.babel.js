import webpack from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './test/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ['babel-loader'],
        include: [resolve(__dirname, 'test'), resolve(__dirname, './index')]
      }
    ]
  },
  resolve: {
    alias: {
      services: resolve(__dirname, 'test/services')
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      service: resolve(__dirname, './index.js')
    })
  ]
};
