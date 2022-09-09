import React, {MouseEventHandler, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {completeTodo, fetchTodos, removeTodo} from "../store/actions/todosActions";
import TodoCard from "./TodoCard";
import {ChevronLeftIcon} from "@heroicons/react/24/outline";

const UserTodosPage: React.FC = () => {

    const params = useParams<'id'>()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const {todos, loading, error} = useAppSelector(state => state.todosReducer)

    useEffect(() => {
        dispatch(fetchTodos(params.id))
    }, [])

    const removeHandler = (id: string) => {
        dispatch(removeTodo(id))
        console.log("rem")
    }
    const completeHandler = (id: string) => {
        dispatch(completeTodo(id))
        console.log("com")
    }

    return (
        <>
            <div>
                {loading && <h1 className="w-full text-center mt-10">Loading the tasks...</h1>}
                {todos.map(todo => <TodoCard key={todo.id} todo={todo} removeHandler={() => removeHandler(todo.id)} completeHandler={() => completeHandler(todo.id)} />)}
            </div>
            <button className="fixed top-5 left-5 flex items-center hover:text-blue-700 transition-all"
            onClick={() => navigate("/")}>
                <ChevronLeftIcon className="w-6 mr-2" />
                Back to all users
            </button>
        </>
    );
};

export default UserTodosPage;