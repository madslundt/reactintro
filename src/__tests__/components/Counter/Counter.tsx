import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import React from "react";
import {render, fireEvent, cleanup} from "react-testing-library";
import Counter from "Components/Counter";

afterEach(cleanup);

interface IProps {
    initialValue: number
}

test("Have initial value", () => {
    const expectedInitialValue = 10;
    const { getByText } = render(
        <Counter initialValue={expectedInitialValue} />
    );

    expect(getByText(expectedInitialValue.toString())).toBeInTheDocument();
});

test("Have initial value incremented", () => {
    const expectedInitialValue = 10;
    const { getByText } = render(
        <Counter initialValue={expectedInitialValue} />
    );

    const increment = getByText("Increment");

    fireEvent.click(increment);
    expect(getByText((expectedInitialValue + 1).toString())).toBeInTheDocument();

    fireEvent.click(increment);
    expect(getByText((expectedInitialValue + 2).toString())).toBeInTheDocument();
});

test("Have initial value decremented", () => {
    const expectedInitialValue = 10;
    const { getByText } = render(
        <Counter initialValue={expectedInitialValue} />
    );

    const decrement = getByText("Decrement");

    fireEvent.click(decrement);
    expect(getByText((expectedInitialValue - 1).toString())).toBeInTheDocument();

    fireEvent.click(decrement);
    expect(getByText((expectedInitialValue - 2).toString())).toBeInTheDocument();
});

test("Have initial value incremented and decremented", () => {
    const expectedInitialValue = 10;
    const { getByText } = render(
        <Counter initialValue={expectedInitialValue} />
    );

    const increment = getByText("Increment");
    const decrement = getByText("Decrement");

    fireEvent.click(decrement);
    expect(getByText((expectedInitialValue - 1).toString())).toBeInTheDocument();

    fireEvent.click(decrement);
    expect(getByText((expectedInitialValue - 2).toString())).toBeInTheDocument();

    fireEvent.click(increment);
    expect(getByText((expectedInitialValue - 1).toString())).toBeInTheDocument();

    fireEvent.click(increment);
    expect(getByText(expectedInitialValue.toString())).toBeInTheDocument();

    fireEvent.click(increment);
    expect(getByText((expectedInitialValue + 1).toString())).toBeInTheDocument();

    fireEvent.click(decrement);
    expect(getByText(expectedInitialValue.toString())).toBeInTheDocument();
});