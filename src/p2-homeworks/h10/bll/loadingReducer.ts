import {ActionsTypes} from "./store";

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'

type InitStateType = {
    loading: boolean
}

const initState: InitStateType = {
    loading : false
};

export const loadingReducer = (state: InitStateType = initState, action: ActionsTypes): InitStateType => { // fix any
    debugger
    switch (action.type) {
        case TOGGLE_IS_LOADING: {
            return {...state, ...action.payload};
        }
        default:
            return state;
    }
};

export type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean): any => ({
    type : TOGGLE_IS_LOADING,
    payload: {loading}
} as const); // fix any
