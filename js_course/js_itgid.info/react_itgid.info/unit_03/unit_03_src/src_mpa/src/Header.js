function Header(props) {
    return <Nav data={props.data.header} />;
}

function Nav(props) {
    let nav = props.data;
    const itemList = nav.map((e) => (
        <li key={e.link_nav}>
            <a href={e.link_nav}>{e.text}</a>
        </li>
    ));
    return <ul>{itemList}</ul>;
}

export default Header;
