import {ActionsTypes} from "../../h10/bll/store";

const SET_THEME = "SET_THEME"
export type ThemeType = 'dark' | 'red' | 'light' | 'purple'
type initStateType = {
    theme: ThemeType
}

const initState: initStateType = {
    theme : "dark"
};

export const themeReducer = (state = initState, action: ActionsTypes): initStateType => { // fix any
    switch (action.type) {
        case SET_THEME: {
            return {...state, ...action.payload};
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: ThemeType): any => ({
    type : SET_THEME, payload : {theme}
}); // fix any

export type ChangeThemeACType = ReturnType<typeof changeThemeAC>
