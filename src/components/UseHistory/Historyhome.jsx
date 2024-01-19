import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Historyhome() {
    const navigate = useNavigate();
  return (
    <div className='text-center'>
        <h1>Historyhome</h1>
        <h2>Haseeb Ul Amin</h2>
        <h4>welcome hom</h4>
        <h1>
            <button onClick={()=>navigate('/about')}>About</button>
            <button>conatct</button>
        </h1>
    </div>
  )
}
