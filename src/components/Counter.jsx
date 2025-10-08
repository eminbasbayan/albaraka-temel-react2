import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [fullName, setFullName] = useState('Emin Başbayan');

  function handleCount(parametre) {
    setCount(count + parametre);
  }

  // console.log('re-render!');

  // useEffect(() => {
  //   console.log("component her render'da çalışır!");
  // });

  // useEffect(() => {
  //   console.log("component ilk render'da çalışır!");
  // }, []);

  // useEffect(() => {
  //   console.log("component ilk ve dependecy array'e göre tekrar çalışır!");
  // }, [fullName, count]);


  useEffect(()=>{

    // clean-up function
    return ()=>{

    }
  }, [])

  return (
    <div>
      <p>{fullName}</p>
      <button onClick={() => setFullName('Ahmet Demir')}>İsmi Değiştir</button>
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
