import React, { useState } from 'react';

function App() {
  const [ count, setCount ] = useState( 0 );
  return (
    <div className="App">
      <p>
        The button has been clicked {`${count}`} times.
      </p>
      <button onClick={() => setCount( count + 1 )}>Click</button>
    </div>
  );
}

export default App;
