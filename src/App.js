import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('red');

  const background = bgColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: bgColor }}
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
