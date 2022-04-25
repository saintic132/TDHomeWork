export enum CHANGE_THEME_H12 {
    CHANGE_THEME = 'HW12/CHANGE_THEME',
}

export type ThemeReducerType = changeThemeCType
type changeThemeCType = ReturnType<typeof changeThemeC>

export type ThemeType = 'dark' | 'red' | 'some'
export type initStateType = {
    theme: ThemeType
}

const initState: initStateType = {
    theme: 'some'
};

export const themeReducer = (state: initStateType = initState, action: ThemeReducerType): initStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME_H12.CHANGE_THEME: {
            return {
                ...state, theme: action.theme
            }
        }
        default:
            return state;
    }
};


export const changeThemeC = (theme: ThemeType) => ({type: 'HW12/CHANGE_THEME', theme}); // fix any