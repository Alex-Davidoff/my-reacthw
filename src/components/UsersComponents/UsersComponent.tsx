import { useEffect, useState } from "react";
import { IUser } from "../../models/IUser";
import { GetUsers } from "../../services/Users.api.service";
import { UserComponent } from "./UserComponent";

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