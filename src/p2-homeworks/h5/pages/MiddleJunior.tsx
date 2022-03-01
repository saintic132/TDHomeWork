import React from 'react'
import HW6 from '../../h6/HW6'
import HW7 from '../../h7/HW7'
import HW8 from '../../h8/HW8'
import {useParams} from "react-router-dom";


function MiddleJunior() {

    const param = useParams<'*'>()
    const some = Number(param["*"])

    const showHomework = [
        {id: 6, homework: <HW6/>},
        {id: 7, homework: <HW7/>},
        {id: 8, homework: <HW8/>}
    ]

    return (
        <div style={{
            marginTop: "90px"
        }}>

            {
                showHomework.map(el => {
                    return (
                        <div >
                            {el.id === some && el.homework}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MiddleJunior
