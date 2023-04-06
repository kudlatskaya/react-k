
type AccordionPropsType = {
    title: string,
    collapsed: boolean,
    onClick: (value: boolean) => void,
    items: ItemType[],
    onClickCallBack: (value: any) => void,
}

function Accordion(props: AccordionPropsType) {
    const {title, collapsed, onClick, items, onClickCallBack} = props;

    return <div>
        <AccordionTitle title={title} collapsed={collapsed} onClick={onClick}/>
        {!props.collapsed && <AccordionBody items={items} onClickCallBack={onClickCallBack}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string,
    collapsed: boolean,
    onClick: (value: boolean) => void,
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const {title, collapsed, onClick} = props;

    return <h3 onClick={() => onClick(!collapsed)}>{title}</h3>
}


export type ItemType = {
    title: string,
    value: any,
}

type AccordionBodyPropsType = {
    items: ItemType[],
    onClickCallBack: (value: any) => void,
}

function AccordionBody(props: AccordionBodyPropsType) {
    const {items, onClickCallBack} = props;

    return <ul>
        {
            items.map((item, index) => <li key={index} onClick={() => onClickCallBack(item.value)}>{item.title}</li>)
        }
    </ul>
}

export default Accordion;
