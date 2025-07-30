import { useEffect, useState } from "react";

export const UseStateExample = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h2>useEffect</h2>
            <p>Trenutno vreme: {time}</p>
        </div>
    );
};