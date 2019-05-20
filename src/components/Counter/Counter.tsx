import React from "react";

import useCounter from "./useCounter";

interface IProps {
  initialValue: number
}

const Counter = (props: IProps) => {
  const { count, increment, decrement } = useCounter(props.initialValue);

  return (
    <div className="flex flex-col w-full">
      <p className="text-xl leading-tigh text-center mbottom-4">{count}</p>

      <div className="w-full flex justify-around">
        <button
          className="text-sm font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-green-600 text-green-600 hover:bg-purple-600 hover:text-white outline-none cursor-pointer"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="text-sm font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-red-600 text-red-600 hover:bg-purple-600 hover:text-white outline-none cursor-pointer"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
