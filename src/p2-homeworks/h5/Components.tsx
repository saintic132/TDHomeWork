import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
}

function Components() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={() => <Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Components
