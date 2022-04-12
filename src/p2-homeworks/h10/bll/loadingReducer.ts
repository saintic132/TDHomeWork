export enum LOADING_REDUCER {     // через enum
    CHANGE_LOADING_PAGE = 'HW10/CHANGE_LOADING_PAGE',
}

type initStateType = {
    loading: boolean
}
const initState = {
    loading: false
}

export const loadingReducer = (state: initStateType = initState, action: loadingReducersType): initStateType => { //fixed any
    switch (action.type) {
        case LOADING_REDUCER.CHANGE_LOADING_PAGE: {
            return {
                ...state,
                loading: action.status
            }
        }
        default:
            return state
    }
}

type loadingACType = {
    type: LOADING_REDUCER.CHANGE_LOADING_PAGE
    status: boolean
}
export const loadingAC = (status: boolean): loadingACType => ({type: LOADING_REDUCER.CHANGE_LOADING_PAGE, status})

export type loadingReducersType = loadingACType  // собираем все релюсеры в 1н (с файла)