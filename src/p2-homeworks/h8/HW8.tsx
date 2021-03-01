import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styles from './HW8.module.css'

export type personType = {
    _id: number
    name: string
    age: number
}

export type StateType = Array<personType>
export type ActionType = {
    type: string
    payload: string | number
}

const initialPeople: StateType = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            <span>{p.name }</span>
            <span> - </span>
            <span>{ p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))

    return (
        <div className={styles.hw8Container}>
            <hr/>
            homeworks 8


            <div className={styles.peopleContainer}>{finalPeople}</div>
            <div><SuperButton onClick={sortUp}>Sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>Sort down</SuperButton></div>
            <div><SuperButton onClick={check}>Check 18</SuperButton></div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
