import {LoadingACType, loadingReducer} from "./loadingReducer";
import {combineReducers, createStore} from "redux";
import {ChangeThemeACType, themeReducer} from "../../h12/bll/themeReducer";
import React from "react";

export type ActionsTypes = LoadingACType | ChangeThemeACType

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
});

const store = createStore(reducers);
export type AppStoreType = ReturnType<typeof reducers>

export default store



// @ts-ignore
window.store = store; // for dev
