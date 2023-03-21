import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
    let count4 = 1;
    let out02 = React.createRef();
    let int05 = React.createRef();
    let out05 = React.createRef();
    let out07 = React.createRef();
    let int08 = React.createRef();
    let out08 = React.createRef();
    let inp10 = React.createRef();
    const [output05, setOutput05] = useState();
    const [output06, setOutput06] = useState();
    const [output08, setOutput08] = useState();
    const [output09, setOutput09] = useState();

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function task1() {
        console.log("task2");
    }

    function task2() {
        out02.current.classList.add("active");
    }

    function task3(event) {
        console.log(event.target.value);
    }

    function task4() {
        console.log(count4++);
    }

    function task5(e) {
        setOutput05(
            e.target.checked ? e.target.attributes.currentvalue.value : 0
        );
    }

    function task6(e) {
        setOutput06(e.target.value);
    }

    function task7() {
        out07.current.style = `background: rgb(${randomInt(0, 255)},${randomInt(
            0,
            255
        )},${randomInt(0, 255)})`;
    }

    function task8() {
        out08.current.value =
            typeof out08.current.value === "undefined"
                ? ""
                : out08.current.value;
        if (isNaN(Number(int08.current.value.split("").pop()))) {
            out08.current.value += "0";
        } else {
            out08.current.value += "1";
        }
        setOutput08(out08.current.value);
    }

    function task9(e) {
        setOutput09(e.target.value);
    }

    let ar10 = [5, 6, 7];
    function task10() {
        ar10.push(+inp10.current.value);
        console.log(ar10);
        inp10.current.value = "";
    }

    return (
        <>
            <h1>События</h1>
            <section>
                <h2>Task 1</h2>
                <button className="task-1" onClick={task1}>
                    Push
                </button>
            </section>
            <section>
                <h2>Task 2</h2>
                <div className="task-2" onMouseEnter={task2} ref={out02}></div>
            </section>
            <section>
                <h2>Task 3</h2>
                <input type="text" className="task-3" onInput={task3} />
            </section>
            <section>
                <h2>Task 4</h2>
                <button className="task-4" onClick={task4}>
                    Count
                </button>
            </section>
            <section>
                <h2>Task 5</h2>
                <input
                    type="checkbox"
                    currentValue="55"
                    onChange={task5}
                    ref={int05}
                />
                <div className="out-5" ref={out05}>
                    {output05}
                </div>
            </section>
            <section>
                <h2>Task 6</h2>
                <select className="task-6" onChange={task6}>
                    <option value="7">seven</option>
                    <option value="4">four</option>
                    <option value="9">nine</option>
                    <option value="10">ten</option>
                </select>
                <div className="out-6">{output06}</div>
            </section>
            <section>
                <h2>Task 7</h2>
                <div className="block-7" ref={out07}></div>
                <button className="task-7" onClick={task7}>
                    Color
                </button>
            </section>
            <section>
                <h2>Task 8</h2>
                <input
                    type="text"
                    className="task-8"
                    onKeyUp={task8}
                    ref={int08}
                ></input>
                <div className="out-8" ref={out08}>
                    {output08}
                </div>
            </section>
            <section>
                <h2>Task 9</h2>
                <input type="range" className="task-9" onInput={task9}></input>
                <div className="out-9">{output09}</div>
            </section>
            <section>
                <h2>Task 10</h2>
                <input type="number" className="i-10" ref={inp10}></input>
                <button className="task-10" onClick={task10}>
                    Push
                </button>
            </section>
        </>
    );
}

export default App;
