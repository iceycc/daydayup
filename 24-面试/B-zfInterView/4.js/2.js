function one() {
    {
        let a = 1;
        {
            let b = 2;
            {
                let c = 3;
                console.log(a, b, c);

            }
        }
    }
}
let le1 = {
    a: 1
}
let le2 = {
    b: 2
}
let le3 = {
    c: 3
}
one();