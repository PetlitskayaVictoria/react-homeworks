import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import style from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(50);

    const onChangeRange = (value: number | number[]) => {
        if (typeof value === "number") {
            setValue1(value)
            setValue2(value)
        } else {
            setValue1(value[0])
            setValue2(value[1])
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={style.sliderContainer}>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={style.sliderContainer}>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeRange}
                    value={[value1, value2]}
                    min={0}
                    max={100}
                    step={5}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={style.value2}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
