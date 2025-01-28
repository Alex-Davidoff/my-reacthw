import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";
import { postSlice } from "./slices/PostSlice";
import { commentSlice } from "./slices/CommentSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer
    }
})

export const useMainDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useMainSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();