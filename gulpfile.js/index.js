const { series } = require("gulp");
const { devRender, prodRender } = require("./render");
const { devMain, prodMain } = require("./main");

exports.devRender = devRender;
exports.devMain = devMain;
exports.prod = series(prodRender, prodMain);
