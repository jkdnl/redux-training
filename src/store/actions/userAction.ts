import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "../reducers/userSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.fetching())
        const {data} = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
        dispatch(userSlice.actions.fetchingSuccess(data))
    } catch (e) {
        dispatch(userSlice.actions.fetchingError(e as Error))
    }
}

export const filterUsers = (value: string) => (dispatch: AppDispatch) => {
    if (value.length > 2) dispatch(userSlice.actions.filterUsers(value))
}