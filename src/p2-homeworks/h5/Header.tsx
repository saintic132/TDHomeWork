import React from 'react'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.headerNames}>
            <div className={s.homeName}>
                <h3>HOME</h3>
            </div>
            <div className={s.studyNames}>
                <div className={s.preJunior}>
                    <div className={s.preJuniorName}>
                        <b>Pre-Junior</b>
                    </div>
                    <div className={s.preJuniorLessons}>
                        <div>HomeWork 1</div>
                        <div>HomeWork 2</div>
                        <div>HomeWork 3</div>
                        <div>HomeWork 4</div>
                    </div>
                </div>
                <div className={s.junior}>
                    <div className={s.juniorName}>
                        <b>Junior</b>
                    </div>
                    <div className={s.juniorLessons}>
                        <div>HomeWork 5</div>
                        <div>HomeWork 6</div>
                        <div>HomeWork 7</div>
                        <div>HomeWork 8</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
