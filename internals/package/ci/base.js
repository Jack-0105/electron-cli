const electronBuilder = require("electron-builder");
class Base {
  // 打包配置
  config = {};

  /**
   * @description 打包钩子，可以在打包之后定义一些需要做的事情，比如文件拷贝
   */
  beforBuild() {}

  /**
   * @description 打包，集成打包流程
   */
  build() {
    this.beforBuild();
    this.electronBuild();
    this.beforBuild();
  }

  /**
   * @description 打包，使用electron-builder构建打包
   */
  electronBuild() {
    electronBuilder.build(this.config);
  }

  /**
   * @description 打包钩子，可以在打包之后定义一些需要做的事情，比如安装包的定制，需要进行二次打包的
   */
  afterBuild() {}
}

module.exports = Base;
