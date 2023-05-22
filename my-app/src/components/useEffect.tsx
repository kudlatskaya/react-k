import React, {useEffect, useState} from 'react';
import s from './useState/useState.module.css';

const UseEffect = () => {
    const [counter, setCounter] = useState(1)

    useEffect(() => {

    }, [])

    return (
        <div>
            <div>{counter}</div>
            <button className={s.button} onClick={() => {setCounter(counter + 1)}}>Counter</button>
        </div>
    );
};

export default UseEffect;