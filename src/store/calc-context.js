import React from 'react';

const CalcContext = React.createContext({
    currentValue: 0,
    previousValue: null,
    currentAction: null,
    addValue: val => {},
    addAction: action => {},
    submit: () => {}
});

export default CalcContext;