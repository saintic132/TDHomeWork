import React from "react";
import s from "./Study.module.css";
import PreJunior from "./Pre-Junior/Pre-Junior";
import LittleJunior from "./Little-Junior/Little-Junior";
import Junior from "./Junior/Junior";
import JuniorPlus from "./Junior-plus/Junior-plus";


function Study() {

    return (
        <div className={s.studyNames}>

            <LittleJunior />

            <PreJunior/>

            <Junior/>

            <JuniorPlus />

        </div>
    )

}

export default Study