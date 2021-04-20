import React, {ChangeEvent, useState} from "react";
import {requestsApi} from "./request-api";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import style from './Request.module.css'

function Request() {
    let [checkboxValue, setCheckboxValue] = useState(false)
    let [responseMessage, setResponseMessage] = useState('')

    const onButtonClick = () => {
        requestsApi.postRequest(checkboxValue).then(res =>
            setResponseMessage(res)
        )
    }

    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.currentTarget.checked)
    }

    return (
        <div>
            <SuperCheckbox onChange={onChangeCheckbox} checked={checkboxValue}/>
            <SuperButton onClick={onButtonClick}>Button</SuperButton>
            <div className={style.message}>
                {responseMessage}
            </div>
        </div>
    );
}

export default Request;
