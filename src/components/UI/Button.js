import { useContext } from 'react/cjs/react.development';
import CalcContext from '../../store/calc-context';
import classes from './Button.module.css';
const Button = props => {
    const addValueHandler = () => {
        if (props.type === 'action'){
            console.log('action');
            calcCtx.addAction(props.value);
        }
            
        else if (props.type === 'value')
            calcCtx.addValue(props.value);
        else if (props.type === 'submit')
            calcCtx.submit()
    }

    const calcCtx = useContext(CalcContext);
    return <input type="button" value={props.value} className={classes.button} onClick={addValueHandler}/>
};

export default Button;