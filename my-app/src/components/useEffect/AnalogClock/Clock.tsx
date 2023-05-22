import React, {useEffect, useState} from 'react';
import s from './Clock.module.css';

type ClockPropsType = {
    mode: 'digital' | 'analog',
}

const Clock: React.FC<ClockPropsType> = ({mode}) => {
    const [date, setDate] = useState(new Date())

    // unmount component
    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => clearInterval(id)
    }, [])

    const time = date.toLocaleTimeString();

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return (
        <div>
            {mode === 'digital' &&  <span>{time}</span>}

            {mode === 'analog' &&
                <div className={s.clock}>
                    <div className={s.analogClock}>
                        <div className={`${s.dial} ${s.seconds}`} style={secondsStyle} />
                        <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                        <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
                </div>
            </div>}
        </div>
    );
};

export default Clock;