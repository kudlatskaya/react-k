import React, {useCallback, useMemo, useState} from 'react'

const UseCallback = () => { console.log('UseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'HTML', 'CSS', 'JS']);

    const memoizedAddBook = useMemo(() => {
        return () => {
            setBooks([...books, 'Angular'])
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        setBooks([...books, 'Angular'])
    }, [books])

    return <>
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BooksPropsType = {
    addBook:() => void,
}

const Books = (props: BooksPropsType) => {
    const { addBook} = props;
    console.log('books')
    const onClickHandler = () => {
        addBook();
    }

    return <div>
        <div>
            <button onClick={onClickHandler}>add user</button>
        </div>

    </div>
}

const Book = React.memo(Books);

export default UseCallback