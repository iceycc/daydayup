// 描述
    // 已有的数组都是有序的
    // 新增的值插入到对应的位置
// 子问题
    // 如果一个在一个有序数组中插入一个新的值


// 问题抽象
// function insert(A,x)
// A: 已排序的数组
// x: 需要插入的元素
// 返回值：无


const A = [2,3,4,7,8,9,14]
const x = 6

// 第一步 实现在有序数组插入一个元素
/**
 * 方法1: JavaScript原始实现
 * @param {*} A 
 * @param {*} x 
 */
function insert(A,x){
    const b = A.find(a=>a>x) // 找到A中第一个大于x的元素
    if(b===undefined){ // 说明没有比x大的，直接push到末尾
        A.push(x)
    }else{
        // 0 1 2 3
        // 1 2 3 4
        const idx = A.indexOf(b) // 获取b的在数组A中的索引
        A.splice(idx,0,x) // 插入 splice可以替代push
    }
}
insert(A,x)
console.log(A)


function insert2(A,x){
    const b = A.find(a=>a>x)
    const idx = A.indexOf(b)
    A.splice(idx === -1 ? A.length : idx , 0, x)
}
insert2(A,10)
insert2(A,15)

console.log('2',A)


// 用程序实现上面的过程
// 找到循环不定时   

function insert3(A,x){
    // p 指向下一个需要比较的元素
    // p+1 指向空位
    let p = A.length - 1
    //  循环条件
    while(A[p]>x){
        A[p+1] = A[p] // 表
        p--
    }
    A[p +1] = x
}
insert3(A,2)
console.log('3',A)


const arr = [3,1,4,7,5,10,2,6]
function insert4(A,i,x){
    let p = i -1 // p指向下一个需要比较的元素，刚开始第2个和第一个比较
    while(p>=0 && A[p]>x){ // 执行时间不固定
        // (N^2-n)/2
        A[p+1] = A[p]
        p--
    }
    A[p+1] = x
}

// 第二步：完整的插入排序
function insertion_sort(A){
    for(let i = 1;i<A.length;i++){
        console.log(arr)
        insert4(A,i,A[i]) // 主程序 N-1
    }
}

insertion_sort(arr)
console.log('insertion_sort',arr)

//  思考 如何使用类似二分查找优化插入排序的insert过程
//     速度会变快吗。怎么写

