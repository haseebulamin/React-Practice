import React, { useRef } from 'react';
import { UseImperativeChild } from './UseImperativeChild'; // use correct import with curly braces

export default function UseImperativeParent() {
  const addRef = useRef();

  return (
    <div className='text-center'>
      <h1>useImperativeHandle Hook</h1>
      <UseImperativeChild ref={addRef} /> {/* use the correct component name */}
      <button onClick={() => addRef.current.increment()}>parent add</button>
    </div>
  );
}