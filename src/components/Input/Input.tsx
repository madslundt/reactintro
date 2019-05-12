import React from "react";

interface IProps {
  type: "text" | "number" | "password";
  placeholder?: string;
  value?: string | number;
  label?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = (props: IProps) => {
  const label = (
    <label className="block text-grey-darker text-sm font-bold mb-2">
      {props.label}
    </label>
  );

  return (
    <div className="px-3">
      {!!props.label && label}
      <input
        className="shadow appearance-none border rounded w-full p-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        {...props}
      />
    </div>
  );
};

export default Input;
