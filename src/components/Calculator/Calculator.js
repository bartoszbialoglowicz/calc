import classes from './Calculator.module.css';
import CalculatorInputs from './CalculatorInputs';
import Display from './Display';

const Calculator = () => {
    return (
        <div className={classes.calculator}>
            <Display value={0} />
            <CalculatorInputs />
        </div>
    )
};

export default Calculator;