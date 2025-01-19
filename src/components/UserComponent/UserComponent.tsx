import { useState } from "react";
import { IUser } from "../../models/IUserProps";

export const UserComponent = () => {
    const [currentUser, serCurrentUser] = useState<IUser>();

    

    return(
        <>UserComponent</>
    );
}