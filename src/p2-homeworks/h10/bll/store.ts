import {loadingReducer, loadingReducersType} from './loadingReducer'
import {combineReducers, createStore, Store} from "redux";
import {themeReducer, ThemeReducerType} from "../../h12/bll/themeReducer";

export type ActionsReducersType = loadingReducersType | ThemeReducerType   // Все экшены которые могут приходить с разных редьюсеров
export type AppStoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
})

const store: Store<AppStoreType, ActionsReducersType> = createStore(reducers)  //Типизацию видел такую Store

export default store


// @ts-ignore
window.store = store // for dev
