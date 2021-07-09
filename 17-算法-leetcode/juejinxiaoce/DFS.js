function dfs(root){
  if(!root) return
  console.log(root.value)
  dfs(root.left)
  dfs(root.right)
}