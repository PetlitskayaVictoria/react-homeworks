import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import styles from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + "-" + i} className={styles.radioButton}>
            <input
                type={"radio"}
                name={name}
                value={o}
                onChange={onChangeCallback}
                checked={value === o}
            />
            {o}
        </label>
    )) : [];

    return (
        <div className={styles.radioButtonsContainer}>
            {mappedOptions}
        </div>
    );
}

export default SuperRadio;
