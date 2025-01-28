import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";
import { IPost } from "../models/IPost";
import { IComment } from "../models/IComment";

type UserSliceType = {
    users: IUser[];
}

type PostSliceType = {
    posts: IPost[];
}

type CommentSliceType = {
    comments: IComment[];
}

const initUserSliceState: UserSliceType = {users: []}
const initPostSliceState: PostSliceType = {posts: []}
const initCommentSliceState: CommentSliceType = {comments: []}

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder => builder
})

const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder
})

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder
})

export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer
    }
})