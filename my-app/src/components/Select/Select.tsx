import {KeyboardEvent, useState} from "react";
import s from "./Select.module.css"

type SelectPropsType = {
    value: any,
    items: string[],
}

const Select = (props: SelectPropsType) => { console.log('select')
    const {items, value} = props;

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selectedItem, setSelectedItem] = useState(value)
    const [hoveredItem, setHoveredItem] = useState(value)

    const onClickHandler = () => setIsCollapsed(!isCollapsed);

    const itemOnClickHandler = (_value: string) => {
        setSelectedItem(_value)
        setIsCollapsed(!isCollapsed)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        e.preventDefault();

        let index = items.indexOf(hoveredItem);

        if (index >= 0) {
            switch (e.key) {
                case 'ArrowUp':
                    if (index > 0) {
                        setHoveredItem(items[--index]);
                        setSelectedItem(items[index]);
                    }
                    break;
                case 'ArrowDown':
                    if (index < items.length - 1) {
                        setHoveredItem(items[++index]);
                        setSelectedItem(items[index]);
                    }
                    break;
                case 'Enter':
                    setIsCollapsed(!isCollapsed);
                    break;
            }
        }
    }

    return (
        <div onKeyDown={onKeyDownHandler} tabIndex={0}>
            <div onClick={onClickHandler} className={s.select}>{selectedItem}</div>
            <div className={!isCollapsed ? s.list : ''}>
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