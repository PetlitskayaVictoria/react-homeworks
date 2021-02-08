import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass // need to fix with (?:)

    return (
        <div className={s.container}>
            <div className={s.inputErrorContainer}>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <span className={s.errorMessage}>{error}</span>
            </div>
            <button onClick={addUser}>Add</button>
            <span className={s.usersNumber}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
