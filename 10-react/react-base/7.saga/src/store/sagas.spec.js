import test from 'tape';
import {call,put,cps} from 'redux-saga/effects';
import {delay,readFile} from './utils';
import * as types from './action-types';
import readAsync from './saga/readAsync';
import {incrementAsync} from './saga/watchIncrementAsync';
test('incrementAsync saga test',function(assert){
    let gen = incrementAsync();;
    assert.deepEqual(
        gen.next().value,
        call(delay,1000),
        "should return a promise which was delaied 1000 millseconds"
    );
    assert.deepEqual(
        gen.next().value,
        put({type:types.INCREMENT}),
        "should return a promise which was delaied 1000 millseconds"
    );
    assert.end();
});
test('incrementAsync saga test',function(assert){
    let gen = readAsync();;
    assert.deepEqual(
        gen.next().value,
        cps(readFile,'README.md'),
        "should return README.md's content"
    );
    assert.deepEqual(
        gen.next(),
        {value:undefined,done:true},
        "should done"
    );
    assert.end();
});
