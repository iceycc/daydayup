// https://juejin.cn/post/6987224048564437029
let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

function arrToTree(arr) {
  function findChild(data, result, pid) {
    for (const item of data) {
      if (item.pid === pid) {
        const newItme = {
          ...item,
          children: [],
        };
        result.push(newItme);
        findChild(data, newItme.children, item.id);
      }
    }
  }
  let result = [];
  findChild(arr, result, 0);
  return result;
}
console.dir(arrToTree(arr), { depth: 1000 });

function arrToTree2(arr) {
  let result = [];
  let itemMap = {};
  for (const item of arr) {
    itemMap[item.id] = {
      ...item,
      children: [],
    };
  }
  for (const item of arr) {
    const id = item.id;
    const pid = item.pid;
    const newItem = itemMap[id];
    if (pid == 0) {
      result.push(newItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(newItem);
    }
  }
  return result;
}
console.dir(arrToTree2(arr), { depth: 100 });

function arrToTree3(arr) {
  let result = [];
  let itemMap = {};
  for (let item of arr) {
    let id = item.id;
    let pid = item.pid;
    itemMap[id] = {
        ...item,
        children: itemMap[id] ? itemMap[id].children : []
    }
    

    let newItem = itemMap[id];
    if (pid == 0) {
      result.push(newItem);
    }else{
        if (!itemMap[pid]) {
            itemMap[pid]["children"] = [];
          }
          itemMap[pid].children.push(newItem);
    }
  }
  return result
}
console.dir(arrToTree3(arr), { depth: 100 });
