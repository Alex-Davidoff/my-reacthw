import { IComment } from "../../../models/IComment";
import CommentComponent from "../CommentComponent/CommentComponent";

interface ICommentsProps {
    comments: IComment[]
}

const CommentsComponent = ({comments}: ICommentsProps) => {
    return(
        <div className="border border-violet-500 mb-2">
            {comments.map((comment) => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    )
};

export default CommentsComponent;
