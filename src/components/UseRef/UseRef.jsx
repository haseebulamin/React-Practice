import React,{useRef} from 'react'

export default function UseRef() {
  const inputRef = useRef(null);

  const inputHandle=()=>{
    inputRef.current.value ="haseeb";
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  }

  return (
    <div className='text-center'>
        <h1>UseRef Hook</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={inputHandle}>Handle input</button>
    </div>
  )
}
