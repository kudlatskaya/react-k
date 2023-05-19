import React, {useState} from 'react';
import s from './useState.module.css';

const generateData = () => {
    console.log('generateData')
    return 10
}

const UseState = () => {
    console.log('UseState')
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

    return (
        <div>
            <div>{counter}</div>
            <button className={s.button} onClick={() => setCounter(changer)}>counter</button>
        </div>
    );
};

export default UseState;