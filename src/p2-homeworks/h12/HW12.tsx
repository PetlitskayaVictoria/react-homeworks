import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'light', 'purple'];

function HW12() {
    const theme = useSelector((state: AppStoreType) => state.theme.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (theme: ThemeType) => {
        dispatch(changeThemeAC(theme))
    }
    return (
        <div className={s[theme] + " " + s.container}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
