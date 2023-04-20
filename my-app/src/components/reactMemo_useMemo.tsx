import React, {useMemo, useState} from 'react'

const MemoComponentTotal = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Masha', 'Tasha', 'Dasha', 'Iris']);

    const UsersSecret = (props: { users: string[] }) => {
        const {users} = props;

        return <div>
            {
                users.map((item, index) => <div key={index}>{item}</div>)
            }
        </div>
    }

    // memo - хок, позволяет перерисовать Users, только если изменился  UsersSecret
    const Users = React.memo(UsersSecret);
    let filteredUsers = useMemo(() => {
        return users.filter(item => item.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
        <div>
            <button onClick={() => setUsers([...users, 'Sveta'])}>add user</button>
        </div>

        <Users users={filteredUsers}/>
    </>
}

export default MemoComponentTotal