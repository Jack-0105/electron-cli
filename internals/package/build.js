const os = require("os");
const ci = require("./ci/base");

const platform = process.env.platform || os.platform();

ci.build();
