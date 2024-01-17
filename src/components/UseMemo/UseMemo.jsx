import React,{useMemo, useState} from 'react'

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo( function multiCount(){
    console.log("multiCount");
    return count*5;
  },[count]);

  return (
    <div className='text-center'>
    <h1>UseMemo Hook</h1>
    <h2>ount: {count}</h2>
    <h2>Item: {item}</h2>
    <h2>Count multiplay by 5: {multiCountMemo}</h2>
    <button onClick={()=>setCount(count+1)}>update conut</button>
    <button onClick={()=>setItem(item*10)}>update item</button>
    </div>
  )
}
