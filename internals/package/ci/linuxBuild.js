const Base = require("./base");

class LinuxBuild extends Base {
  config = require("../config/linux");
}

module.exports = LinuxBuild;