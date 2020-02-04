"use strict";

const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./app/origin.jsx",
  output: {
    path: path.join(__dirname, "public/dist"),
    filename: "bundle.js"
  },
  node: {
    fs: "empty"
  },
  context: __dirname,
  devtool: "source-map",
  plugins: [new webpack.optimize.AggressiveMergingPlugin()],
  // optimization: {
  //   minimizer: [new UglifyJsPlugin()]
  // },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        }
      },
      {
        test: /\.(scss|sass)$/,
        loader: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
