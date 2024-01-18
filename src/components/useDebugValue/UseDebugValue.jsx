import React, { useDebugValue } from 'react'

export default function UseDebugValue() {
  function usecustom(value) {
    // custom hook code
    useDebugValue(value?'offline':'online')
    // more custome hook
  }
  usecustom(null);
  return (
    <div>UseDebugValue</div>
  )
}
