import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={s.headerNames}>

            <div>
                <NavLink to='/'>Home</NavLink>
            </div>

            <div>
                <NavLink to='/pages'>1</NavLink>
            </div>

            <div>
                <NavLink to="/pages">2</NavLink>
            </div>

            <div>
                <NavLink to="/pages">3</NavLink>
            </div>

            <div>
                <NavLink to="/pages">4</NavLink>
            </div>

        </div>
    )
}

export default Header
