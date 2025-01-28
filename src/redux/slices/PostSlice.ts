import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";

type PostSliceType = {
    posts: IPost[];
}

const initPostSliceState: PostSliceType = {posts: []}

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder
})