import {cps} from 'redux-saga/effects';
import {readFile} from '../utils';
export default function* readAsync(){
    let content = yield cps(readFile,'README.md');
    console.log(content);
}