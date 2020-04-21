import React from 'react'
import {inject,observer,Provider} from 'mobx-react';
import {observable} from 'mobx';
// observable使数据响应式
const colors = observable({
  foreground: '#000',
  background: '#dedede'
});

const Button = inject("colors")(observer(({ colors, label, onClick }) =>
 <button style={{
     color: colors.foreground,
     backgroundColor: colors.background
   }}
   onClick={onClick}
 >{label}</button>
));

// later..
colors.foreground = 'red';
// all buttons updated

export default function PageCom(){
  function onClick(){
    console.log('click')
    colors.foreground = 'green';
  }
  return <Provider colors={colors}> 
    <Button {...colors} onClick={onClick} label='btn'></Button>  
  </Provider>
}
