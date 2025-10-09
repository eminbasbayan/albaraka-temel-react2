import { useEffect, useState } from 'react';

const useCounter = (forward) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (forward) {
        setCount(count + 1);
      } else {
        setCount(count - 1);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [count, forward]);

  return count;
};

export default useCounter;
