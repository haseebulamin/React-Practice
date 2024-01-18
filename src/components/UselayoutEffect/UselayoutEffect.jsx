import React,{useEffect,useLayoutEffect, useRef} from 'react'

export default function UselayoutEffect() {
    const ref = useRef("red");

    useEffect(() => {
    ref.current="yellow";
        console.log(ref , "useEffect");  
    
    });
    useLayoutEffect(() => {
        console.log(ref , "uselayoutEffect"); 
    });

  return (
    <div>UselayoutEffect</div>
  )
}
