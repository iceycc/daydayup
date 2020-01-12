import React,{Component} from 'react';
import MouseTracker from './MouseTracker'
import Picture from './Picture'
// render props
export default function(){
    // return (
    //     <MouseTracker>
    //     {(xxx)=>{<Picture {...xxx}/>}}
    // </MouseTracker>
    // )
    return <MouseTracker render={(xxx)=>{<Picture {...xxx}/>}}/>
}