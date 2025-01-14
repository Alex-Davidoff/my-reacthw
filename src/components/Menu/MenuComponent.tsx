import { Link } from "react-router"

export const MenuComponent = () => {
    return(
        <div>
            <ul>
                <li><Link to='/users'>/users</Link></li>
            </ul>
        </div>
    )
}