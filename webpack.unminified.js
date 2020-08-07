const path = require("path")
const { merge } = require("webpack-merge")
const common = require("./webpack.common")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = env =>
  merge(common(env), {
    mode: "production",
    module: {
      rules: [
        {
          test: /\.scss|css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "../"
              }
            },
            "css-loader",
            {
              loader: `postcss-loader`,
              options: {
                options: {},
                plugins: [require("autoprefixer")]
              }
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        path: path.resolve(__dirname, "./dist"),
        filename: path.join("../styles", "[name].[chunkhash].css")
      }),
      new CleanWebpackPlugin()
    ],
    optimization: {
      minimize: false
    }
  })
