import Button from '../UI/Button';

import classes from './CalculatorInputs.module.css';


const CalculatorInputs = props => {
    return <div className={classes.calculatorInputs}>
            <Button value="+" type='action'/>
            <Button value="-" type='action'/>
            <Button value="*" type='action'/>
            <Button value="/" type='action'/>

            <Button value="7" type='value'/>
            <Button value="8" type='value'/>
            <Button value="9" type='value'/>
            <Button value="C" type='clear'/>

            <Button value="4" type='value'/>
            <Button value="5" type='value'/>
            <Button value="6" type='value'/>
            <Button value="B" type='back'/>

            <Button value="1" type='value'/>
            <Button value="2" type='value'/>
            <Button value="3" type='value'/>
            <Button value="." type='value'/>

            <Button value="0" type='value' class={classes.flex1}/>
            <Button value="=" type='submit' class={classes.flex3}/>
    </div>
};

export default CalculatorInputs;