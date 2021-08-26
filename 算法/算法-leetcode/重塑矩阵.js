/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let m = mat.length;
  let n = mat[0].length;
  if (m * n != r * c) return mat;
  let res = new Array(r).fill(0).map(() => new Array(c).fill(0)); // 而为
  for(let i=0;i<m*n;i++){
    res[Math.floor(i/c)][i%c] = mat[Math.floor(i/n)][i%n]
  }
  return res;
};
let nums = [
    [1, 2],
    [3, 4],
  ],
  r = 1,
  c = 4;
console.log(matrixReshape(nums, r, c));
