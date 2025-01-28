import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IComment } from "../../models/IComment";
import { getAll } from "../../services/api.service";

type CommentSliceType = {
    comments: IComment[];
}

const initCommentSliceState: CommentSliceType = {comments: []}

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.comments = action.payload;
    })
})

const loadComments = createAsyncThunk('loadComments', async (_, thunkApi) => {
    const comments = await getAll<IComment[]>('/comments');
    return thunkApi.fulfillWithValue(comments);    
});

export const commentActions = {...commentSlice.actions, loadComments}