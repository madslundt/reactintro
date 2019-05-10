import React from 'react';

interface IInput {
    type: 'text' | 'number' | 'password'
    placeholder?: string
    value?: string | number
    className?: string
    label?: string
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input = (props: IInput) => {

    const label = <label
        className="block text-grey-darker text-sm font-bold mb-2"
        >{props.label}</label>

    return (
        <div>
            {!!props.label && label}
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                {...props} />
        </div>
    );
};


export default Input;