//COMMONJS, EVERY FILE IN NODE IS A MODULE
//MODULES - ENCAPSULATED CODE
const data = require("./alt-flavor");
const names = require("./m-names");
const sayHi = require("./m-utils");
console.log(data);
sayHi(`susan`);
sayHi(names.john);
sayHi(names.Peyer);
