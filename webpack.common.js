module.exports = env => ({
  entry: {
    index: "./src/js/index.js"
  },
  output: {
    path: __dirname + "/dist/js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpe?g|gif|svg|cur|webp)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              // On development we want to see where the file is coming from, hence we preserve the [path]
              name: "[path][name].[ext]?hash=[hash:20]",
              limit: 8192
            }
          }
        ]
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./assets/fonts/"
            }
          }
        ]
      }
    ]
  }
})
