import { useEffect } from "react";
import { useMainDispatch, useMainSelector } from "../redux/store";
import { commentActions } from "../redux/slices/CommentSlice";

export const CommentsPage = () => {
    const dispatch = useMainDispatch();
    const comments = useMainSelector((state) => state.commentStoreSlice.comments);

    useEffect(() => {
        dispatch(commentActions.loadComments());
    },[]);

    return (
        <div>
        {comments.map((comment) => (
            <div key={comment.id}>
                {comment.body}
            </div>
        ))}
        </div>
    )
}