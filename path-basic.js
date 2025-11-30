// Implement path basic

// require path
const path = require("path");
console.log("File name Info \n");
console.log("filename", __filename);
console.log("directory  name", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/alamin/document/nextLevel.pdf";

console.log("analyzing filePath", filePath, "\n");

console.log("Directory: ", path.dirname(filePath));
console.log("base name: ", path.basename(filePath))
console.log("file extension", path.extname(filePath))
console.log("file extension", path.extname(filePath))
console.log("file name", path.basename(filePath, path.extname(filePath)))
console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filePath)
console.log(parsed)
console.log("\n" + "-".repeat(50) + "\n");


console.log("formatted path: ", path.format(parsed))