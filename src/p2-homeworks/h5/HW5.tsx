import React from 'react'
import Header from './Header'
import Components from './Components'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>

                <div>
                    <h4>Все кликабельно :)</h4>
                </div>
                <h2
                style={{alignItems:"center"}}
                >
                    Не могу сделать считывание по ID и отображение конкретной компоненты.
                    Было бы здорово если бы подсказал :)

                    <div>Telegram: +375-29-706-61-03</div>
                </h2>

                <Header/>

                <Components/>

            </HashRouter>
        </div>
    )
}

export default HW5
