import { useFetch } from "../../hooks/useFetch"
import { IUsersResponse } from "../../models/IUser";
import { UserComponent } from "./UserComponent";

const defVal:IUsersResponse = {
    users:[],
    total: 0,
    skip: 0,
    limit: 0
}

export const UsersComponent = () => {
    const {users} = useFetch<IUsersResponse>('/users', defVal);

    return (
        <div>
            {
                users.map((user) => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    )
}