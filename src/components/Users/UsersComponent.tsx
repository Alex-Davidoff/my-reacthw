import { useEffect, useState } from "react";
import { getUsers } from "../../services/users.api.service";
import { IUser, IUsersResponse } from "../../models/IUser";
import { UserComponent } from "./UserComponent";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";
import { useSearchParams } from "react-router";

export const UsersComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({skip:'0', limit: '30'});
    const skip:number = Number(searchParams.get('skip') || '0');
    const limit:number = Number(searchParams.get('limit') || '30');
    const [retr_obj, setRetr_obj] = useState<IUsersResponse>();
    let users_total:number = 0;
    let users_count:number = 0;
    let users: IUser[] = [];
    if (retr_obj) {
        users_total = Number(retr_obj.total);
        users = retr_obj.users;
        users_count = users.length;
    }
    useEffect(() =>
        {
            getUsers(skip.toString(), limit.toString()).then((resp) => setRetr_obj(resp));
        }
        ,[skip, limit]);
    return (
    <div>
        {
            users.map((user) => <UserComponent key={user.id} item={user}/>)
        }
            <PaginationComponent ucount={users_count} utotal={users_total}/>
    </div>
    )
}