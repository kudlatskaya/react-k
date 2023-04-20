import {KeyboardEvent, useState} from "react";
import s from "./Select.module.css"

export type CityType = {
    city: string,
    country: string,
    population: number,
}

type SelectPropsType = {
    value: any,
    items: CityType[],
    id: number,
}

const MemoSelect = (props: SelectPropsType) => {
    const {items, value} = props;

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selectedItem, setSelectedItem] = useState(value)
    const [hoveredItem, setHoveredItem] = useState(value)

    const onClickHandler = () => {
        setIsCollapsed(!isCollapsed);
        filteredCities
    }

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
                                                      onClick={() => itemOnClickHandler(item.city)}
                                                      className={s.item + ' ' + ((hoveredItem === item) ? s.selected : '')}
                        >
                            {item.city}
                        </p>)
                    )
                }
            </div>
        </div>
    );
};

export default MemoSelect;