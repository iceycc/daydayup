import React,{useEffect,useState} from 'react'
export function Efferct(){
  const [count,setCount] = useState(1)
  useEffect(()=>{
    document.title =`click ${count} time`
  })
  return <div>
    
  </div>
}