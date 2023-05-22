import React, {useEffect, useState} from 'react';
import s from '../useState/useState.module.css';

const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('component update');
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log('component mount');
        document.title = counter.toString();
    },[])

    useEffect(() => {
        console.log('component mount and update? when counter changed');
        document.title = counter.toString();
    }, [counter])

    return (
        <div>
            <div>{counter}</div>
            <button className={s.button} onClick={() => {
                setCounter(counter + 1)
            }}>Counter
            </button>
            <div>{fake}</div>
            <button className={s.button} onClick={() => {
                setFake(fake + 1)
            }}>Fake
            </button>
        </div>
    );
};

export default UseEffect;