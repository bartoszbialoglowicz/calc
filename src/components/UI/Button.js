import classes from './Button.module.css';

const Button = props => {
    return <input type="button" value={props.value} className={classes.button}/>
};

export default Button;