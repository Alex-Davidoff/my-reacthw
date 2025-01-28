import { useEffect } from "react";
import { useMainDispatch, useMainSelector } from "../redux/store";
import { commentActions } from "../redux/slices/CommentSlice";
import CommentsComponent from "../components/Comments/CommentsComponent/CommentsComponent";

export const CommentsPage = () => {
    const dispatch = useMainDispatch();
    const comments = useMainSelector((state) => state.commentStoreSlice.comments);

    useEffect(() => {
        dispatch(commentActions.loadComments());
    },[]);

    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    )
}