import sum from '../src/sum';
describe('测试sum模块',function(){
    it('1+1=2?',function(){
        expect(sum(1,1)).toBe(2);
    });
});