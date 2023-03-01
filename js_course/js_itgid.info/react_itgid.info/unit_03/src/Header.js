function Header() {
    return (<Nav/>);
}

function Nav() {
    return (
        <ul>
            <li>
                <a href="/">Главная</a>
            </li>
            <li>
                <a href="/about">О сайте</a>
            </li>
            <li>
                <a href="/cat">Категории</a>
            </li>
        </ul>
    );
}

export default Header;