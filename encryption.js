const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);   // 🔥 must be 32 bytes for AES-256

function encrypt(text) {
  const iv = crypto.randomBytes(16);  // 🔥 IV must be new each time
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");

  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted
  };
}

function decrypt(encryptedData, ivHex) {
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(ivHex, "hex")
  );

  let decrypted = decipher.update(encryptedData, "hex", "utf-8");
  decrypted += decipher.final("utf-8");

  return decrypted;
}

// ----------------------

console.log("Encryption Data :");

const sensitiveData = "My created card : 42 42 42 42 42";
console.log("Original:", sensitiveData);

const encrypted = encrypt(sensitiveData);
console.log("Encrypted:", encrypted);

console.log("\nDecrypted:", decrypt(encrypted.encryptedData, encrypted.iv));
