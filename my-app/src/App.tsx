import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";

function hello() {
    //debugger
    alert('Hello it-kamasutra');
}

//hello();

function App(props: any) {
    return (
        <div>
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article1*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion title={"Menu"} collapsed={true}/>*/}
            {/*<Accordion title={"Users"} collapsed={false}/>*/}
            <UncontrolledAccordion title={"Menu"} />
            <UncontrolledAccordion title={"Users"} />
            {/*Article2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <p>UncontrolledRating </p>
            <UncontrolledRating />
            <OnOff/>
            <OnOff/>
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
