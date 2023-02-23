import React, {useState} from 'react';


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

// type StarNumberType = {
//     value: 1 | 2 | 3 | 4 | 5
// }

type StarPropsType = {
    selected: boolean,
    checkStar: (value: number) => void;
    value: 1 | 2 | 3 | 4 | 5,
}

function Star(props: StarPropsType) {
    const { selected, checkStar, value } = props;

    return <span onClick={ ()=>checkStar(value) }>
            { selected ? <>&#9733;</> : <>&#9734;</> }
    </span>
}

const UncontrolledRating = () => {
    const [ value, setValue ] = useState<number>(0);

    function checkStar(value: number) {
        setValue(value);
    }

    return (
        <div>
            <Star selected={ value > 0 } checkStar={checkStar} value={1}/>
            <Star selected={ value > 1 } checkStar={checkStar} value={2}/>
            <Star selected={ value > 2 } checkStar={checkStar} value={3}/>
            <Star selected={ value > 3 } checkStar={checkStar} value={4}/>
            <Star selected={ value > 4 } checkStar={checkStar} value={5}/>
        </div>
    );
};

export default UncontrolledRating;