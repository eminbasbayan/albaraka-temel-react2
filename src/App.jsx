import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  //   let name = 'Emre';

  function handleCount(parametre) {
    setCount(count + parametre);
    // name = 'Ahmet';
    // console.log(name);
  }

  console.log('component render oldu!');

  return (
    <div>
      <button onClick={() => handleCount(+1)} className="">
        Arttır
      </button>
      <h2>{count}</h2>
      <button onClick={() => handleCount(-1)} className="">
        Azalt
      </button>
    </div>
  );
}

export default App;
