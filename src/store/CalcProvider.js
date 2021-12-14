import { useReducer} from "react";
import CalcContext from "./calc-context";

const defaultCalcState = {
    currentValue: 0,
    previousValue: null,
    currentAction: null,
    canAdd: true
};

const calcReducer = (state, action) => {
    if (action.type === 'VALUE') {
        let currValue = state.currentValue ? state.currentValue : 0;
        let newValue = action.value;

        if (state.currentValue[state.currentValue.length-1] === '.' && newValue === '.') {
            return {
                currentValue: currValue,
                previousValue: state.previousValue,
                currentAction: state.currentAction,
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
        let curVal = parseFloat(state.currentValue);
        let prevVal = parseFloat(state.previousValue);

        if(state.currentAction === '/') {
            curVal = prevVal/curVal;
        }
        else if (state.currentAction === '*'){
            curVal = prevVal*curVal;
        }
        else if (state.currentAction === '+'){
            curVal = prevVal+curVal;
        }
        else if (state.currentAction === '-'){
            curVal = prevVal-curVal;
        }

        return {
            currentValue: curVal,
            previousValue: prevVal,
            currentAction: state.currentAction
        };
    }
    else if (action.type === 'BACK') {
        let tmpVal = state.currentValue;
        if (tmpVal.length > 1) {
            tmpVal = tmpVal.substring(0, tmpVal.length - 1)
            return {
                currentValue: tmpVal,
                previousValue: state.previousValue,
                currentAction: state.currentAction
            }
        }
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

    const clearHandler = () => {
        dispatchCalcAction({
            type: 'CLEAR',
        });
    }

    const undoHandler = () => {
        dispatchCalcAction({
            type: 'BACK',
        })
    }

    const calcContext = {
        currentValue: calcState.currentValue,
        previousValue: calcState.previousValue,
        currentAction: calcState.currentAction,
        canAdd: calcState.canAdd,
        addValue: addValueHandler,
        addAction: addActionHandler,
        submit: submitHandler,
        clear: clearHandler,
        back: undoHandler
    }

    return <CalcContext.Provider value={calcContext}>
        {props.children}
    </CalcContext.Provider>
};

export default CalcProvider;