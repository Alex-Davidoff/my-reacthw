import { useEffect, useState } from "react";
import { IUser } from "../../models/IUserProps";
import { getCurrentUser } from "../../services/dummy.api.service";

export const UserComponent = () => {
    const [currentUser, setCurrentUser] = useState<IUser>();
    
    useEffect(() => {
        getCurrentUser().then((response) => setCurrentUser(response))
    },[]);

    return(
        <div>
            <p>{currentUser?.id}</p>
            <h2>{currentUser?.firstName} {currentUser?.lastName}</h2>
            <h3>{currentUser?.username} {currentUser?.email}</h3>
            <button className="border border-black rounded w-24">Posts of user</button>
        </div>
    );
}