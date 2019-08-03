const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  entry: "./src/index.ts",
  mode: process.env.NODE_ENV || "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public")
  }
};