import Nav from '../Header/Nav'

function Header(props) {
    console.log("fffff "+props.nav)
    return (
        <header>
            <h1>{props.data.site_name}</h1>
            <h2>{props.data.site_title}</h2>
            <Nav nav={props.data.nav}/>
        </header>
    );
}
export default Header;