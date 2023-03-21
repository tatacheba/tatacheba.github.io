import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
    let refTask1 = React.createRef();
    let refTask7 = React.createRef();
    let refTask10 = React.createRef();

    const [st1, setStateTask1] = useState();
    const [st2, setStateTask2] = useState(0);
    const [st3, setStateTask3] = useState();
    const [st4, setStateTask4] = useState(0);
    const [st5, setStateTask5] = useState();
    const [st6, setStateTask6] = useState();
    const [st7, setStateTask7] = useState();
    const [st8, setStateTask8] = useState();
    const [st9, setStateTask9] = useState();
    const [st10, setStateTask10] = useState([]);

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function task1() {
        setStateTask1(refTask1.current.value);
    }
    function task2() {
        let currentCount = st2;
        currentCount++;
        setStateTask2(currentCount);
    }
    function task3(e) {
        setStateTask3(e.target.value);
    }
    function task4() {
        let currentCount = st4;
        currentCount++;
        setStateTask4(currentCount);
    }
    function task5(e) {
        setStateTask5(
            e.target.checked ? e.target.attributes.currentvalue.value : 0
        );
    }
    function task6(e) {
        setStateTask6(e.target.value);
    }
    function task7() {
        setStateTask7(
            `${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)}`
        );
        refTask7.current.style = `background: rgb(${st7})`;
    }
    function task8(e) {
        let a = [];
        e.target.value.split("").forEach((arg) => {
            if (isNaN(Number(arg))) {
                a.push(0);
            } else {
                a.push(1);
            }
        });

        setStateTask8(a);
    }
    function task9(e) {
        setStateTask9(e.target.value);
    }
    function task10() {
        let tempSt10 = [...st10];
        tempSt10.push(refTask10.current.value);
        console.log(tempSt10);
        setStateTask10(tempSt10);
        refTask10.current.value = "";
        // console.log(st10);
    }

    return (
        <>
            <h1>События</h1>
            <section>
                <h2>Task 1</h2>
                <input type="text" ref={refTask1} />
                <button className="task-1" onClick={task1}>
                    Push
                </button>
                <div>{st1}</div>
            </section>
            <section>
                <h2>Task 2</h2>
                <div className="task-2" onMouseEnter={task2}></div>
                <div>{st2}</div>
            </section>
            <section>
                <h2>Task 3</h2>
                <input type="text" className="task-3" onInput={task3} />
                <div>{st3}</div>
            </section>
            <section>
                <h2>Task 4</h2>
                <button className="task-4" onClick={task4}>
                    Count
                </button>
                <div>{st4}</div>
            </section>
            <section>
                <h2>Task 5</h2>
                <input type="checkbox" currentvalue="55" onChange={task5} />
                <div>{st5}</div>
            </section>
            <section>
                <h2>Task 6</h2>
                <select className="task-6" onChange={task6}>
                    <option value="7">seven</option>
                    <option value="4">four</option>
                    <option value="9">nine</option>
                    <option value="10">ten</option>
                </select>
                <div>{st6}</div>
            </section>
            <section>
                <h2>Task 7</h2>
                <div className="block-7" ref={refTask7}></div>
                <button className="task-7" onClick={task7}>
                    Color
                </button>
                <div>{st7}</div>
            </section>
            <section>
                <h2>Task 8</h2>
                <input type="text" className="task-8" onKeyUp={task8}></input>
                <div>{st8}</div>
            </section>
            <section>
                <h2>Task 9</h2>
                <input type="range" className="task-9" onInput={task9}></input>
                <div>{st9}</div>
            </section>
            <section>
                <h2>Task 10</h2>
                <input type="number" className="i-10" ref={refTask10}></input>
                <button className="task-10" onClick={task10}>
                    Push
                </button>
                <div>{st10}</div>
            </section>
        </>
    );
}

export default App;
