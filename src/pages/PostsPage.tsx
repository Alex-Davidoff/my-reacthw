import { useEffect } from "react";
import { useMainDispatch, useMainSelector } from "../redux/store";
import { postActions } from "../redux/slices/PostSlice";
import PostsComponent from "../components/Posts/PostsComponent/PostsComponent";

export const PostsPage = () => {
    const dispatch = useMainDispatch();
    const posts = useMainSelector((state) => state.postStoreSlice.posts);

    useEffect(() => {
        dispatch(postActions.loadPosts());
    },[]);

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    )
}