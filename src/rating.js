import React from 'react';
const Rating= ({count,change=()=>{} })=>{
    let countstar=[]
    for (let i = 0; i < 5; i++) {
        if(i<count){
            countstar.push(<span 
                onClick={ ()=>{change(i+1)}} 
                key={i}>★</span>)
        }
        else 
        countstar.push(<span 
            onClick={ ()=>{change(i+1)}} 
            key={i}>☆</span>)
    }
return (
<div>{countstar}</div>
    
)


}
export default Rating