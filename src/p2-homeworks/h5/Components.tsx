import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import MiddleJunior from "./pages/MiddleJunior";
import Error404 from "./pages/Error404";
import JuniorPlus from "./pages/JuniorPlus";


export const PATH = {
    PRE_JUNIOR: '/pre-junior/*',
    JUNIOR: '/junior/*',
    JUNIOR_PLUS: '/junior_plus/*'
}

function Components() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={() => <Navigate to={'/'}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={ <PreJunior />}/>
                <Route path={PATH.JUNIOR} element={ <MiddleJunior />}/>
                <Route path={PATH.JUNIOR_PLUS} element={ <JuniorPlus />}/>
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Components
