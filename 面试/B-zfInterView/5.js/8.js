let readline = require('readline-sync');
while (true) {
    let num1 = readline.question('input num1:');
    let num2 = readline.question('input num2:');
    console.log(parseFloat(num1) + parseFloat(num2));
}