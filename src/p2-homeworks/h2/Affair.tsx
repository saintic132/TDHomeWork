import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix




    return (
        <div>
            <span
className={s.styleForLetter}
            >{(props.affair.priority[0]).toUpperCase()}</span>
            <span
                style={({
                    marginLeft: '10px',
                })}
            >{props.affair.name}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
