module.exports = (options) => ({
  // 打包出来的安装包的名字
  productName: options?.productName || "demonbe-electron",
  appId: options?.appId || "com.demonbe.app",
  copyright: options?.copyright || "Copyright © year Jake",
  // 打包输出路径
  directories: {
    output: "packages",
  },
  // 需要打包进安装包的文件【!xxx 表示不需要打进安装包】
  files: ["!src/", "!tsconfig.json"],
});
