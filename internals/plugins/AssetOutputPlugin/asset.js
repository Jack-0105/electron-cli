/**
 * 记录静态资源，把打包的结果通过JSON方式存储在asset中
 */
"use strict";

const path = require("path");
const fs = require("fs-extra");
const _ = require("lodash");
const outputPath = path.join(process.cwd(), "app/build/statics");
const assetJsonPath = path.join(outputPath, "asset.json");
fs.mkdirsSync(outputPath);

class Asset {
  constructor() {
    this.initAsset();
    this.asset = require(assetJsonPath);
  }

  parseAsset(assets) {
    const vm = this;
    if (_.isString(assets)) {
      assets = [assets];
    }
    if (_.isArray(assets)) {
      const typeMap = {};
      assets.forEach((item) => {
        console.error("item:", item);
        const typeName = vm.getAssetType(item.name);
        if (!typeMap[typeName]) {
          typeMap[typeName] = [];
        }
        typeMap[typeName].push(item);
      });
      return typeMap;
    }
    return assets;
  }

  getAssetType(asset) {
    console.error("getAssetType:", asset);
    const ext = path.extname(asset);
    return ext ? ext.slice(1) : "";
  }

  initAsset() {
    try {
      fs.statSync(assetJsonPath);
    } catch (e) {
      console.log("asset.json not exists, create one");
      const assetJson = {
        chunks: {},
      };
      this.asset = assetJson;
      this.save();
    }
  }

  setChunks(chunksData) {
    const vm = this;
    if (_.isObject(chunksData)) {
      _.forEach(chunksData, function (item, key) {
        _.set(vm.asset, ["chunks", key], vm.parseAsset(item));
      });
    } else {
      this.asset.chunks = chunksData;
    }
    return this;
  }

  setDlls(dllData) {
    if (_.isArray(dllData)) {
      this.set("dll", this.parseAsset(dllData));
    } else {
      this.set("dll", dllData);
    }
    return this;
  }

  set(key, value) {
    this.asset[key] = value;
    return this;
  }

  merge(obj) {
    this.asset = Object.assign(this.asset, obj);
  }

  get(key) {
    return this.asset[key];
  }

  toJSON() {
    return this.asset();
  }

  save() {
    console.error("save:", this.asset, assetJsonPath);
    try {
      fs.writeJsonSync(assetJsonPath, this.asset, "utf8");
    } catch (e) {
      throw new Error(`save asset fail:${e}`);
    }
    return this;
  }
}

module.exports = new Asset();
