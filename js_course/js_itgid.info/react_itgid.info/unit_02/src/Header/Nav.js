function Nav(props) {
    let nav = props.nav;
    const listItem = nav.map((item) => (
        <li key={item.link}>
            <a href={item.link}>{item.text}</a>
        </li>
    ));
    return (
        <nav>
            <ul class="main-navigation">{listItem}</ul>
        </nav>
    );
}
export default Nav;
