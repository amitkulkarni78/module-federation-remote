import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const [count, setCount] = useState(0);
  const count1 = useSelector((state: RootState) => state.counter.count);
  return (
    <div className="">
      <header className="">
        <a>
          Hello from Remote App!
        </a>
        Count - { count1 }
        <button onClick={()=>{ setCount(count+1);}}> click me</button>
      </header>
    </div>
  );
}

export default App;
