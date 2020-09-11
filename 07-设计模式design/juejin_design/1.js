function User(name , age, career, work) {
  this.name = name
  this.age = age
  this.career = career 
  this.work = work
}

function Factory(name, age, career) {
  let work
  switch(career) {
      case 'coder':
          work =  ['写代码','写系分', '修Bug'] 
          break
      case 'product manager':
          work = ['订会议室', '写PRD', '催更']
          break
      case 'boss':
          work = ['喝茶', '看报', '见客户']
      case 'xxx':
          // 其它工种的职责分配
  return new User(name, age, career, work)
  }
}