import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {ActionsReducersType, AppStoreType} from "./bll/store";
import {Dispatch} from "redux";
import {loadingAC} from "./bll/loadingReducer";
import s from './HW10.module.css'


function HW10() {
    // useSelector, useDispatch

    let loading = useSelector<AppStoreType, boolean>((state => state.loading.loading))
    let dispatch = useDispatch<Dispatch<ActionsReducersType>>()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*Loader украден :( */}
            {loading
                ? (
                    <div className={s.ring}>Loading
                        <span className={s.loaderSpan}></span>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
