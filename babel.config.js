"use strict";

module.exports = function (api) {
  api.cache(true);

  console.log("-----babel start----");
  console.log(api);
  console.log("-----babel api----");
  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ];

  const plugins = [
    "@babel/plugin-transform-runtime",
  ];

  return {
    presets,
    plugins,
  };
};
