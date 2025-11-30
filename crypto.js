// LEARN CRYPTO 

const crypto = require("crypto");


console.log("\n  MDS Hash: ");
const mdHash = crypto.createHash("md5").update("password123").digest("hex");// not recommend 
const mdHash2 = crypto.createHash("md5").update("password123").digest("hex");// not recommend 

console.log("input password 123 \n",  mdHash)
console.log("input password 123 \n",  mdHash2)

const sha256Hash = crypto.createHash("sha256").update("password123").digest("hex");
const sha512Hash = crypto.createHash("sha512").update("password123").digest("hex");

console.log("input password 123 \n",  sha256Hash)
console.log("input password 123 \n",  sha512Hash)

console.log(2 ** 32 / 10 ** 9)