import React,{useCallback,useState} from 'react'

export default function UseCallback() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
  
    const multiCountcallback = useCallback( ()=> {
      console.log("multiCount");
      return count*5;
    },[count]);
  
    return (
      <div className='text-center'>
      <h1>UseCallback Hook</h1>
      <h2>Count: {count}</h2>
      <h2>Item: {item}</h2>
      <h2>Count multiplay by 5: {multiCountcallback()}</h2>
      <button onClick={()=>setCount(count+1)}>update conut</button>
      <button onClick={()=>setItem(item*10)}>update item</button>
      </div>
    )
}
