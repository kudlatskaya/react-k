import React, {useState} from 'react';


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
    selected: boolean,
    checkStar: (value: RatingPropsType) => void;
}

function Star(props: StarPropsType) {
    const { selected, checkStar } = props;

    return (selected === true)
        ? <span onClick={checkStar}>&#9733;</span>
        : <span onClick={checkStar}>&#9734;</span>

    // if (props.selected === true) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star</span>
    // }
}

const UncontrolledRating = () => {
    const [ value, setValue ] = useState<RatingPropsType>(0);

    function checkStar(value: RatingPropsType) {
        setValue(value);
    }

    return (
        <div>
            <Star selected={ value > 0 } checkStar={checkStar}/>
            <Star selected={ value > 1 } checkStar={checkStar}/>
            <Star selected={ value > 2 } checkStar={checkStar}/>
            <Star selected={ value > 3 } checkStar={checkStar}/>
            <Star selected={ value > 4 } checkStar={checkStar}/>
        </div>
    );
};

export default UncontrolledRating;