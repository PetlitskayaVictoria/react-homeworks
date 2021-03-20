import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styles from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {

        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())// setDate
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    function toTwoSymbols(num: number ) {
            return num < 10 ? "0" + num : num
    }

    const stringTime = toTwoSymbols(date.getHours()) + " : " + toTwoSymbols(date.getMinutes()) + " : " + toTwoSymbols(date.getSeconds());
    const stringDate = toTwoSymbols(date.getDate()) + "." + toTwoSymbols(date.getMonth() + 1) + "." + toTwoSymbols(date.getFullYear());

    return (
        <div className={styles.clockContainer}>
            {
                date ? (
                    <div
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        {stringTime}
                    </div>
                ) : <div> Click "Start" button to see the Time </div>
            }


            {show && (
                <div>
                    {stringDate}
                </div>
            )}
            <div>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    );
}

export default Clock;
