import { useEffect } from "react";
import { useMainDispatch, useMainSelector } from "../redux/store";
import { postActions } from "../redux/slices/PostSlice";

export const PostsPage = () => {
    const dispatch = useMainDispatch();
    const posts = useMainSelector((state) => state.postStoreSlice.posts);

    useEffect(() => {
        dispatch(postActions.loadPosts());
    },[]);

    return (
        <div>
        {posts.map((post) => (
            <div key={post.id}>
                {post.title}
            </div>
        ))}
        </div>
    )
}