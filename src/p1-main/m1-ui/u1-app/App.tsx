import React, {useState} from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2'
import HW3 from '../../../p2-homeworks/h3/HW3'
import HW4 from '../../../p2-homeworks/h4/HW4'
import HW5 from '../../../p2-homeworks/h5/HW5'
import HW6 from '../../../p2-homeworks/h6/HW6'
import HW7 from '../../../p2-homeworks/h7/HW7'
import HW8 from '../../../p2-homeworks/h8/HW8'
import HW9 from '../../../p2-homeworks/h9/HW9'
import HW10 from '../../../p2-homeworks/h10/HW10'
import {Provider} from "react-redux";
import store from "../../../p2-homeworks/h10/bll/store";

function App() {

    let [state, setState] = useState([
        {id: 1, title: 'HomeWork 1' , collapse: false, component: <HW1 />},
        {id: 2, title: 'HomeWork 2' , collapse: false, component: <HW2 />},
        {id: 3, title: 'HomeWork 3' , collapse: false, component: <HW3 />},
        {id: 4, title: 'HomeWork 4' , collapse: false, component: <HW4 />},
        {id: 5, title: 'HomeWork 5' , collapse: false, component: <HW5 />},
        {id: 6, title: 'HomeWork 6' , collapse: false, component: <HW6 />},
        {id: 7, title: 'HomeWork 7' , collapse: false, component: <HW7 />},
        {id: 8, title: 'HomeWork 8' , collapse: false, component: <HW8 />},
        {id: 9, title: 'HomeWork 9' , collapse: false, component: <HW9 />},
        {id: 10, title: 'HomeWork 10' , collapse: false, component: <Provider store={store}> <HW10 /> </Provider>}
    ]);

    const onClickCollapse = (id: number) => {
        let find = state.find(el => el.id === id)
        if (find) {
            find.collapse = !find.collapse
            setState([...state])
        }
    }

    return (
        <div className={s.App}>
            <div>react homeworks:</div>

            {
                state.map(el => {
                    return (
                        <div>
                            <button
                                style={{width:"120px"}}
                                onClick={()=> onClickCollapse(el.id)}
                                key={el.id}>{el.title}</button>
                            {el.collapse && el.component}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default App
