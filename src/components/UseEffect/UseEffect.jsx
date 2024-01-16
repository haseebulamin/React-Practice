import React, { useState, useEffect} from 'react'
import './UseEffect.scss'
export default function UseEffect() {
  const [number, setNumber] = useState(0)
  const [num, setNum] = useState(0)

  const add1 =(e)=>{
   setNumber(number+e)
  }
  const add2 =(e)=>{
   setNum(num+e)
  }
  const clear =()=>{
    setNumber(0)
    setNum(0)
   }

   useEffect(() => {
    alert("useefftect with add")
  },[number]);

   useEffect(() => {
    alert("ueseffect with plus")
  },[num]);

 
  return (
    <div className="counter bg-dark d-flex justify-content-center align-items-center ">
      <button type="button" class="btn btn-danger mx-2" onClick={()=> add1(1) }>Add {number} </button>
      <button type="button" class="btn btn-danger mx-2" onClick={()=> add2(1) }>Plus {num} </button>
      <button type="button" class="btn btn-success mx-2 px-3" onClick={clear}>Clear</button>

    </div>
  )
}
