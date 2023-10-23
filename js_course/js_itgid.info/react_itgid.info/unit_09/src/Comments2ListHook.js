import React, { useState } from "react";

function Comments2ListHook() {
    const [data, setData] = useState([]);
    function onlyEven() {
        let a = data;
        let evenPost = a.filter((e) => e);
        c;
        setData(evenPost);
    }
    return (
        <div>
            <div>
                <button onClick={onlyEven}>Only even comments</button>
            </div>
            {data.map((el, index) => (
                <section key={el.id}>
                    <p>
                        <b>
                            {index + 1}. {el.email}
                        </b>
                    </p>
                    <p>{el.body}</p>
                </section>
            ))}
        </div>
    );
}

export default Comments2ListHook;
