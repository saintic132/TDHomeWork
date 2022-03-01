import React from 'react'
import Header from './Header'
import Components from './Components'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>

                <div>
                    <h2>Все кликабельно :)</h2>
                </div>

                <Header/>

                <Components/>

            </HashRouter>
        </div>
    )
}

export default HW5
