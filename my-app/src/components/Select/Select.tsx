import {useState} from "react";

export type ItemType = {
    title: string,
    value: any,
}

type SelectPropsType = {
    value: any,
    onChange: (value: any) => void,
    items: ItemType[],
}

const Select = (props: SelectPropsType) => {
    const {items, value, onChange} = props;

    const [isCollapsed, setIsCollapsed] = useState(true);

    const onClickHandler = () => setIsCollapsed(!isCollapsed);

    const itemOnClickHandler = (_value: any) => {
        onChange(_value)
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div>
            <div onClick={onClickHandler}>{value}</div>
            {
                !isCollapsed && (
                    items.map(item => <div onClick={() => itemOnClickHandler(item.title)}>{item.title}</div>)
                )
            }
        </div>
    );
};

export default Select;