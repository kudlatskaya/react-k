
type SelectPropsType = {
    value: any,
    onChange: (value: any) => void,
    items: ItemType[],
}
export type ItemType = {
    title: string,
    value: any,
}

const Select = (props: SelectPropsType) => {
    const {items} = props;

    return (
        <div>
            <div>{}</div>
            {items.map(item => <div>{item.title}</div>)}
        </div>
    );
};

export default Select;