import React, { useRef } from 'react'
export default function useImperativeParent() {
    const addRef = useRef();
  return (
    <div className='text-center'>
        <h1>useImperativeHandle Hook</h1>
        <button onClick={()=>(addRef.current.increament())}>parent add</button>
    </div>
  )
}

