import classes from './Display.module.css';

const Display = (props) => {
    return <div className={classes.display}>
        <input type="text" disabled="true" value={props.value}></input>
    </div>
};

export default Display;