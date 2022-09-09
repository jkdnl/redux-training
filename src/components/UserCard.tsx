import React from 'react';
import {IUser} from "../models/IUser";
import {useNavigate} from "react-router-dom";

const UserCard = ({ user }: {user: IUser}) => {

    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(`/user/${user.id}`)
    }


    return (
        <div className="w-1/2 border-2 border-blue-700 rounded p-4 my-2 mx-auto
        hover:bg-blue-700 hover:text-white transition-all hover:cursor-pointer"
        onClick={clickHandler}>
            <div className="font-bold">{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    );
};

export default UserCard;