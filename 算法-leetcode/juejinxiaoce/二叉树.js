

const preorderTraversal = function(root){
  const res = []
  if(!root){
    return res
  }
  const stack = []
  stack.push(root)
  while(stack.length){
    const cur = stack.pop()
    res.push(cur.val)
    if(cur.right){
      stack.push(cur.right)
    }
    if(cur.left){
      stack.push(cur.left)
    }
  }
  return  res
}

const postorderTraversal = function(root){
  const res = []
  if(!root){
    return res
  }
  const stack = [];
  stack.push(root)
  while(stack.length){
    const cur = stack.pop()
    res.unshift(cur.val)
    
    if(cur.left){
      stack.push(cur.left)
    }

    if(cur.right){
      stack.push(cur.right)
    }
 
  }
  return res
}


const inorderTraversal = function(root){
  
}