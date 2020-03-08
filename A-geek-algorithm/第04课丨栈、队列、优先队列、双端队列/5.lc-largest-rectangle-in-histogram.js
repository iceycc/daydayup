// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
/**
 * 柱状图中最大的矩形
 * 1。 暴力 n * 3
 *      for i=0 ,n-2
 *        j= i + 1 ,n-1
 *        (i,j)-> minHeight;area
 *        update area
 * 2. 暴力优化
 *      先遍历高度
 * 3. 栈
 *  维护一个栈，栈里的元素是从小到大排列的
 */


 // 2
 let arr = [2,1,5,6,2,3]
 /**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  var maxArea = 0;
  for(var i = 0;i < heights.length;i++){
      var minHeight = Number.MAX_SAFE_INTEGER;
      for(var j = i;j < heights.length;j++){
          minHeight = Math.min(minHeight,heights[j]);
          maxArea = Math.max(maxArea ,minHeight* (j-i+1));
      }
  }
  return maxArea;
};

