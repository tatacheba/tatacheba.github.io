import { useLocation } from "react-router-dom";

function Category(props) {
    let url = useLocation();
    let nav = props.data;
    const itemList = nav.map((e) => (
        <li key={e.link_nav}>
            <a href={`${url.pathname}${e.link_nav}`}>{e.text}</a>
        </li>
    ));

    return (
        <>
            <h1>Category</h1>
            <a href={`/`}> Назад </a>
            <ul>{itemList}</ul>
        </>
    );
}

export default Category;
