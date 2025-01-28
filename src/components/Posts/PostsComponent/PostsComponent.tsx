import { IPost } from "../../../models/IPost";
import PostComponent from "../PostComponent/PostComponent";

interface IPostsProps {
    posts: IPost[];
}

const PostsComponent = ({posts}: IPostsProps) => {
    return (
        <div className="border border-blue-500 mb-2">
            {posts.map((post) => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;