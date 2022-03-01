import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import HW5 from "./HW5";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Components() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={() => <Navigate to={'/pages'}/>}/>
                <Route path='/pages' element={<PreJunior/>}/>
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Components
