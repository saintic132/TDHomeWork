import {loadingReducer, loadingReducersType} from './loadingReducer'
import {combineReducers, createStore, Store} from "redux";

export type ActionsReducersType = loadingReducersType   // Все экшены которые могут приходить с разных редьюсеров
export type AppStoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    loading: loadingReducer,
})

const store: Store<AppStoreType, ActionsReducersType> = createStore(reducers)  //Типизацию видел такую Store

export default store


// @ts-ignore
window.store = store // for dev
