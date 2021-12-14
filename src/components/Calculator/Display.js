import { useContext } from 'react';
import CalcContext from '../../store/calc-context';

import classes from './Display.module.css';

const Display = () => {
    const calcCtx = useContext(CalcContext);

    return <div className={classes.display }>
        <input type="text" disabled value={parseFloat(calcCtx.currentValue)}></input>
    </div>
};

export default Display;