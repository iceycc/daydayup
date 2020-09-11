const inorderTraversal = root => {
  let res = [], stack = []
  while (root || stack.length) {
    if (root.left) {
      stack.push(root)
      root = root.left
    } else if (!root.left && !root.right) {
      res.push(root.val)
      root = stack.pop()
      root && (root.left = null)
    } else if (root.right) {
      res.push(root.val)
      root = root.right
    }
  }
  return res
}
