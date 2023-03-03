import { NavLink, useLocation } from "react-router-dom";

function Category(props) {
    let url = useLocation();
    let nav = props.data;
    const itemList = nav.map((e) => (
        <li key={e.link_nav}>
            <NavLink to={`${url.pathname}${e.link_nav}`}>{e.text}</NavLink>
        </li>
    ));

    return (
        <>
            <h1>Category</h1>
            <NavLink to={`/`}> Назад </NavLink>
            <ul>{itemList}</ul>
        </>
    );
}

export default Category;
