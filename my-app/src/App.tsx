import {useState} from 'react';
import './App.css';
import Accordion, {ItemType} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import Select from "./components/Select/Select";



function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [collapsed, setCollapsed] = useState<boolean>(true);
    const [on, setOn] = useState<boolean>(false);
    const [change, setChange] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState('select')

    let users: ItemType[] = [
        {title: 'Dimych', value: 1},
        {title: 'Artem', value: 2},
        {title: 'Valera', value: 3},
        {title: 'Anna', value: 4},
    ]

    const itemOnClickHandler = (value: any) => {
        alert(value)
    }

    const selectOnChange = (value: any) => {
        setSelectValue(value)
    }

    return (
        <div className={"app"}>
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            <p>ControlledSelect </p>
            <Select items={users} value={selectValue} onChange={selectOnChange}/>

            <p>ControlledAccordion </p>
            <Accordion title={"Users"}
                       collapsed={collapsed}
                       onClick={setCollapsed}
                       items={users}
                       onClickCallBack={itemOnClickHandler}
            />

            <p>UncontrolledAccordion </p>
            <UncontrolledAccordion title={"Menu"}/>
            <UncontrolledAccordion title={"Users"}/>

            <p>ControlledRating </p>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <p>UncontrolledRating </p>
            <UncontrolledRating/>

            <p>ControlledOnOff </p>
            <OnOff on={on} onClick={setOn}/>

            <p>UncontrolledOnOff </p>
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
