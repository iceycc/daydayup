let secretKey = 3;
function encrypt(str) {
    let buffer = Buffer.from(str);
    for (let i = 0; i < buffer.length; i++) {
        buffer[i] = buffer[i] + secretKey;
    }
    return buffer.toString();
}
function decrypt(str) {
    let buffer = Buffer.from(str);
    for (let i = 0; i < buffer.length; i++) {
        buffer[i] = buffer[i] - secretKey;
    }
    return buffer.toString();
}
let message = 'abc';
let secret = encrypt(message);
console.log(secret);
let value = decrypt(secret);
console.log(value);