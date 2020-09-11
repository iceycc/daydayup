import { x } from './a.js'
import y from './a.js'
setTimeout(() => {
    console.log(x, y) // 100,20
}, 2000)