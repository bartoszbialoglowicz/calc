import Button from '../UI/Button';
import classes from './Calculator.module.css';
import Display from './Display';

const Calculator = () => {
    return (
        <div className={classes.calculator}>
            <Display value={0} />
            <div className={classes.inputs}>
                <div>
                    <Button value="+"/>
                    <Button value="-"/>
                    <Button value="*"/>
                    <Button value="/"/>
                </div>
                <div>
                    <Button value="7"/>
                    <Button value="8"/>
                    <Button value="9"/>
                    <Button value="C"/>
                </div>
                <div>
                    <Button value="4"/>
                    <Button value="5"/>
                    <Button value="6"/>
                    <Button value="B"/>
                </div>
                <div>
                    <Button value="1"/>
                    <Button value="2"/>
                    <Button value="3"/>
                    <Button value="."/>
                </div>
                <div>
                    <Button value="0"/>
                    <Button value="="/>
                </div>
            </div>
        </div>
    )
};

export default Calculator;