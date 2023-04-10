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

export default AccordionBody;