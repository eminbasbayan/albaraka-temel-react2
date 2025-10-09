import { useEffect, useState } from 'react';

const BackwardCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => { 
    const id = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [count]);

  return <div>{count}</div>;
};

export default BackwardCounter;
