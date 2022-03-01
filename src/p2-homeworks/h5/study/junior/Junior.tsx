import React, {useState} from "react";
import s from "./Junior.module.css";
import {NavLink} from "react-router-dom";

type lessonsArrayType = {
    id: number
    title: string
}

function Junior() {

    let [collapsed, setCollapsed] = useState<boolean>(false);

    const lessonsArray: lessonsArrayType[] = [
        {id: 6, title: 'HomeWork 6'},
        {id: 7, title: 'HomeWork 7'},
        {id: 8, title: 'HomeWork 8'},
    ]

    const onClickShowButton = () => {
        setCollapsed(!collapsed)
    }


    return (
        <div className={s.junior}>
            <div className={s.juniorName}>
                <b onClick={onClickShowButton}>Junior</b>
            </div>
            <div className={s.juniorLessons}>

                {collapsed &&
                lessonsArray.map(el => {

                    const activePage = `/junior/${el.id}`

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

export default Junior