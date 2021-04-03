import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const checkAPI = () => {
    fetch("https://my-sous-backend.herokuapp.com/things")
    .then(resp =>  resp.json())
    .then(things => console.log(things))
  }

  return (
    <div>
      <h1>The count was: { count }</h1> 
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={ checkAPI }>Check API</button>
    </div>
  );
}

export default App;
