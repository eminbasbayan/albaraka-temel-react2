import { useEffect, useState } from 'react';

const ForwardCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [count]);

  return <p className="text-xl font-weight">{count}</p>;
};

export default ForwardCounter;
