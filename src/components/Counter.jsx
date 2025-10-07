import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleCount(parametre) {
    setCount(count + parametre);
  }

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

export default Counter;
