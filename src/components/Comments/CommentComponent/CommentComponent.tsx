import { IComment } from "../../../models/IComment";

interface ICommentsProps {
    comment: IComment
}

const CommentComponent = ({comment}: ICommentsProps) => {
    return (
        <p className="text-violet-700">{comment.body}</p>
    );
};

export default CommentComponent;
