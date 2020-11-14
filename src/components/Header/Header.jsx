import React from 'react'
import './Header.scss'
import logo from '../../assets/logo/vk.svg'

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="" />
        </header>
    )
}

export default Header
