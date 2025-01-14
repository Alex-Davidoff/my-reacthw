import { useEffect, useState } from "react";
import { getUsers } from "../../services/users.api.service";
import { IUser, IUsersResponse } from "../../models/IUser";
import { UserComponent } from "./UserComponent";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";

export const UsersComponent = () => {
    const [retr_obj, setRetr_obj] = useState<IUsersResponse>();
    let users_total:number = 0;
    let users_limit:number = 30;
    let users_skip:number = 0;
    let users: IUser[] = [];
    if (retr_obj) {
        users_total = retr_obj.total;
        users = retr_obj.users;
        console.log('retr_obj good')
    } else {
        console.log('retr_obj is null')
    }
    useEffect(() =>
        {
            getUsers().then((resp) => setRetr_obj(resp));
        }
        ,[]);
    return (
    <div>
        {
            users.map((user) => <UserComponent key={user.id} item={user}/>)
        }
    <PaginationComponent/>
    </div>
    )
}