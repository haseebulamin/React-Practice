import React, { useState} from 'react'
import './UseState.scss'
export default function UseState() {
  const [number, setNumber] = useState(0)

  const increament =(e)=>{ 
   setNumber(number+e)
  }
  const decreament =(e)=>{
   setNumber(number-e)
  }
  const clear =()=>{
   setNumber(0)
  }
  
  return (
    <div className="counter bg-dark d-flex justify-content-center align-items-center flex-column">
      <h1 className='my-3'>{number}</h1>
      <div className='d-flex justify-content-center align-items-center'>
      <button type="button" class="btn btn-success mx-2" onClick={()=> increament(1) }>Add 1</button>
      <button type="button" class="btn btn-success mx-2" disabled={number===0 ?true:false} onClick={()=> decreament(1)}>Sub 1</button>
      <button type="button" class="btn btn-success mx-2 px-3" onClick={clear}>Clear</button>
      </div>
    </div>
  )
}
