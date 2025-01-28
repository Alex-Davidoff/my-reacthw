import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

type UserSliceType = {
    users: IUser[];
}

const initUserSliceState: UserSliceType = {users: []}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder => builder
})