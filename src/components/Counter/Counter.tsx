import React from "react";

import useCounter from "./useCounter";

const Counter = () => {
    const { count, increment, decrement } = useCounter(10);

    return (
        <div className="flex flex-col w-full">
            <p className="text-xl leading-tigh text-center mbottom-4">{count}</p>

            <div className="w-full flex justify-around">
                <button className="text-sm font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-green text-green hover:bg-purple hover:text-white outline-none" onClick={increment}>Increment</button>
                <button className="text-sm font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-red text-red hover:bg-purple hover:text-white outline-none" onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;
