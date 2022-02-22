import {UserType} from "../HW8";

type SortUpType = {
    type: string
    payload: string
}
type ActionsType = SortUpType


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