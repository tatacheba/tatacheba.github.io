import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
    const [valueInput, setValueInput] = useState();
    let inputValue = React.createRef();
    const h1 = React.createElement("h1", {}, "unit_08");
    const h2 = React.createElement(
        "h2",
        { className: "text-orange" },
        "unit_08"
    );
    const p = React.createElement(
        "p",
        {
            style: {
                color: "red",
            },
        },
        "this is p"
    );
    const btn = React.createElement(
        "button",
        { onClick: getValueInput },
        "Button"
    );
    const input = React.createElement("input", {
        type: "text",
        value: valueInput,
        onInput: (e) => setValueInput(e.target.value),
    });
    const p1 = React.createElement("p", {}, "hi ");
    const p2 = React.createElement("p", {}, "world");
    const div = React.createElement("div", { className: "text-grey" }, p1, p2);

    function getValueInput() {
        console.log(input);
    }

    return (
        <>
            <React.Fragment>
                {h1}
                {h2}
                {p}
                {div}
                {input}
                {btn}
                <ul>{}</ul>
            </React.Fragment>
        </>
    );
}

export default App;
