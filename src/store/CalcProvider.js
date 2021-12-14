import { useReducer} from "react";
import CalcContext from "./calc-context";

const defaultCalcState = {
    currentValue: 0,
    previousValue: null,
    currentAction: null,
};

const calcReducer = (state, action) => {
    if (action.type === 'VALUE') {
        const currValue = state.currentValue;
        const newValue = action.value;
        if (currValue === null) {
            return {
                currentValue: newValue,
                previousValue: state.previousValue,
                currentAction: state.currentAction
            }
        }
        else {
            return {
                currentValue: currValue + newValue,
                previousValue: state.previousValue,
                currentAction: state.currentAction
            }
        }
    }
    else if (action.type === 'ACTION') {
        return {
            currentValue: 0,
            previousValue: state.currentValue,
            currentAction: action.action
        };
    }
    else if (action.type === 'SUBMIT') {
        let curVal = parseInt(state.currentValue);
        let prevVal = parseInt(state.previousValue);
        console.log(state.currentValue);
        console.log(state.previousValue);

        if(state.currentAction === '/') {
            prevVal = prevVal/curVal;
        }
        else if (state.currentAction === '*'){
            prevVal = prevVal*curVal;
        }
        else if (state.currentAction === '+'){
            prevVal = prevVal+curVal;
        }
        else if (state.currentAction === '-'){
            prevVal = prevVal-curVal;
        }

        return {
            currentValue: prevVal,
            previousValue: curVal,
        };
    }

    return defaultCalcState;
};

const CalcProvider = props => {
    const [calcState, dispatchCalcAction] = useReducer(calcReducer, defaultCalcState);

    const addValueHandler = val => {
        dispatchCalcAction({
            type: 'VALUE',
            value: val
        });
    };

    const addActionHandler = action => {
        dispatchCalcAction({
            type: 'ACTION',
            action: action
        });
    };

    const submitHandler = () => {
        dispatchCalcAction({
            type: 'SUBMIT',
        })
    };

    const calcContext = {
        currentValue: calcState.currentValue,
        previousValue: calcState.previousValue,
        currentAction: calcState.currentAction,
        addValue: addValueHandler,
        addAction: addActionHandler,
        submit: submitHandler
    }

    return <CalcContext.Provider value={calcContext}>
        {props.children}
    </CalcContext.Provider>
};

export default CalcProvider;