import React from 'react'
import './Navbar.css'

import Logo from "../../Assets/image 52.png"
import Basket from "../../Assets/Vector (Stroke).svg"

import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    return (
        <div className="nav__main">
            <div className="nav__left">
                <img src={Logo} alt="logo" className="logo" />
            </div>

            <div className="nav__menuRight">
                <div className="search__icon">
                    <SearchIcon />
                    <a href="#">Search</a>
                </div>
                <a href="#">Help</a>
                <a href="#">Account</a>
                <img src={Basket} alt="basket
                " />
                <div className="menu">
                    <MenuIcon />
                </div>
            </div>
        </div>
    )
}

export default Navbar
