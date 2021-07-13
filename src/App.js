import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);

  const background = bgColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <input 
        type="checkbox" 
        onClick={(e)=>{setIsChecked(e.target.checked)}}
      />
      <button
        style={{ backgroundColor: bgColor }}
        disabled={isChecked}
        onClick={()=>{
          setBgColor(background)
        }}
      >
        Change to {background}
      </button>
    </div>
  );
}

export default App;
