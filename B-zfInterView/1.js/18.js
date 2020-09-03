var funs = [];
for (let i = 0; i < 6; i++) {
    funs.push(function () {
        console.log(i);
    });
}
debugger
funs[3]();//3