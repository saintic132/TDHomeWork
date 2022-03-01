import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={s.headerNames}>

            <NavLink to='/'>
                <div>
                    Home
                </div>
            </NavLink>

            <NavLink to='/pre-junior'>
                <div>
                    1
                </div>
            </NavLink>

            <NavLink to="/pre-junior">
                <div>
                    2
                </div>
            </NavLink>

            <NavLink to="/pre-junior">
                <div>
                    3
                </div>
            </NavLink>

            <NavLink to="/pre-junior">
                <div>
                    4
                </div>
            </NavLink>



        </div>
    )
}

export default Header
