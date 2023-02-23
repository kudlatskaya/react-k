import React, {useState} from 'react';


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star</span>
    }

}

const UncontrolledRating = () => {
    const [ value, setValue ] = useState(0);

    return (
        <div>
            <Star selected={ value > 0 }/> <button onClick={() => setValue(1)}>&#9733;</button>
            <Star selected={ value > 1 }/> <button onClick={() => setValue(2)}>&#9733;</button>
            <Star selected={ value > 2 }/> <button onClick={() => setValue(3)}>&#9733;</button>
            <Star selected={ value > 3 }/> <button onClick={() => setValue(4)}>&#9733;</button>
            <Star selected={ value > 4 }/> <button onClick={() => setValue(5)}>&#9733;</button>
        </div>
    );
};

export default UncontrolledRating;