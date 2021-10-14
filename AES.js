const crypto = require('crypto');
let aesutil = module.exports = {};
/**
* aes加密
* @param data 待加密內容
* @param key 必須為32位私鑰
* @returns {string}
*/
aesutil.encryption = function (data, key, iv) {
iv = iv || "";
let clearEncoding = 'utf8';
let cipherEncoding = 'base64';
let cipherChunks = [];
let cipher = crypto.createCipheriv('aes-256-ecb', key, iv);
cipher.setAutoPadding(true);
cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
cipherChunks.push(cipher.final(cipherEncoding));
return cipherChunks.join('');
}
/**
* aes解密
* @param data 待解密內容
* @param key 必須為32位私鑰
* @returns {string}
*/
aesutil.decryption = function (data, key, iv) {
if (!data) {
    return "";
}
iv = iv || "";
let clearEncoding = 'utf8';
let cipherEncoding = 'base64';
let cipherChunks = [];
let decipher = crypto.createDecipheriv('aes-256-ecb', key, iv);
decipher.setAutoPadding(true);
cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
cipherChunks.push(decipher.final(clearEncoding));
    return cipherChunks.join('');
}