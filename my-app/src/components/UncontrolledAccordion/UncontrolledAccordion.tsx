import {useReducer, useState} from "react";
import AccordionTitle from "./UncontrolledAccordionTitle";
import AccordionBody from "./UncontrolledAccordionBody";

type AccordionPropsType = {
    title: string,
}

type ActionType = {
    type: string,
}
const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

const reducer = (state: boolean, action: ActionType) => {
    if(action.type === TOGGLE_COLLAPSED) {
        return !state;
    }

    return state;
}

function UncontrolledAccordion(props: AccordionPropsType) {
    // const [ collapsed, setСollapsed ] = useState(false);
    const [ collapsed, dispatch ] = useReducer(reducer, false);

    return <div>
        {/*<AccordionTitle title={props.title} onClick={() => setСollapsed(!collapsed)}/>*/}
        <AccordionTitle title={props.title} onClick={ () => dispatch({type: 'TOGGLE-COLLAPSED'}) }/>
        {!collapsed && <AccordionBody />}
    </div>
}

export default UncontrolledAccordion;
