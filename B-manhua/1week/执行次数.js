// 栗子1: 吃面包，每3分钟吃掉1cm，吃掉n cm需要多长时间？
// T(n) = 3n
function eatingBread(n){
    return 3 * n
}
const e = eatingBread(30)
console.log(e)

// n/2 + n/