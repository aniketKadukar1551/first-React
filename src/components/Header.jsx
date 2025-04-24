import {LOGO_URL} from "../utils/constants"

const Header = () => {
    return (
        <header className="header">
            <div className="logoImage">
                <img src={LOGO_URL} alt="Error in loading Image."></img>
            </div>
            <nav className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
