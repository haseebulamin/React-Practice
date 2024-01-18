import React from 'react'

export default function useImperativeChild() {
    forwardRef((props,ref)=> {
        const [count, setCount] = useState(0);
    
        const increament=()=>{
            setCount(count+1);
        } 
    
        useImperativeHandle(ref, ()=>({
            increament
        })
        )
      return (
        <div>
            <h1>{count}</h1>
            <button onClick={increament}>Child add</button>
        </div>
      )
    })
}
