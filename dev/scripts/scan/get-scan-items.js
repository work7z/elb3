let path = require("path");
let fs = require("fs");
let sh = require("shelljs");
let _ = require("lodash");
var cnchars = require("cn-chars");
let os = require("os");

var md5 = require("md5");
const { exit } = require("process");
let i18njson = require("../../../resources/public/purejs/app-i18n.json");

let commonText = new RegExp(
  "Dot\\s*\\(\\s*" + sub_exp(1) + "\\s*,\\s*" + sub_exp(3)
);

function convertUnixPathToWindowsPath(v) {
  v = path.normalize(v);
  return v;
}

function sub_exp(idx) {
  return "((?<![\\\\])['\"`])((?:.(?!(?<![\\\\])\\1))*.?)\\" + idx;
}
// get env LAFTOOLS_ROOT
let baseDIR = path.join(__dirname, "..", "..", "..");
if (baseDIR == "") {
  console.log("LAFTOOLS_ROOT could not be empty");
  exit(-1);
} else {
  console.log("LAFTOOLS: ", baseDIR);
  // exit(99)
}

let webDIR = path.join(baseDIR, ...`modules/web`.split("/"));
let nodeDIR = path.join(baseDIR, ...`modules/node`.split("/"));

// personal project for RYAN LAI, just ignore it please
let privateProjects = [];

let webItem = {
  id: "bprl",
  type: "ts",
  prefix: "Dot(",
  pattern: commonText,
  target: `${webDIR}/public/static/lang`,
  dir: `${webDIR}/src`,
};

let searchItems = [
  {
    id: "brl",
    type: "go",
    prefix: ".Dot(",
    target: `${baseDIR}/resources/lang`,
    pattern: commonText,
    dir: `${baseDIR}/core`,
  },
  webItem,
].map((x) => {
  x.dir = convertUnixPathToWindowsPath(x.dir);
  x.target = convertUnixPathToWindowsPath(x.target);
  return x;
});

module.exports = {
  searchItems,
  baseDIR,
};
