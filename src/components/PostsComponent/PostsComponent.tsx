import { useState } from "react";
import { IPost } from "../../models/IPosts";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>();

    return (
        <>PostsComponent</>
    )
}