import { useEffect, useState } from "react";
import { GetPosts } from "../../services/Posts.api.service";
import { IPost } from "../../models/IPost";
import { PostComponent } from "../PostComponent/PostComponent";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() =>
        {
            GetPosts().then(({posts}) => setPosts(posts));
        }
        ,[]);
    return (
    <div>
        {
            posts.map((post) => <PostComponent key={post.id} item={post}/>)
        }
    </div>
    )
}