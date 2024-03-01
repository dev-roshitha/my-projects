import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  let increase = () => {
    setCount(count + 1)
  }
  let decrease = () => {
    setCount(count - 1)
  }
  let reset = () => {
    setCount(0)
  }
  
  return (
    <div className="App">
      <div className='count-wrapper'>
        <div className='count-number'>{count}</div>
        <div className='count-controls'>
          <button className='btn increate' onClick={increase}>+</button>
          <button className='btn reset' onClick={reset} disabled={count === 0}>Reset</button>
          <button className='btn decrease' onClick={decrease} disabled={count === 0}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
