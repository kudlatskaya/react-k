import {useReducer, useState} from "react";
import AccordionTitle from "./UncontrolledAccordionTitle";
import AccordionBody from "./UncontrolledAccordionBody";
import reducer from "./reducer";

type AccordionPropsType = {
    title: string,
}



function UncontrolledAccordion(props: AccordionPropsType) {
    // const [ collapsed, setСollapsed ] = useState(false);
    // let [ collapsed, dispatch ] = useReducer(reducer, false);

    return <div>
        {/*<AccordionTitle title={props.title} onClick={() => setСollapsed(!collapsed)}/>*/}

        {/*<AccordionTitle title={props.title} onClick={ () => dispatch({type: 'TOGGLE-COLLAPSED'}) }/>*/}
        {/*{!collapsed && <AccordionBody />}*/}
    </div>
}

export default UncontrolledAccordion;
