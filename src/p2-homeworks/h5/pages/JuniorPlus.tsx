import React from 'react'
import {useParams} from "react-router-dom";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import store from "../../h10/bll/store";
import {Provider} from "react-redux";


function JuniorPlus() {

    const param = useParams<'*'>()
    const some = Number(param["*"])

    const showHomework = [
        {id: 9, homework: <HW9/>},
        {id: 10, homework: <Provider store={store}> <HW10 /> </Provider>},
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
