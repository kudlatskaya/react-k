import React, {useState} from 'react';
import s from './useState.module.css';

const generateData = () => {
    console.log('generateData')
    return 123456789
}

const UseState = () => {
    console.log('UseState')
    const [counter, setCounter] = useState(generateData)

    return (
        <div>
            <div>{counter}</div>
            <button className={s.button} onClick={() => setCounter(counter + 1)}>counter</button>
        </div>
    );
};

export default UseState;