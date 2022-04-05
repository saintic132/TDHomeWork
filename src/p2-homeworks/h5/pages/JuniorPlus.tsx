import React from 'react'
import {useParams} from "react-router-dom";
import HW9 from "../../h9/HW9";


function JuniorPlus() {

    const param = useParams<'*'>()
    const some = Number(param["*"])

    const showHomework = [
        {id: 9, homework: <HW9/>},
    ]

    return (
        <div style={{
            marginTop: "120px"
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

export default JuniorPlus
