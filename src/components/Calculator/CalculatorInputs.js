import Button from '../UI/Button';

import classes from './CalculatorInputs.module.css';


const CalculatorInputs = props => {
    return <div className={classes.calculatorInputs}>
        <div>
            <Button value="+" type='action'/>
            <Button value="-" type='action'/>
            <Button value="*" type='action'/>
            <Button value="/" type='action'/>
        </div>
        <div>
            <Button value="7" type='value'/>
            <Button value="8" type='value'/>
            <Button value="9" type='value'/>
            <Button value="C" type='clear'/>
        </div>
        <div>
            <Button value="4" type='value'/>
            <Button value="5" type='value'/>
            <Button value="6" type='value'/>
            <Button value="B" type='back'/>
        </div>
        <div>
            <Button value="1" type='value'/>
            <Button value="2" type='value'/>
            <Button value="3" type='value'/>
            <Button value="." type='value'/>
        </div>
        <div>
            <Button value="0" type='value'/>
            <Button value="=" type='submit'/>
        </div>
    </div>
};

export default CalculatorInputs;