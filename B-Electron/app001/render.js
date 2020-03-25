const {ipcRenderer} = require('electron')

setTimeout(async()=>{
  let res = await ipcRenderer.invoke('work-notification')
  console.log('res',res)
},1000)