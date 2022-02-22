import {UserType} from "../HW8";

type SortType = {
    type: string
    payload: string | number
}

type ActionsType = SortType


export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up' ?
                [...state.sort((a, b) => a.name > b.name ? 1 : -1)] :
                [...state.sort((a, b) => a.name < b.name ? 1 : -1)]
        }
        case 'check': {
            return [...state.filter(el => el.age > 18)]
        }
        default:
            return state
    }
}