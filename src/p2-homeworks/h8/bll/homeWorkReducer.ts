import {ActionType, personType, StateType} from "../HW8";

export const homeWorkReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "sort": {
            let newState = [...state]
            if (action.payload === "up") {
                newState = newState.sort(function (a: personType, b: personType) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return - 1;
                    }
                    return 0;
                })
            } else if (action.payload === "down") {
                newState = newState.sort(function (a: personType, b: personType) {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return - 1;
                    }
                    return 0;
                })
            }
            return newState
        }
        case "check": {
            return state.filter(p => p.age >= 18)
        }
        default:
            return state
    }
};
