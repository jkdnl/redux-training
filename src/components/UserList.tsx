import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchUsers, filterUsers} from "../store/actions/userAction";
import UserCard from "./UserCard";

const UserList: React.FC = () => {

    const {users, loading, error} = useAppSelector(state => state.userReducer)
    const [value, setValue] = useState<string>("")

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    useEffect(() => {
        dispatch(filterUsers(value.toLowerCase()))
    }, [value])

    return (
        <>
            <input
                type="text"
                className="w-1/2 flex mx-auto outline-0 border-2 border-blue-700 py-1 px-2 rounded my-6"
                placeholder="Search user"
                value={value}
                onChange={event => setValue(event.target.value)}
                disabled={loading}
            />
            {loading && <h1 className="w-full text-center mt-10">Loading the users...</h1>}
            {users && users.map(user => <UserCard key={user.id} user={user} />)}
        </>
    );
};

export default UserList