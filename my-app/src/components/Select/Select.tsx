import {KeyboardEvent, MouseEventHandler, useState} from "react";
import s from "./Select.module.css"

type SelectPropsType = {
    value: any,
    // onChange: (value: any) => void,
    items: string[],
}

const Select = (props: SelectPropsType) => {
    const {items, value} = props;

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selectedItem, setSelectedItem] = useState(value)
    const [hoveredItem, setHoveredItem] = useState(value)

    const onClickHandler = () => setIsCollapsed(!isCollapsed);

    const itemOnClickHandler = (_value: string) => {
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

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
            let index = items.indexOf(hoveredItem);

            switch (e.key) {
                case 'ArrowTop':
                    if(index > 0) {
                        setHoveredItem(items[--index]);
                        setSelectedItem(items[index]);
                    }
                    break;
                case 'ArrowDown':
                    if (index < items.length) {
                        setHoveredItem(items[++index]);
                        setSelectedItem(items[index]);
                    }
                    break;
                case 'Enter':
                    setIsCollapsed(!isCollapsed);
                    break;
            }
    }

    return (
        <div onKeyDown={onKeyDownHandler} tabIndex={0}>
            <div onClick={onClickHandler} className={s.select}>{selectedItem}</div>
            <div className={(!isCollapsed ? s.list : '') + ' ' + classHidden} onBlur={onBlurHandler}>
                {
                    !isCollapsed && (
                        items.map((item, index) => <p key={index}
                                                      onMouseEnter={() => setHoveredItem(item)}
                                                      onClick={() => itemOnClickHandler(item)}
                                                      className={s.item + ' ' + ((hoveredItem === item) ? s.selected : '')}

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