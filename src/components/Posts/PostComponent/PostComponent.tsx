import { IPost } from "../../../models/IPost";

interface IPostProps {
    post: IPost;
}

const PostComponent = ({post}: IPostProps) => {
    return (
        <div>
            <p className="text-blue-700">{post.title}</p>
        </div>
    );
};

export default PostComponent;