const {
    app,
    mock,
    assert
} = require('egg-mock/bootstrap');
describe('test/controller/news.test.js', function () {
    before(() => {
        console.log('1.before1');
    });
    before(() => {
        console.log('2.before2');
    });
    beforeEach(() => {
        console.log('3.6.beforeEach');
    });
    it('unit1',function(){
        console.log('4.单元测试1');
    });
    it('unit2',function(){
        console.log('7.单元测试2');
    });
    afterEach(() => {
        console.log('5.8.afterEach');
    });
    after(() => {
        console.log('9.after1');
    });
    after(() => {
        console.log('10.after2');
    });
});