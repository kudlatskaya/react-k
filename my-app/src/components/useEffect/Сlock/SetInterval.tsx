import React, {useEffect, useState} from 'react';

type ClockPropsType = {}

const SetInterval: React.FC<ClockPropsType> = () => {
    const [date, setDate] = useState(new Date())

    // unmount component
    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => clearInterval(id)
    }, [])

    const time = date.toLocaleTimeString();

    return (
        <div>
            <span>{time}</span>
        </div>
    );
};

export default SetInterval;