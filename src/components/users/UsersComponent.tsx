import { useEffect, useState } from "react";
import { UserComponent } from "./UserComponent"
import { UsersMenuComponent } from "./UsersMenuComponent";

export const UsersComponent = () => {
    console.log('Users');

    const [users, setUsers] = useState();

    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((objRes) => setUsers(objRes));
    },[])


    return(
        <div className="Users">
            <UsersMenuComponent/>
            <UserComponent/>
        </div>
    )
}