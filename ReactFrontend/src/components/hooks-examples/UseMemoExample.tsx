import { useMemo, useState } from 'react';

export const UseMemoExample = () => {
    const [count, setCount] = useState(0);

    const expensiveCalculation = (num: number) => {
        console.log('Expensive calculation running...');
        return num * 2;
    };

    const result = useMemo(() => expensiveCalculation(count), [count]);
    return (
        <div>
        <h2>useMemo</h2>
        <p>Rezultat: {result}</p>
        <button onClick={() => setCount(count + 1)}>Povećaj</button>
        </div>
  );
};