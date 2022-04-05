import React from "react";
import s from "./Study.module.css";
import Junior from "./junior/Junior";
import Pre_Junior from "./pre_junior/Pre_Junior";
import JuniorPlus from "./junior_plus/Junior_plus";


function Study() {

    return (
        <div className={s.studyNames}>

            <Pre_Junior />

            <Junior/>

            <JuniorPlus/>

        </div>
    )

}

export default Study