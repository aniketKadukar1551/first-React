import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { useInternetStatus } from "../utils/useInternetStatus.js"
import { HEADER_CONTENT } from "../utils/constants"
import UserContext from "../utils/UserContext.js"

import {LOGO_URL} from "../utils/constants"

const Header = () => {
    const [auth, setauth] = useState("Login")
    const status  = useInternetStatus()
    const {defaultUser} = useContext(UserContext)

    return (
        <header className="header flex border-2 justify-between">
            <div className="logoImage">
                <img className="w-[110px] p-[0.9rem]" src={LOGO_URL} alt="Error in loading Image."></img>
            </div>
            <nav className="navItems flex">
                <div className={`h-[1rem] w-[1rem] rounded-[50%] mt-[2.5rem] mr-[2.5rem] ${status ? "online" : "offline"}`}></div>
                <ul className="flex list-none pt-[2.5rem]">
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li> */}
                    {
                        HEADER_CONTENT.map((value, index) => {
                            const [url, content] = value.split(",")
                            return (
                                <li key={index} className="pr-[2rem]">
                                    <Link to={url}>{content}</Link>
                                </li>
                            )
                        })
                    }
                    <li className="pr-[2rem]">Cart</li>
                    <li className="pr-[2rem]"><button type="submit" onClick={() => {
                        auth === "Login" ?
                        setauth("Logout") :
                        setauth("Login")
                    }}>{auth}</button></li>
                    <li className="pr-[2rem]">{defaultUser}</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
