import { useState } from "react";

interface IUseCounter {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const useCounter = (initialValue: number): IUseCounter => {
    const [count, setCount] = useState(initialValue);

    const increment: () => void = () => { setCount(count + 1); };
    const decrement: () => void = () => { setCount(count - 1); };

    return {
        count,
        increment,
        decrement,
    };
};


export default useCounter;