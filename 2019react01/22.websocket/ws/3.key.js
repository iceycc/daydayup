let CODE= '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
const crypto = require('crypto');
const key = 'MpZIjlHiAB2p+BHGrzb5cQ==';

let accept = crypto.createHash('sha1').update(key+CODE).digest('base64');
console.log(accept);