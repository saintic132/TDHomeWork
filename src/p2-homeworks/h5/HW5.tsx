import React from 'react'
import Header from './Header'
import Components from './Components'
import {BrowserRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <BrowserRouter>

                <Header/>

                <Components/>

            </BrowserRouter>
        </div>
    )
}

export default HW5
