import React from 'react'
import HW6 from '../../h6/HW6'
import HW7 from '../../h7/HW7'
import HW8 from '../../h8/HW8'


function MiddleJunior() {

    const showHomework = [
        {id: 2, collapsed: true, homework: <HW6/>},
        {id: 3, collapsed: true, homework: <HW7/>},
        {id: 4, collapsed: true, homework: <HW8/>}
    ]

    return (
        <div style={{
            marginTop: "90px"
        }}>

            {
                showHomework.map(el => {
                    return (
                        <div >
                            {el.collapsed && el.homework}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MiddleJunior
