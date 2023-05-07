import { useState } from 'react';
import './App.css';

function Square() {
  const [val, setVal] = useState(null);
  function handleEvent(){
    setVal('X');
  }
  return <button className="square" onClick={handleEvent}>{val}</button>;
}


function App() {
  return (
    <div className='t'>
      <div className="t1">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="t2">
      <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="t3">
      <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
  );
}

export default App;
