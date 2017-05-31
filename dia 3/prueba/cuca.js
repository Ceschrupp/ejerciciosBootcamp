var fs = require("fs");
var saludo = fs.readFileSync(__dirname + "/files.txt","utf8");
console.log(saludo);
var otroSaludo = fs.readFileSync(__dirname + "/files.txt");
console.log(otroSaludo);
