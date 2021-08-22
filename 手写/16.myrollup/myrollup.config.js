const path = require('path');
const rollup = require('./lib/rollup');
let entry = path.resolve(__dirname, 'src/index.js');
rollup(entry,path.resolve(__dirname,'dist/my.bundle.js'));
