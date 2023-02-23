import React, {useState} from 'react';


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

// type StarNumberType = {
//     value: 1 | 2 | 3 | 4 | 5
// }

type StarPropsType = {
    selected: boolean,
    checkStar: () => void,
}

function Star(props: StarPropsType) {
    const { selected, checkStar } = props;

    return <span onClick={ checkStar }>
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
            <Star selected={ value > 0 } checkStar={() => { checkStar(1) }} />
            <Star selected={ value > 1 } checkStar={() => { checkStar(2) }} />
            <Star selected={ value > 2 } checkStar={() => { checkStar(3) }} />
            <Star selected={ value > 3 } checkStar={() => { checkStar(4) }} />
            <Star selected={ value > 4 } checkStar={() => { checkStar(5) }} />
        </div>
    );
};

export default UncontrolledRating;