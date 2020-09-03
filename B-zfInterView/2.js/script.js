/* let a = 1;
let b = 2;
let c = 3;
console.log(parseInt('10000', 2));
//10000
console.log((16).toString(2));//10000
//100000
//00001 00000
//100000 000001
//
console.log(parseInt('100000', 2));//32 g
console.log(parseInt('000001', 2));//1  B */
let base64 = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'
];
function encode(num) {
    let binary = (num).toString(2);//10000
    binary = num > 0 ? binary + '0' : binary + '1';//100000
    let zero = 5 - binary.length % 5;
    if (zero > 0) {//0000100000
        binary = binary.padStart(Math.ceil(binary.length / 5) * 5, '0');
    }

    let parts = [];
    for (let i = 0; i < binary.length; i += 5) {
        parts.push(binary.slice(i, i + 5));
    }//00001 00000
    parts.reverse();//00000 00001
    for (let i = 0; i < parts.length; i++) {
        if (i === parts.length - 1) {
            parts[i] = '0' + parts[i];
        } else {
            parts[i] = '1' + parts[i];
        }
    }//100000 000001
    let chars = [];
    for (let i = 0; i < parts.length; i++) {
        console.log(parseInt(parts[i], 2));
        chars.push(base64[parseInt(parts[i], 2)]);
    }// 32,1=> g,B
    return chars.join('');
}
let ret = encode(16);
console.log(ret);
