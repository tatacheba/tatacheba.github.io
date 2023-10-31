import React, { useEffect, useState } from "react";

function Comments2ListHook(props) {
    let [data, setData] = useState([]);

    function onlyEven() {
        let a = data.filter((item, index) => {
            return index % 2 === 0;
        });
        setData([...a]); // Создаем новый массив и устанавливаем его в состояние
    }
    useEffect(() => {
        if (props.data.length > 0) setData(props.data);
    }, [props.data]);

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
