import { useState } from "react"
import { Link } from "react-router-dom"

import {LOGO_URL} from "../utils/constants"

const Header = () => {
    const [auth, setauth] = useState("Login")

    return (
        <header className="header">
            <div className="logoImage">
                <img src={LOGO_URL} alt="Error in loading Image."></img>
            </div>
            <nav className="navItems">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
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
