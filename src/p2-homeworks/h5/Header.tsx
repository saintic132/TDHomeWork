import React from 'react'
import s from './Header.module.css'
import Study from "./study/Study";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={s.headerNames}>
            <div className={s.homeName}>
                <NavLink to='/'>
                    <h3>HOME</h3>
                </NavLink>
            </div>

            <Study />
        </div>
    )
}

export default Header
