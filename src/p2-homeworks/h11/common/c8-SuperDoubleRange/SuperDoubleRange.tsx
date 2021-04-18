import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value: number | number[]
    max?: number
    min?: number
    step?: number | null

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, min, max, step
        // min, max, step, disable, ...
    }
) => {

    const onChangeCallback = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange && onChangeRange(value);
    }
    // сделать самому, можно подключать библиотеки

    return (
        <div>
            <Slider
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={min}
                max={max}
                step={step}
            />
        </div>
    );
}

export default SuperDoubleRange;
