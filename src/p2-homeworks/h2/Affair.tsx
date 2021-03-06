import React from "react";
import {AffairType} from "./HW2";
import cl from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div className={cl.itemContainer}>
            <div className={cl.task}>
                Task: {props.affair.name}
            </div>
            <div className={cl.priority}>
                Priority: {props.affair.priority}
            </div>

            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
