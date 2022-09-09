import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";

interface UserState {
    users: IUser[],
    loading: boolean,
    error: string
}
const initialState: UserState = {
    users: [],
    loading: false,
    error: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
            state.error = ""
        },
        fetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.loading = false
            state.error = ""
            state.users = action.payload
        },
        fetchingError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },
        filterUsers(state, action: PayloadAction<string>) {
            state.users = state.users.filter(user => user.name.toLowerCase().includes(action.payload))
        }
    }
})

export default userSlice.reducer
