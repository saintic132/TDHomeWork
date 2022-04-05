import React, {useState} from "react";
import s from "./Junior_plus.module.css";
import {NavLink} from "react-router-dom";

type lessonsArrayType = {
    id: number
    title: string
}

function Junior_plus() {

    let [collapsed, setCollapsed] = useState<boolean>(false);

    const lessonsArray: lessonsArrayType[] = [
        {id: 9, title: 'HomeWork 9'},
    ]

    const onClickShowButton = () => {
        setCollapsed(!collapsed)
    }


    return (
        <div className={s.preJunior}>
            <div className={s.preJuniorName}>
                <b onClick={onClickShowButton}>Pre-Junior</b>
            </div>
            <div className={s.preJuniorLessons}>

                {collapsed &&
                lessonsArray.map(el => {

                    const activePage = `/junior_plus/${el.id}`

                    return (
                        <NavLink to={activePage}>
                            <div
                                key={el.id}
                                onClick={onClickShowButton}
                            >
                                {el.title}
                            </div>
                        </NavLink>
                    )
                })
                }
            </ div>

        </div>
    )
}

export default Junior_plus