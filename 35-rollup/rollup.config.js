import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve'; // 支持解析引入node_modules下的包
import commonjs from '@rollup/plugin-commonjs'; // 支持commonjs引入
import typescript from "@rollup/plugin-typescript"; // 支持ts
import {terser} from 'rollup-plugin-terser'; // 压缩js
import postcss from 'rollup-plugin-postcss'; // 解析css
import serve from 'rollup-plugin-serve'; // 本地服务器
import livereload from "rollup-plugin-livereload"; // 自动重启
export default {
    input:'./src/index.ts',
    output:{
        file:'./dist/bundle.js',
        format:'iife', // 6种输出格式,amd/es/iife/umd/cjs/system
        name:'calculator',
        globals:{
            lodash:'_',
            jquery:'$'
        }
    },
    plugins:[
        babel({
            exclude:"node_modules/**"
        }),
        resolve(),
        commonjs(),
        typescript(),
        // terser(),
        postcss(),
        serve({
            open:true,
            port:8150,
            contentBase:'./dist'
        }),
        livereload()
    ],
    external:['lodash']
}
