type AccordionTitlePropsType = {
    title: string,
    collapsed: boolean,
    onClick: (value: boolean) => void,
}

 function AccordionTitle(props: AccordionTitlePropsType) {
    const {title, collapsed, onClick} = props;

    return <h3 onClick={() => onClick(!collapsed)}>{title}</h3>
}

export default AccordionTitle;