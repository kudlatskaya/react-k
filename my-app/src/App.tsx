import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";



function hello() {
    //debugger
    alert('Hello it-kamasutra');
}

//hello();

function App(props: any) {
    let [ ratingValue, setRatingValue ] = useState <RatingValueType>(0);
    let [ collapsed, setCollapsed ] = useState <boolean>(true);

    return (
        <div className={"app"}>
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            <p>ControlledAccordion </p>
            <Accordion title={"Menu"} collapsed={collapsed} onClick={setCollapsed}/>
            <p>UncontrolledAccordion </p>
            <UncontrolledAccordion title={"Menu"} />
            <UncontrolledAccordion title={"Users"} />
            <p>ControlledRating </p>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <p>UncontrolledRating </p>
            <UncontrolledRating />
            <p>UncontrolledOnOff </p>
            <OnOff/>
            <p>ControlledOnOff </p>
            <OnOff/>
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
