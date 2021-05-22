let cp = require("child_process");

console.log("trying to open calculator");
cp.execSync("calc");
console.log("opened calculator");

cp.execSync("start chrome https:\\www.wikipedia.com");

let output = cp.execSync("node abc.js");
console.log("output 🔥" + output);
