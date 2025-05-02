import { useState } from "react"
import { Link } from "react-router-dom"
import { useInternetStatus } from "../utils/useInternetStatus.js"
import { HEADER_CONTENT } from "../utils/constants"

import {LOGO_URL} from "../utils/constants"

const Header = () => {
    const [auth, setauth] = useState("Login")
    const status  = useInternetStatus()

    return (
        <header className="header">
            <div className="logoImage">
                <img src={LOGO_URL} alt="Error in loading Image."></img>
            </div>
            <nav className="navItems">
                <div className={`internetstatus ${status ? "online": "offline"}`}></div>
                <ul>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li> */}
                    {
                        HEADER_CONTENT.map((value, index) => {
                            const [url, content] = value.split(",")
                            return (
                                <li key={index}>
                                    <Link to={url}>{content}</Link>
                                </li>
                            )
                        })
                    }
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
