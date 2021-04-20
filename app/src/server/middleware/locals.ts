export default function (req, res, next) {
  let assetsJson = require("../../../build/statics/asset.json");

  if (!assetsJson) {
    assetsJson = {};
  }

  req.app.locals = assetsJson?.chunks || {};
  next();
}
