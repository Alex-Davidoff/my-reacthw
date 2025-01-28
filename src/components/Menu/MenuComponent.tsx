import { Link } from "react-router"

export const MenuComponent = () => {
    return(
        <div>
            <ul className="flex gap-3 mb-2">
                <li className="border border-black px-2"><Link to='/users'>users</Link></li>
                <li className="border border-black px-2"><Link to='/posts'>posts</Link></li>
                <li className="border border-black px-2"><Link to='/comments'>comments</Link></li>
                <li className="border border-black px-2"><Link to='/complex'>complex</Link></li>
            </ul>
        </div>
    )
}