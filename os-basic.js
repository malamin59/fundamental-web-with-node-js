const os = require("os");

console.log("========== System Information ==========\n");

console.log("Operating System       :", os.platform());
console.log("OS Version             :", os.release());
console.log("System Architecture    :", os.arch());
console.log("CPU Model        git remote add origin https://github.com/malamin59/fundamental-web-with-node-js.git      :", os.cpus()[0].model);
console.log("Number of CPU Cores    :", os.cpus().length);
console.log("Total RAM              :", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("Free RAM               :", (os.freemem() / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("System Uptime          :", (os.uptime() / 3600).toFixed(2), " Hours");
console.log("Hostname               :", os.hostname());
console.log("Home Directory         :", os.homedir());

console.log("\n=========================================");


    