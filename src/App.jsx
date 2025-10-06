import { useState } from 'react';

function App() {
  const [state, setState] = useState('Emree');
  //   let name = 'Emre';

  function ismiDegistir(parametre) {
    setState(parametre);
    // name = 'Ahmet';
    // console.log(name);
  }

  console.log('component render oldu!');

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={()=> ismiDegistir("hello")} className="">İsmi Değiştir</button>
    </div>
  );
}

export default App;
