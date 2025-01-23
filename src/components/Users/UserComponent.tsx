import { IUser } from "../../models/IUser";


interface IUserProps {
    item: IUser;
}

export const UserComponent = ({item}: IUserProps) => {
    
    return (
        <div> 
            <h3>{item.id} {item.firstName} {item.lastName}</h3>
        </div>
    )
}