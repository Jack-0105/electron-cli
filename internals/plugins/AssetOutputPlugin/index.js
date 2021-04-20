"use strict";
const assetHelper = require("./asset");

function AssetOutputPlugin() {
  function emitHook(compilation, callback) {
    const stats = compilation.getStats().toJson({
      hash: true,
      publicPath: true,
      assets: true,
      chunks: false,
      modules: false,
      source: false,
      errorDetails: false,
      timings: false,
    });

    const assetsByChunkName = stats.assetsByChunkName;
    let assets = null;

    const entrypoints = stats.entrypoints;

    console.log("entry:", JSON.stringify(entrypoints))


    for (const item in entrypoints) {
      if (!assets) {
        assets = {};
      }
      assets[item] = entrypoints[item].assets;
    }

    assetHelper.setChunks(assets !== null ? assets : assetsByChunkName).save();

    callback();
  }

  function apply(compiler) {
    if (compiler.hooks) {
      compiler.hooks.emit.tapAsync("AssetOutputPlugin", emitHook);
    } else {
      compiler.plugin("emit", emitHook);
    }
  }

  return { apply };
}

module.exports = AssetOutputPlugin;
