import React, { forwardRef, useImperativeHandle, useState } from 'react';

const UseImperativeChild = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useImperativeHandle(ref, () => ({
    increment,
  }));

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Child add</button>
    </div>
  );
});

export default UseImperativeChild;