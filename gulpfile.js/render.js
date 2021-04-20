const shell = require("shelljs");

function devRender(cb) {
  if (shell.exec("npm run dev:render").code !== 0) {
    shell.echo("Error: npm run dev:render failed");
    shell.exit(1);
  }
  cb();
}
function prodRender(cb) {
  cb();
}

exports.devRender = devRender;
exports.prodRender = prodRender;
