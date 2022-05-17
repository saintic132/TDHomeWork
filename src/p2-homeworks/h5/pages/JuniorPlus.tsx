import React from 'react'
import {useParams} from "react-router-dom";
import HW13 from "../../h13/HW13";


function JuniorPlus() {

    const param = useParams<'*'>()
    const some = Number(param["*"])

    const showHomework = [
        {id: 13, homework: <HW13 />},
    ]

    return (
        <div style={{
            margin: "175px 0 10px 0"
        }}>

            {
                showHomework.map(el => {
                    return (
                        <span >
                            {el.id === some && el.homework}
                        </span>
                    )
                })
            }

        </div>
    )
}

export default JuniorPlus