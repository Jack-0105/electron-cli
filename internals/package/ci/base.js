const { exec } = require("child_process");
const path = require("path");
const electronBuilder = require("electron-builder");
class Base {
  build() {
    // const electronBuildPath = path.join(process.cwd(), "electron-builder");

    // exec(`electron-builder`, (error, stdout, stderr) => {
    //   console.error(error);
    // });

    electronBuilder.build(require('../config/mac'))
  }
}

module.exports = new Base();
