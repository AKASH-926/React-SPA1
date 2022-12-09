import React from 'react'
import { Link } from "react-router-dom"
function Header() {
    return (

        <nav>
            <h1>WEBTECH</h1>
            <main>
                <Link to={"/"}>HOME</Link>
                <Link to={"/contact"}>CONTACT</Link>
                <Link to={"/#about"}>ABOUT</Link>
                <Link to={"/#brands"}>BRANDS</Link>
                <Link to={"/services"}>SERVICES</Link>
            </main>
        </nav>

    )
}

export default Header