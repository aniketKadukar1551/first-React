import {LOGO_URL} from "../utils/constants"
import { useState } from "react"

const Header = () => {
    const [auth, setauth] = useState("Login")

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
                    <li><button type="submit" onClick={() => {
                        auth === "Login" ?
                        setauth("Logout") :
                        setauth("Login")
                    }}>{auth}</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
