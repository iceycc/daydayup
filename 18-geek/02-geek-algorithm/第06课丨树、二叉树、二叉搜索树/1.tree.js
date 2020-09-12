class Tree {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
  arr = []
  append(val) {
    this.arr.push(val)
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      this.append(root.val)
      this.inOrder(root.right)
    }
  }
}