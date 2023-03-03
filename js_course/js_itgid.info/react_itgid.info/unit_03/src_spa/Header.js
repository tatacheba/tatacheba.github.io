import { NavLink } from "react-router-dom";

function Header(props) {
    return <Nav data={props.data.header} />;
}

function Nav(props) {
    let nav = props.data;
    const itemList = nav.map((e) => (
        <li key={e.link_nav}>
            <NavLink to={e.link_nav}>{e.text}</NavLink>
        </li>
    ));
    return <ul>{itemList}</ul>;
}

export default Header;
