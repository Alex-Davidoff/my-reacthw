import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";
import { getAll } from "../../services/api.service";

type PostSliceType = {
    posts: IPost[];
}

const initPostSliceState: PostSliceType = {posts: []}

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
    })
})

const loadPosts = createAsyncThunk('loadPosts', async (_, thunkApi) => {
    const posts = await getAll<IPost[]>('/posts');
    return thunkApi.fulfillWithValue(posts);    
});

export const postActions = {...postSlice.actions, loadPosts}