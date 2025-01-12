import { Link } from "react-router"

export const MenuComponent = () => {
    return(
        <ul className="flex gap-8">
            <li className="bg-orange-200"><Link to={`/users`}>Users</Link></li>
            <li className="bg-blue-200"><Link to={`/posts`}>Posts</Link></li>
        </ul>
    )
}