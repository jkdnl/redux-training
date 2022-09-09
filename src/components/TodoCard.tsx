import React from 'react';
import {ITodo} from "../models/ITodo";
import {CheckIcon, XMarkIcon} from "@heroicons/react/24/outline";

interface TodoCardProps {
    todo: ITodo,
    removeHandler: any,
    completeHandler: any
}

const TodoCard: React.FC<TodoCardProps> = ({todo, removeHandler, completeHandler}) => {
    const opacity = todo.completed ? " opacity-60" : ""
    return (
        <div className={`w-1/2 border-2 border-blue-700 rounded p-4 my-4 mx-auto
        hover:bg-blue-700 hover:text-white transition-all relative items-center flex justify-between` + opacity}>
            <h2 className="w-5/6">{todo.title}</h2>
            <div>
                {!todo.completed ? <button onClick={completeHandler}
                         className="rounded hover:text-green-600 hover:bg-white transition-all mr-1">
                    <CheckIcon className="w-6"/>
                </button> : null}
                <button onClick={removeHandler} className="rounded hover:text-red-600 hover:bg-white transition-all">
                    <XMarkIcon className="w-6" />
                </button>
            </div>
            <span className="absolute -top-4 right-2 bg-orange-300 p-1 rounded text-sm">{todo.completed ? "Completed" : "Incomplete"}</span>
        </div>
    );
};

export default TodoCard;