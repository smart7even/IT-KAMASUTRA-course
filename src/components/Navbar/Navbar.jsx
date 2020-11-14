import React from 'react'
import './Navbar.scss'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <div className="nav__item">
                    <NavLink to="/profile" className="nav__item-text">Profile</NavLink>
                </div>
                <div className="nav__item">
                    <NavLink to="/news" className="nav__item-text">News</NavLink>
                </div>
                <div className="nav__item">
                    <NavLink to="/dialogs" className="nav__item-text">Messages</NavLink>
                </div>
                <div className="nav__item">
                    <NavLink to="/music" className="nav__item-text">Music</NavLink>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
