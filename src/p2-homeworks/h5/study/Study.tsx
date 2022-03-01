import React from "react";
import s from "./Study.module.css";
import Junior from "./junior/Junior";
import Pre_Junior from "./pre_junior/Pre_Junior";


function Study() {

    return (
        <div className={s.studyNames}>

            <Pre_Junior />

            <Junior/>

        </div>
    )

}

export default Study