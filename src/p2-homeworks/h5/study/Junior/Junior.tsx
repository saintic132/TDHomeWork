import React, {useState} from "react";
import s from "../common/ContainerStyle.module.css";
import {NavLink} from "react-router-dom";

type lessonsArrayType = {
    id: number
    title: string
}

function Junior() {

    let [collapsed, setCollapsed] = useState<boolean>(false);

    const lessonsArray: lessonsArrayType[] = [
        {id: 9, title: 'HomeWork 9'},
        {id: 10, title: 'HomeWork 10'},
        {id: 11, title: 'HomeWork 11'},
        {id: 12, title: 'HomeWork 12'},
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