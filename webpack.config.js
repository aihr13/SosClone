const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: [/node_modules/],
        loader: ["ts-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    modules: [__dirname, path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    host: "localhost",
    port: 8080,
    historyApiFallback: true,
    contentBase: __dirname,
    inline: true
  },
  devtool: "source-map"
};
