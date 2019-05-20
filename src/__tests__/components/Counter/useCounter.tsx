import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import React from "react";
import {render, fireEvent, cleanup} from "react-testing-library";
import { useCounter } from "Components/Counter";

afterEach(cleanup);

interface IProps {
    initialValue: number
}

const Component = (props: IProps) => {
    const {
        count,
        increment,
        decrement
    } = useCounter(props.initialValue);

    return (
        <div>
            <p data-testid="count">{count}</p>

            <button type="button" onClick={() => increment()} data-testid="increment" />
            <button type="button" onClick={() => decrement()} data-testid="decrement" />
        </div>
    );
}

test("Have initial value", () => {
    const expectedInitialValue = 10;
    const { getByTestId } = render(
        <Component initialValue={expectedInitialValue} />
    );

    expect(getByTestId("count").textContent).toBe(expectedInitialValue.toString());
});

test("Have initial value incremented", () => {
    const expectedInitialValue = 10;
    const { getByTestId } = render(
        <Component initialValue={expectedInitialValue} />
    );

    const increment = getByTestId("increment");

    fireEvent.click(increment);
    expect(getByTestId("count").textContent).toBe((expectedInitialValue + 1).toString());

    fireEvent.click(increment);
    expect(getByTestId("count").textContent).toBe((expectedInitialValue + 2).toString());
});

test("Have initial value decremented", () => {
    const expectedInitialValue = 10;
    const { getByTestId } = render(
        <Component initialValue={expectedInitialValue} />
    );

    const decrement = getByTestId("decrement");

    fireEvent.click(decrement);
    expect(getByTestId("count").textContent).toBe((expectedInitialValue - 1).toString());

    fireEvent.click(decrement);
    expect(getByTestId("count").textContent).toBe((expectedInitialValue - 2).toString());
});

test("Have initial value incremented and decremented", () => {
    const expectedInitialValue = 10;
    const { getByTestId } = render(
        <Component initialValue={expectedInitialValue} />
    );

    const increment = getByTestId("increment");
    const decrement = getByTestId("decrement");

    fireEvent.click(decrement);
    expect(getByTestId("count").textContent).toBe((expectedInitialValue - 1).toString());

    fireEvent.click(decrement);
    expect(getByTestId("count").textContent).toBe((expectedInitialValue - 2).toString());

    fireEvent.click(increment);
    expect(getByTestId("count").textContent).toBe((expectedInitialValue - 1).toString());

    fireEvent.click(increment);
    expect(getByTestId("count").textContent).toBe((expectedInitialValue).toString());

    fireEvent.click(increment);
    expect(getByTestId("count").textContent).toBe((expectedInitialValue + 1).toString());

    fireEvent.click(decrement);
    expect(getByTestId("count").textContent).toBe((expectedInitialValue).toString());
});