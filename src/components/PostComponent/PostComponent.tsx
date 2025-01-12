import { IPost } from "../../models/IPost";

interface IPostProps {
    item: IPost;
}

export const PostComponent = ({item}: IPostProps) => {
    return (
        <div className="border-2 border-blue-400 rounded-lg mb-0.5 px-1.5">
            <h3 className="ml-4">{item.id}) {item.title}</h3>
            <p>{item.body}</p>
        </div>
    )
}