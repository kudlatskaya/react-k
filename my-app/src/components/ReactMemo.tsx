export const Example = () => {
return <>
    <NewMessagesCounter count={10}/>
    <Users users={['Masha', 'Tasha', 'Dasha']}/>
</>
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const Users = (props: { users: string[] }) => {
    const {users} = props;

    return <div>
        {
            users.map((item,index) => <div>{item}</div>)
        }
    </div>
}