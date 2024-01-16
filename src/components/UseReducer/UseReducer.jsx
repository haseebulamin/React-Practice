import React, { useReducer } from 'react'
import './UseReducer.scss'

const initialState = {count: 0};

    const reducer = (state,action)=>{
        console.log(state,action)
        switch(action.type){
            case 'increament':
                return {count:state.count+1}
            case 'decreament':
                return {count:state.count-1}
            case 'clear':
                return {count:state.count = 0}
            default:
                return state
        }
       }

export default function UseReducer() {
    const [state,dispatch] = useReducer(reducer, initialState)
  
  return (
    <div className="counter bg-success d-flex justify-content-center align-items-center flex-column">
      <h1 className='my-3'> {state.count}</h1>
      <div className='d-flex justify-content-center align-items-center'>
      <button type="button" class="btn btn-success mx-2" onClick={ ()=> dispatch({type: 'increament'}) } >Add 1</button>
      <button type="button" class="btn btn-success mx-2" disabled={state.count===0 ?true:false} onClick={ ()=> dispatch({type: 'decreament'}) }>Sub 1</button>
      <button type="button" class="btn btn-success mx-2 px-3" onClick={ ()=> dispatch({type: 'clear'}) }>Clear</button>
      </div>
    </div>
  )
}
