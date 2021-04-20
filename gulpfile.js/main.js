const shell = require("shelljs");

function devMain(cb) {
  console.error("start main...")
  if (shell.exec("npm run dev:main").code !== 0) {
    shell.echo("Error: npm run dev:main failed");
    shell.exit(1);
  }
  cb();
}
function prodMain(cb) {
  cb();
}

exports.devMain = devMain;
exports.prodMain = prodMain;
