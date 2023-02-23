import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void,
}

const UncontrolledOnOff = (props: PropsType) => {
    const { onChange } = props;
    const [ on, setOn ] = useState(false);

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

    const onClicked = () => {
        setOn(true);
        onChange(true);
    }

    const offClicked = () => {
        setOn(false);
        onChange(false);
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;