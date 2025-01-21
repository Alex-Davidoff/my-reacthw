import { IPost } from "../../models/IPosts"

interface IPostProps {
    post: IPost
}

export const PostComponent = ({post}:IPostProps) => {
    return(
        <div>
            <h2>{post.title} ({post.views} views)</h2>
        </div>
    )
}