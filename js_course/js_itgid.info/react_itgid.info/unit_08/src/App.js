import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
    const inputValue = React.useRef(null);
    const [inpValue, setValue] = React.useState([]);
    const h1 = <h1>unit_08</h1>;
    const h2 = <h2 className="text-orange">unit_08</h2>;
    const p = (
        <p
            style={{
                color: "red",
            }}
        >
            this is p
        </p>
    );
    const btn = <button onClick={getValueInput}>Button</button>;
    const input = <input ref={inputValue} defaultValue={55} />;
    const p1 = <p>hi</p>;
    const p2 = <p>world</p>;
    const div = (
        <div className="text-grey">
            {p1}
            {p2}
        </div>
    );

    function getValueInput() {
        let tempValue = [...inpValue];

        if (inputValue.current.value !== "") {
            tempValue.push(inputValue.current.value);
            setValue(tempValue);
        }
    }

    return (
        <>
            {h1}
            {h2}
            {p}
            {div}
            {input}
            {btn}
            <ul>
                {inpValue.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
