// https://leetcode-cn.com/problems/min-stack/
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.diffStack = [];
  this.min = Number.MAX_VALUE;
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  if(this.diffStack.length === 0) {
      this.diffStack.push(0);
      this.min = x;
  } else {
      let top = x - this.min;
      this.diffStack.push(top);
      this.min = top < 0 ? x : this.min;
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  let top = this.diffStack[this.diffStack.length - 1];
  this.min = top < 0 ? this.min - top : this.min;
  this.diffStack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  let top = this.diffStack[this.diffStack.length - 1];
  if(top < 0) return this.min;
  else return top + this.min;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
