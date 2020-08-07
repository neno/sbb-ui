const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const presetConfig = require('./build-utils/loadPresets');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = env =>
  merge(common(env), presetConfig(env), {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.scss|css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            'css-loader',
            {
              loader: `postcss-loader`,
              options: {
                options: {},
                plugins: [require('autoprefixer')]
              }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/page-index/tmpl.html',
        inject: 'body',
        chunks: ['index'],
        filename: 'index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      }),
      new MiniCssExtractPlugin({
        path: path.resolve(__dirname, './dist'),
        filename: path.join('./styles', '[name].[chunkhash].css')
      }),
      new CleanWebpackPlugin(),
      new CompressionWebpackPlugin({
        cache: false
      })
    ],
    optimization: {
      minimizer: [
        new TerserJSPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: {
              inline: false,
              annotation: true
            },
            safe: true,
            discardComments: true
          }
        })
      ]
    }
  });
