import {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import Select from "./components/Select/Select";
import {ItemType} from "./components/Accordion/AccordionBody";
import {Example} from "./components/ReactMemo";
import MemoComponent from "./components/useMemo";
import MemoComponentTotal from "./components/reactMemo_useMemo";
import UseCallBack from "./components/useCallback";
import SelectUseMemo, {locationType} from "./components/Select/SelectUseMemo";
import UseState from "./components/useState/useState";
import UseEffect from "./components/useEffect/useEffect";
import SetInterval from "./components/useEffect/Сlock/SetInterval";
import Clock from "./components/useEffect/AnalogClock/Clock";
import ResetEffect from "./components/useEffect/ResetEffect";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [collapsed, setCollapsed] = useState<boolean>(true);
    const [on, setOn] = useState<boolean>(false);
    const [change, setChange] = useState<boolean>(false);

    let users: ItemType[] = [
        {title: 'Dimych', value: 1},
        {title: 'Artem', value: 2},
        {title: 'Valera', value: 3},
        {title: 'Anna', value: 4},
    ]

    let cities: string[] = ['Minsk', 'Mosсow', 'Kuiv', 'London'];

    let locations: locationType[] = [
        {city: 'Minsk', country: 'Belarus', population: 800},
        {city: 'Mosсow', country: 'Russia', population: 2000},
        {city: 'Brest', country: 'Belarus', population: 500},
        {city: 'Kyiv', country: 'Ukraine', population: 1001},
    ];

    const itemOnClickHandler = (value: any) => {
        alert(value)
    }

    return (
        <div className={"app"}>
            <h1>reset useEffect</h1>
            <ResetEffect/>

            <h1>clock + useEffect</h1>
            <Clock mode={'digital'}/>
            <Clock mode={'analog'}/>

            <h1>useEffect + setTimeout</h1>
            <SetInterval/>

            <h1>useEffect</h1>
            <UseEffect/>

            <h1>useState</h1>
            <UseState/>

            {/*not done*/}
            <h1>select + useMemo</h1>
            <SelectUseMemo cities={locations}/>

            <h1>useCallback</h1>
            <UseCallBack/>

            <h1>react.Memo + useMemo </h1>
            <MemoComponentTotal/>

            <h1>useMemo </h1>
            <MemoComponent/>

            <h1>React Memo </h1>
            <Example/>

            <h1>ControlledSelect </h1>
            <Select items={cities} value={cities[0]}/>

            <h1>ControlledAccordion </h1>
            <Accordion title={"Users"}
                       collapsed={collapsed}
                       onClick={setCollapsed}
                       items={users}
                       onClickCallBack={itemOnClickHandler}
            />

            <h1>UncontrolledAccordion </h1>
            <UncontrolledAccordion title={"Menu"}/>
            <UncontrolledAccordion title={"Users"}/>

            <h1>ControlledRating </h1>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <h1>UncontrolledRating </h1>
            <UncontrolledRating/>

            <h1>ControlledOnOff </h1>
            <OnOff on={on} onClick={setOn}/>

            <h1>UncontrolledOnOff </h1>
            <UncontrolledOnOff onChange={setChange}/> {change.toString()}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
