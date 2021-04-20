const getEntry = require("../scripts/getEntry");
const path = require("path");
const { AssetOutputPlugin } = require("../plugins");

module.exports = require("./webpack.base")({
  devtool: "inline-source-map",
  mode: "development",
  target: "electron-renderer",
  entry: getEntry(),
  output: {
    path: path.join(process.cwd(), "app/build/statics"),
    filename: "[name].js",
    publicPath: "/statics",
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [new AssetOutputPlugin()],
  resolve: {
    modules: ["client", "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".react.js"],
    mainFields: ["browser", "jsnext:main", "main"],
  },
});
