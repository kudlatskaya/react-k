import {MouseEventHandler, useState} from "react";
import s from "./Select.module.css"

type SelectPropsType = {
    value: any,
    onChange: (value: any) => void,
    items: string[],
}

const Select = (props: SelectPropsType) => {
    const {items, value, onChange} = props;

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selectedItem, setSelectedItem] = useState('')

    const onClickHandler = () => setIsCollapsed(!isCollapsed);

    const itemOnClickHandler = (_value: string) => {
        onChange(_value)
        setSelectedItem(_value)
        setIsCollapsed(!isCollapsed)
    }

    // const onMouseOverHandler = (e: MouseEventHandler<HTMLParagraphElement>) => {
    //     setSelectedItem()
    // }
let classHidden = '';
    const onBlurHandler = () => {
        classHidden = s.hidden
    }

    return (
        <div>
            <div onClick={onClickHandler} className={s.select}>{value}</div>
            <div className={(!isCollapsed ? s.list : '') + ' ' + classHidden} onBlur={onBlurHandler}>
                {
                    !isCollapsed && (
                        items.map((item, index) => <p key={index}
                                                      onClick={() => itemOnClickHandler(item)}
                                                      className={s.item + ' ' + ((value === item) ? s.selected : '')}

                        >
                            {item}
                        </p>)
                    )
                }
            </div>
        </div>
    );
};

export default Select;