import {useReducer, useState} from "react";
import AccordionTitle from "./UncontrolledAccordionTitle";
import AccordionBody from "./UncontrolledAccordionBody";
import reducer from "./reducer";

type AccordionPropsType = {
    title: string,
}



function UncontrolledAccordion(props: AccordionPropsType) {
     let [ collapsed, dispatch ] = useReducer(reducer, {collapsed: true});

    return <div>
        <AccordionTitle title={props.title} onClick={ () => dispatch({type: 'TOGGLE-COLLAPSED'}) }/>
        {!collapsed.collapsed && <AccordionBody />}
    </div>
}

export default UncontrolledAccordion;
