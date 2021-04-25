const os = require("os");
const { MacBuild } = require("./ci");

(function build() {
  const platform = process.env.platform || os.platform();

  switch (platform) {
    case "darwin":
      new MacBuild().build();
      break;
    case "win32":
      break;
    case "linux":
      break;
  }
})();
