import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean,
    onClick: (value: boolean) => void,
}

function Accordion(props: AccordionPropsType) {
        const { title, collapsed, onClick } = props;

        return <div>
            <AccordionTitle title={title} collapsed={collapsed} onClick={onClick}/>
            {!props.collapsed && <AccordionBody />}
        </div>
}

type AccordionTitlePropsType = {
    title: string,
    collapsed: boolean,
    onClick: (value: boolean) => void,
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const { title, collapsed, onClick } = props;

    return <h3 onClick={ () => onClick(!collapsed) }>{title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;
