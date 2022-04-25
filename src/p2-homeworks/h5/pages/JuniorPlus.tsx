import React from 'react'
import {useParams} from "react-router-dom";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import HW11 from "../../h11/HW11";
import HW12 from "../../h12/HW12";


function JuniorPlus() {

    const param = useParams<'*'>()
    const some = Number(param["*"])

    const showHomework = [
        {id: 9, homework: <HW9/>},
        {id: 10, homework: <HW10 />},
        {id: 11, homework: <HW11 />},
        {id: 12, homework: <HW12 />},
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
