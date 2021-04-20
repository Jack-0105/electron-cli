const express = require('express');
const webpack = require("webpack");
const webpackConfig = require("../webpack/webpack.main.prod");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const app = express();

console.error(webpackConfig)

const compiler = webpack(webpackConfig); // 初始化编译器

// 使用webpack-dev-middleware中间件
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    writeToDisk: true
  })
);

// 使用webpack-hot-middleware中间件，配置在console台输出日志
app.use(
  webpackHotMiddleware(compiler, {
    log: console.log,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000,
  })
);

// Serve the files on port 3000.
app.listen(3001, function () {
  console.log("Example app listening on port 3000!\n");
});
