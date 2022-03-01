import React, {useState} from "react";
import s from "./Pre_Junior.module.css";
import {NavLink} from "react-router-dom";

type lessonsArrayType = {
    id: number
    title: string
}

function Pre_Junior() {

    let [collapsed, setCollapsed] = useState<boolean>(false);

    const lessonsArray: lessonsArrayType[] = [
        {id: 1, title: 'HomeWork 1'},
        {id: 2, title: 'HomeWork 2'},
        {id: 3, title: 'HomeWork 3'},
        {id: 4, title: 'HomeWork 4'},
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

                    const activePage = `/pre-junior/${el.id}`

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

export default Pre_Junior