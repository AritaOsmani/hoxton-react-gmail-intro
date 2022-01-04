import '../styles/header.css'
import HeaderLeftMenu from "./HeaderLeftMenu";
import HeaderSearch from "./HeaderSearch";

function Header() {
    return (<header className="header">
        <HeaderLeftMenu />
        <HeaderSearch />
    </header>)
}
export default Header;