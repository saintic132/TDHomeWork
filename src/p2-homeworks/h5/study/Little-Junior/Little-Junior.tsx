import React, {useState} from "react";
import s from "../common/ContainerStyle.module.css";
import {NavLink} from "react-router-dom";

type lessonsArrayType = {
    id: number
    title: string
}

function LittleJunior() {

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
        <div className={s.junior}>
            <div className={s.juniorName}>
                <b onClick={onClickShowButton}>Little-Junior</b>
            </div>
            <div className={s.juniorLessons}>

                {collapsed &&
                lessonsArray.map(el => {

                    const activePage = `/little-junior/${el.id}`

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

export default LittleJunior