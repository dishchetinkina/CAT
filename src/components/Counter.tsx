import React from "react";
import classes from './Counter.module.scss';

const Counter = () => {

    return (
        <div className={classes.btn}>
            <div>Это типо счётчик</div>
            <button>Это типо кнопка</button>
        </div>
    );
};

export default Counter;