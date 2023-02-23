import React, {useState} from "react";

type AccordionPropsType = {
    title: string,
    //collapsed: boolean
}

//create UncontrolledAccordion with useState
//create UncontrolledRating with useState (add button for each star)


function UncontrolledAccordion(props: AccordionPropsType) {
    const [ collapsed, setСollapsed ] = useState(false);

    //const collapsed = true;

    return <div>
        <AccordionTitle title={props.title} onClick={ () => setСollapsed(!collapsed)}/>
        {!collapsed && <AccordionBody />}
    </div>
}

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void,
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={ () => {props.onClick()} }>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;
