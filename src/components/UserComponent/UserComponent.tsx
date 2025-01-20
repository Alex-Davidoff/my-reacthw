import { useEffect, useState } from "react";
import { IUser } from "../../models/IUserProps";
import { getApiData } from "../../services/dummy.api.service";
import { useNavigate } from "react-router";

export const UserComponent = () => {
    const [currentUser, setCurrentUser] = useState<IUser>();
    const navigate = useNavigate();
    const goToLogin = () => { navigate('/login') };    
    useEffect(() => {
        getApiData('/me').then((response) => {
            if (response) {
                setCurrentUser(response)
            } else {
                goToLogin()
            }
        })
    },[]);

    return(
        <div>
            <p>id = {currentUser?.id}</p>
            <h2>{currentUser?.firstName} {currentUser?.lastName}</h2>
            <h3>{currentUser?.username} {currentUser?.email}</h3>
            <button onClick={() => {
            }} className="border border-black rounded w-24">Posts of user</button>
        </div>
    );
}