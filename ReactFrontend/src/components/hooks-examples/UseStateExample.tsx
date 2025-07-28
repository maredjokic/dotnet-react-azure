import { useState } from 'react';

export const UseStateExample = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">UseState Example</h1>
            <p className="text-lg mb-4">Current Count: {count}</p>
            <div className="flex gap-4">
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Increment
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};