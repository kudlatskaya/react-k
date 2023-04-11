import {useReducer, useState} from "react";
import AccordionTitle from "./UncontrolledAccordionTitle";
import AccordionBody from "./UncontrolledAccordionBody";
import reducer, {TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    title: string,
}



function UncontrolledAccordion(props: AccordionPropsType) {
    // const [ collapsed, setСollapsed ] = useState(false);
    const [ collapsed, dispatch ] = useReducer(reducer, false);

    return <div>
        {/*<AccordionTitle title={props.title} onClick={() => setСollapsed(!collapsed)}/>*/}
        <AccordionTitle title={props.title} onClick={ () => dispatch({type: TOGGLE_COLLAPSED}) }/>
        {!collapsed && <AccordionBody />}
    </div>
}

export default UncontrolledAccordion;
