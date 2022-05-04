// const products = require("./products");
// const setClothes = require("./setClothes");
// module.exports = () => ({
//   products,
//   setClothes
// });

const Path = require("path");
const glob = require("glob");
const apiFiles = glob.sync(Path.resolve(__dirname, "./") + "/**/[!_]*.js", {
  nodir: true
});

let data = {};

apiFiles.forEach(filePath => {
  const api = require(filePath);
  let [, url] = filePath.split("database/"); // e.g. comments.js
  url = url.slice(0, url.length - 3)  // remove .js >> comments
  data[url] = api;
});

module.exports = () => {
  return data;
};