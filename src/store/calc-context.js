import React from 'react';

const CalcContext = React.createContext({
    currentValue: 0,
    previousValue: null,
    currentAction: null,
    canAdd: true,
    addValue: val => {},
    addAction: action => {},
    submit: () => {},
    clear: () => {},
    back: () => {}
});

export default CalcContext;