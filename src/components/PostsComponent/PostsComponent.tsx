import { useEffect, useState } from "react";
import { IPost } from "../../models/IPosts";
import { getApiData } from "../../services/dummy.api.service";
import { useNavigate } from "react-router";
import { PostComponent } from "./PostComponent";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>();
    const navigate = useNavigate();
    const goToLogin = () => { navigate('/login') }; 
    console.log(posts)
    useEffect(() => {
        getApiData(`/users/${localStorage.getItem('userId')}/posts`)
        .then((response) => {
            if (response) {
                setPosts(response.posts)
            } else {
                goToLogin()
            }
        })
    },[])

    return (
        <div>
            {posts?.map((post) => <PostComponent key={post.id} post={post}/>)}
        </div>
    )
}