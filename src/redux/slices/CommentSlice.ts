import { createSlice } from "@reduxjs/toolkit";
import { IComment } from "../../models/IComment";

type CommentSliceType = {
    comments: IComment[];
}

const initCommentSliceState: CommentSliceType = {comments: []}

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder
})