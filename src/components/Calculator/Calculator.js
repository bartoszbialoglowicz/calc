import { useContext } from 'react/cjs/react.development';
import CalcContext from '../../store/calc-context';
import classes from './Calculator.module.css';
import CalculatorInputs from './CalculatorInputs';
import Display from './Display';

const Calculator = () => {
    const calcCtx = useContext(CalcContext);
    return (
        <div className={classes.calculator}>
            <Display value={0} />
            <CalculatorInputs />
            <div>
                <p>Current value: {calcCtx.currentValue}</p>
                <p>Previous value: {calcCtx.previousValue}</p>
                <p>Current action: {calcCtx.currentAction}</p>
            </div>
        </div>
    )
};

export default Calculator;