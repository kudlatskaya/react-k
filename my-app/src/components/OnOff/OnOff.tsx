import React, {useState} from 'react';
import {RatingValueType} from "../../Rating/Rating";

type PropsType = {
    on: boolean,
    onClick: (on: boolean) => void,
}

const OnOff = (props: PropsType) => {
    const { on, onClick } = props;

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !on ? "red" : "white",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red",
    }

    return (
        <div>
            <div style={onStyle} onClick={ () => { onClick(!on) }}>On</div>
            <div style={offStyle} onClick={ () => { onClick(!on) }}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;