import React from "react";
import { useDispatch } from "react-redux";
import { add, minus, multi, division, textOut } from "./app/taskReducerSlice";

export default function In() {
    let task1Input = React.createRef();
    let task10Input = React.createRef();

    const dispatch = useDispatch();

    const addHandler = () => {
        dispatch(add(task1Input.current.value));
    };
    const minusHandler = () => {
        dispatch(minus(task1Input.current.value));
    };
    const multiHandler = () => {
        dispatch(multi(task1Input.current.value));
    };
    const divisionHandler = () => {
        dispatch(division(task1Input.current.value));
    };
    const textHandler = () => {
        dispatch(textOut(task10Input.current.value));
    };

    return (
        <div>
            <h2>Task 1</h2>
            <input type="number" ref={task1Input} />
            <button onClick={addHandler}>+</button>
            <button onClick={minusHandler}>-</button>
            <button onClick={multiHandler}>*</button>
            <button onClick={divisionHandler}>/</button>
            <h2>Task 10</h2>
            <input type="text" ref={task10Input} />
            <button onClick={textHandler}>Text</button>
        </div>
    );
}
