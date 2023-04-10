import AccordionTitle from "./AccordionTitle";
import AccordionBody, {ItemType} from "./AccordionBody";

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


export default Accordion;
