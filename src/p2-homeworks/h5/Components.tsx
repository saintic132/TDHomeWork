import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import PreJunior from "./pages/PreJunior";
import LittleJunior from "./pages/LittleJunior";
import JuniorPlus from "./pages/JuniorPlus";


export const PATH = {
    LITTLE_JUNIOR: '/little-junior/*',
    PRE_JUNIOR: '/pre-junior/*',
    JUNIOR: '/junior/*',
    JUNIOR_PLUS: '/junior-plus/*',
}

function Components() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={() => <Navigate to={'/'}/>}/>
                <Route path={PATH.LITTLE_JUNIOR} element={ <LittleJunior />}/>
                <Route path={PATH.PRE_JUNIOR} element={ <PreJunior />}/>
                <Route path={PATH.JUNIOR} element={ <Junior />}/>
                <Route path={PATH.JUNIOR_PLUS} element={ <JuniorPlus />}/>
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Components
