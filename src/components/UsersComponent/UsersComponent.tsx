import { useEffect, useState } from "react"
import { GetUsers } from "../../services/Users.api.service"
import { IUser } from "../../models/IUser"
import { UserComponent } from "../UserComponent/UserComponent"

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() =>
        {
            GetUsers().then(({users}) => setUsers(users));
        }
        ,[]);
    return (
    <div>
        {
        users.map((user) => <UserComponent key={user.id} item={user}/>)
        }
    </div>
    )
}