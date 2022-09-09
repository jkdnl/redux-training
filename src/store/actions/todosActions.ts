import {AppDispatch} from "../store";
import {todosSlice} from "../reducers/todosSlice";
import axios from "axios";
import {ITodo} from "../../models/ITodo";

export const fetchTodos = (id: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(todosSlice.actions.fetching())
        const {data} = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
        dispatch(todosSlice.actions.fetchingSuccess(data))
    } catch (e) {
        dispatch(todosSlice.actions.fetchingError(e as Error))
    }
}

export const removeTodo = (id: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE"
        })
        dispatch(todosSlice.actions.removeTodo(id))
    } catch (e) {
        dispatch(todosSlice.actions.fetchingError(e as Error))
    }
}

export const completeTodo = (id: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PATCH"
        })
        dispatch(todosSlice.actions.completeTodo(id))
    } catch (e) {
        dispatch(todosSlice.actions.fetchingError(e as Error))
    }
}