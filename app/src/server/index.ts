import express from "express";
import path from "path";
import locals from "./middleware/locals";
import router from "./routes/index";
import { createProxyMiddleware } from "http-proxy-middleware";

const ejs = require("ejs").__express;

export function startServer() {
  const app = express();

  // app.use(express.static("build/statics"));

  app.use(
    "/statics",
    createProxyMiddleware({
      target: "http://127.0.0.1:3000",
      changeOrigin: true,
    })
  );

  app.use(locals);

  app.use(router);

  // 设置模板引擎
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
  app.engine(".ejs", ejs);

  app.listen(8889, function () {
    console.log("Example app listening on port 3000!\n");
  });
}
