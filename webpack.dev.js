const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => (merge(common(env), {
  devtool: 'cheap-eval-source-map',
  devServer: {
    port: 8080,
    writeToDisk: false,
    hot: true
  },
  module: {
    rules: [{
      test: /\.scss|css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: `postcss-loader`,
          options: {
            options: {},
            plugins: [
              require('autoprefixer')
            ]
          }
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page-index/tmpl.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    })
  ]
}));
