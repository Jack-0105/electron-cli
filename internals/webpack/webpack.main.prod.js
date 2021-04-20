const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

console.error(path.join(process.cwd(), "app/src/server/views"));
console.error(path.join(process.cwd(), "app/build"));

module.exports = require("./webpack.base")({
  mode: "production",
  devtool: "eval-source-map",
  entry: path.join(process.cwd(), "app/src/main.ts"),
  output: {
    path: path.join(process.cwd(), "app/build"),
    libraryTarget: "commonjs2",
  },
  target: "electron-main",
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
      DEBUG_PROD: false,
      START_MINIMIZED: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(process.cwd(), "app/src/server/views"),
          to: path.join(process.cwd(), "app/build/views"),
        },
      ],
    }),
  ],
  resolve: {
    modules: ["app", "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    mainFields: ["browser", "jsnext:main", "main"],
  },
});
