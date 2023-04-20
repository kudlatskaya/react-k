import React, {useState} from "react";

export const Example = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Masha', 'Tasha', 'Dasha']);

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={() => setUsers([...users, 'Sveta'])}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

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