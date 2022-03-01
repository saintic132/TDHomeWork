import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'


function PreJunior() {

    const showHomework = [
        {id: 1, collapsed: true, homework: <HW1/>},
        {id: 2, collapsed: true, homework: <HW2/>},
        {id: 3, collapsed: true, homework: <HW3/>},
        {id: 4, collapsed: true, homework: <HW4/>}
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

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз