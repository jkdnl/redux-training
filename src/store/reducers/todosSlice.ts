import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../../models/ITodo";

interface TodosState {
    todos: ITodo[],
    loading: boolean,
    error: string
}

const initialState: TodosState = {
    todos: [],
    loading: false,
    error: ""
}

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
            state.error = ""
        },
        fetchingSuccess(state, action: PayloadAction<ITodo[]>) {
            state.loading = false
            state.error = ""
            state.todos = action.payload
        },
        fetchingError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },
        removeTodo(state, action: PayloadAction<string | undefined>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        completeTodo(state, action: PayloadAction<string | undefined>) {
            state.todos = state.todos.filter(todo => todo.id === action.payload ? todo.completed = true : todo)
        }
    }
})

export default todosSlice.reducer