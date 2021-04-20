module.exports = (options) => ({
  productName: options?.productName || "demonbe-electron",
  appId: options?.appId || "com.demonbe.app",
  copyright: options?.copyright || "Copyright © year Jake",
  directories: {
    output: "packages",
  },
  files: ["!src/", "!tsconfig.json"],
});
