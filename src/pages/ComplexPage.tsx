import { useEffect } from "react";
import { useMainDispatch, useMainSelector } from "../redux/store";
import { userActions } from "../redux/slices/UserSlice";
import { postActions } from "../redux/slices/PostSlice";
import { commentActions } from "../redux/slices/CommentSlice";

export const ComplexPage = () => {
    const dispatch = useMainDispatch();
    const {userStoreSlice: {users}, postStoreSlice: {posts}, commentStoreSlice: {comments}} = useMainSelector((state) => state);

    useEffect(() => {
        if (!users.length){
            dispatch(userActions.loadUsers());
        }
        if (!posts.length){
            dispatch(postActions.loadPosts());
        }
        if (!comments.length){
            dispatch(commentActions.loadComments());
        }
    },[])

    return (
        <div>
        
        </div>
    )
}