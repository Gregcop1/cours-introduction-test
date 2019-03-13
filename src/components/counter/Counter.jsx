import React, { useState } from 'react';
import './counter.css';

export const Counter = ({ defaultValue = 0 }) => {
  const [value, changeValue] = useState(defaultValue);
  const decrement = () => changeValue(value - 1);
  const increment = () => changeValue(value + 1);
  const onChange = (e) => changeValue(+e.target.value);

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={increment}>+</button>
    </div>
  )
};
