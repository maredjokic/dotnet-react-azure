import { useRef } from 'react';

export const UseRefExample = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <div>
            <h2>useRef</h2>
            <input ref={inputRef} placeholder="Upiši nešto..." />
            <button onClick={focusInput}>Fokusiraj</button>
        </div>
    );
};