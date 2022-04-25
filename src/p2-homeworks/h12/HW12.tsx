import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {ActionsReducersType, AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {Dispatch} from "redux";
import {changeThemeC, ThemeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {

    // const theme = 'some'; // useSelector

    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)

    const dispatch = useDispatch<Dispatch<ActionsReducersType>>()
    // useDispatch, onChangeCallback

    const onChangeCallBack = (newTheme: ThemeType) => {
        dispatch(changeThemeC(newTheme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <div>
                <SuperSelect
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallBack}
                />
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
