const path = require("path");
const fs = require("fs");

function getEntry(env) {
  const entryObj = {};
  const modulesPath = path.resolve(process.cwd(), "client/modules");
  console.error(modulesPath);

  if (fs.existsSync(modulesPath)) {
    const modules = fs.readdirSync(modulesPath);

    for (let i = 0; i < modules.length; i++) {
      const modulePath = path.join(modulesPath, modules[i]);
      if (fs.statSync(modulePath).isDirectory()) {
        const moduleName = modules[i];
        let moduleIndexPath = path.resolve(modulePath, "index.tsx");

        if (
          fs.existsSync(moduleIndexPath) &&
          fs.statSync(moduleIndexPath).isFile()
        ) {
          entryObj[moduleName] =
            env === "development"
              ? [
                  "webpack-hot-middleware/client?path=http://127.0.0.1:3000/__webpack_hmr",
                  moduleIndexPath,
                ]
              : [moduleIndexPath];
        }
      }
    }
  }

  return entryObj;
}

module.exports = getEntry;
